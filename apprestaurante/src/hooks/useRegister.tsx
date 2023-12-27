import {ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


function useRegistrarUser() {
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    password: "",
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
    if ([formData.nombres, formData.correo, formData.password, formData.tipoDeIdentificacion, formData.identificacion
    ].includes("")) {
     throw new Error ("Invalid form data");
    }
    
    if (formData.password.length < 6) {
      throw new Error ("La contraseña debe tener al menos 6 caracteres");
    }

    // Enviar al backend
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    if (response.ok) {
      redireccion("/login");
    } else {
      throw new Error("Error al registrar usuario");
    }
  
}

  return {
    handleChange,
    handleRegistro,
    formData,
   
  };
}

export default useRegistrarUser;