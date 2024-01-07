import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function UseSendEmail() {
  const redirect = useNavigate();
  interface Opciones {
    asunto: string;
    mensaje: string;
    link: string;
  }
  const handlesendemail = async (opciones: Opciones) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/auth/repeatemail/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(opciones),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: data.msg,
      });
      redirect("/email-login");
      console.log("correo de inicio de seccion enviados");
    } else {
      throw new Error("Error al enviar los datos");
    }
  };
  const handlechangeEmail = async (correo: string, opciones: Opciones) => {
    console.log(correo, opciones);
    const { asunto, mensaje, link } = opciones;
    const response = await fetch(
      `http://localhost:5000/api/auth/sendchangepassword`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, asunto, mensaje, link }),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: data.msg,
      });
      console.log("correo de cambio de contraseña enviados");
    } else {
      throw new Error("Error al enviar los datos");
    }
  } ;

  const  handlechangePassword = async (token: string, password: string) => {

    const response = await fetch(
      `http://localhost:5000/api/auth/changepassword`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token,password }),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: data.msg,
      });
      console.log("correo de cambio de contraseña enviados");
    } else {
      throw new Error("Error al enviar los datos");
    }
  }

  return { handlesendemail, handlechangeEmail, handlechangePassword};
}
export default UseSendEmail;
