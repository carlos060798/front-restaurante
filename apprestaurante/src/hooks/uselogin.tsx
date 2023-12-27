import {ChangeEvent,useState } from "react";
import { useNavigate } from "react-router-dom";


function useLogin() {
  const [DataUser, setDataUser] = useState({
    correo: "",
    password: "",
  });

 const redirect= useNavigate();

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };

 

  const handleSeccion = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    if ([DataUser.correo, DataUser.password].includes("")) throw new Error ("Por favor llenar todos los campos");
   try{
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DataUser),
    })

     console.log(response);

      if (response.status === 200) {
        console.log("correo de inicio de seccion enviados")
      } else {
        throw new Error("Error al enviar los datos");
      }


} catch (error){
    console.log(error)

}}


const ValidarToken = async (token:string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/valdateseccion/${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // No es necesario enviar el cuerpo en una solicitud GET
      });
  
      const data = await response.json();
      console.log(data);

    if (response.status === 200) {
      redirect("/user/reservation");
    } else {
      redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
}

  

  return {
    handleChangeUser,
    handleSeccion,
    DataUser,
    ValidarToken,
  };

}

export default useLogin;
