import { ChangeEvent, useState} from "react";
function UseReserva() {
    const [DataReserva, setDataReserva] = useState({
        fechaReserva: "",
        tipoReserva: "",
        cantidadPersonas: "",
    });

    const [Reservas, setReservas] = useState([])
    const[Reserva, setReserva] = useState({})
    const handleReserva = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const usuarioid = localStorage.getItem("userId");
        console.log(usuarioid);
        // Validar que no falten campos
        if ([DataReserva.fechaReserva, DataReserva.tipoReserva, DataReserva.cantidadPersonas].includes("")) {
            throw new Error("Invalid form data");
        }
        try {
            // Enviar al backend
            const response = await fetch(`http://localhost:5000/api/reservation/${usuarioid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(DataReserva),
            });
            console.log(response);
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                //redireccion("/login");
            } else {
                throw new Error("Error al registrar usuario");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDataReserva((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const getReservas = async () => {
        const usuarioId = localStorage.getItem("userId");
        try {
          const response = await fetch(`http://localhost:5000/api/reservation/reservasuser/${usuarioId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (response.ok) {
            const data = await response.json();
            setReservas(data || []); // Asegurarse de que setReservas recibe un array
         
          } else {
            throw new Error("Error al obtener las reservas");
          }
        } catch (error) {
          console.log(error);
        }
      };

    
      const getReserva = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/reservation/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (response.ok) {
                const data = await response.json();
                setReserva(data); // Asegurarse de que setReserva recibe un objeto
                console.log(data);
                return data; // Devuelve la reserva obtenida
            } else {
                throw new Error("Error al obtener la reserva");
            }
        } catch (error) {
            console.log(error);
            throw error; // Re-lanza el error para que pueda ser manejado en el componente llamador
        }
    };
    
    
  
    return {
        handleChange,
        handleReserva,
        DataReserva,
        setDataReserva,
        Reservas,
        getReservas,
        getReserva,
        Reserva
    };
}
export default UseReserva;