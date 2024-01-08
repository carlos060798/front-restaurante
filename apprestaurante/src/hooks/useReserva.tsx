import { ChangeEvent, useState, FormEvent} from "react";
import Swal from "sweetalert2";
function UseReserva() {
    const [DataReserva, setDataReserva] = useState({
        fechaReserva: "",
        tipoReserva: "",
        cantidadPersonas: "",
    });

    const [Reservas, setReservas] = useState([])
    const[Reserva, setReserva] = useState({})
  
  
  
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDataReserva((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        console.log(DataReserva);
    };
    const handleReserva = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const usuarioid = localStorage.getItem("userId");
      
        // Validar que no falten campos
        
      
        try {
          // Enviar al backend
          const response = await fetch(`http://localhost:5000/api/reservation/${usuarioid}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(DataReserva),
          });
      
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: '¡Registro exitoso!',
              text: 'Reserva creada exitosamente.',
            });
      
            setDataReserva({
              fechaReserva: "",
              tipoReserva: "",
              cantidadPersonas: "",
            });
      
            await getReservas();
        
        }
        } catch (error) {
          console.log(error);
        }
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
    
    const updateReserva = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/reservation/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(DataReserva), // Usa DataReserva en lugar de Reserva
            });
    
            if (response.ok) {
                const data = await response.json();
                setDataReserva(data); // Actualiza DataReserva con los datos actualizados
                return data;
            } else {
                throw new Error("Error al actualizar la reserva");
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    const deleteReserva = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/reservation/${id}`, {
                method: "DELETE",
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
    }
    
  
    return {
        handleChange,
        handleReserva,
        DataReserva,
        setDataReserva,
        Reservas,
        getReservas,
        getReserva,
        Reserva,
        updateReserva,
        deleteReserva
    };
}
export default UseReserva;