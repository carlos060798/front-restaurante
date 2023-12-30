import { ChangeEvent, useState} from "react";
function UseReserva() {
    const [DataReserva, setDataReserva] = useState({
        fechaReserva: "",
        tipoReserva: "",
        cantidadPersonas: "",
    });

    const [Reservas, setReservas] = useState([])
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
    
  
    return {
        handleChange,
        handleReserva,
        DataReserva,
        Reservas,
        getReservas
    };
}
export default UseReserva;