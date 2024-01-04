import {ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function useRegistrarUser() {
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    password: "",
    confirmPassword: "",
    tipoDeIdentificacion: "",
    identificacion: "",
  });
  const redireccion = useNavigate();


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

 

const handleRegistro = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.preventDefault();

  // Validar que no falten campos
  if (
    [formData.nombres, formData.correo, formData.password, formData.confirmPassword, formData.tipoDeIdentificacion, formData.identificacion]
      .includes("")
  ) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Por favor, completa todos los campos.',
    });
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Contraseñas no coinciden',
      text: 'Por favor, asegúrate de que las contraseñas coincidan.',
    });
    return;
  }

  if (formData.password.length < 6) {
    Swal.fire({
      icon: 'error',
      title: 'Contraseña corta',
      text: 'La contraseña debe tener al menos 6 caracteres.',
    });
    return;
  }

  // Enviar al backend
  try {
    const { confirmPassword, ...dataToSend } = formData;

    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Tu cuenta ha sido creada exitosamente.',
      });
      redireccion("/login");
    } else {
      throw new Error("Error al registrar usuario");
    }
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Error en el registro',
      text: 'Hubo un problema al intentar registrar el usuario. Por favor, inténtalo de nuevo.',
    });
  }
};


  return {
    handleChange,
    handleRegistro,
    formData,
   
  };
}

export default useRegistrarUser;