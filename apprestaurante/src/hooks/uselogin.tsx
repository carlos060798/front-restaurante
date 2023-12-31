import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const [DataUser, setDataUser] = useState({
    correo: "",
    password: "",
  });

  const redirect = useNavigate();

  const handleChangeUser = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };

  const handleSeccion = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if ([DataUser.correo, DataUser.password].includes(""))
      throw new Error("Por favor llenar todos los campos");
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DataUser),
      });

      console.log(response);

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        redirect("/email-login");
        console.log("correo de inicio de seccion enviados");
      } else {
        throw new Error("Error al enviar los datos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*const ValidarToken = async (token: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/valdateseccion/${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // No es necesario enviar el cuerpo en una solicitud GET
        }
      );

      if (response.ok === true) {
        redirect("/user");
      } else {
        redirect("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }; */
  const ValidarToken = async (token: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/valdateseccion/${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok === true) {
        const data = await response.json();

        // Almacena el token y el ID del usuario en el almacenamiento local

        localStorage.setItem("userId", data.userdata.id);
        redirect("/user");
      } else {
        redirect("/login");
      }
    } catch (error) {
      console.log("Error durante la validación del token:", error);
      redirect("/login"); // Manejo de errores: redirige a /login en caso de error
    }
  };
  const CerrarSeccion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    redirect("/login");
  };
  return {
    handleChangeUser,
    handleSeccion,
    DataUser,
    ValidarToken,
    CerrarSeccion,
  };
}

export default useLogin;
