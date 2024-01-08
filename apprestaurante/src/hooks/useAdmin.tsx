import { useState } from "react";
import Swal from "sweetalert2";

function UseAdmin() {
  const [reservations, setReservation] = useState([]);
  const [users, setUsers] = useState([]);

  const getdataresevations = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reservation");
      const data = await response.json();
      setReservation(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getdatausers = async () => {
    try {
      
      const response = await fetch(`http://localhost:5000/api/users`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },

          }); 
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  
 

  


  const deleteuser = async (id:string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },

          }); 
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Usuario eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
        getdatausers();
      }
      Swal.fire({
        icon: "success",
        title: "Usuario eliminado",
        showConfirmButton: false,
        timer: 1500,
      });
      getdatausers();
    } catch (error) {
      console.log(error);
    }
  };
  const aprobatereserva = async (id:string) => {
    const estatus = {
      estado: "Aprobado",
    };
  
    try {
      const response = await fetch(`http://localhost:5000/api/reservation/aprove/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(estatus),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Reserva aprobada",
          showConfirmButton: false,
          timer: 1500,
        });
  
        // Actualiza la lista de reservas después de la aprobación
        getdataresevations();
      } else {
        Swal.fire({
          title: "Error",
          text: data.message,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    reservations,
    setReservation,
    users,
    getdatausers,
    getdataresevations,
    aprobatereserva,
    deleteuser

  };
}

export default UseAdmin;
