
import { useState, useEffect,FormEvent,ChangeEvent } from 'react';

function useProfile() {
  const [profileData, setProfileData] = useState({});
  const [formData, setFormData] = useState({
    nombres: '',
    tipoDeIdentificacion: '',
    identificacion: '',
    correo: '',
    password: '',
  });

  useEffect(() => {
    // Obtener datos del perfil al cargar el componente
    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:5000/api/auth/profile/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
          setFormData({
            nombres: data.nombres,
            tipoDeIdentificacion: data.tipoDeIdentificacion,
            identificacion: data.identificacion,
            correo: data.correo,
            password: '', // No mostrar la contraseña actual en el formulario
          });
        } else {
          console.error('Error al obtener datos del perfil');
        }
      } catch (error) {
        console.error('Error en la solicitud de datos del perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Actualizar los datos del perfil después de una actualización exitosa
        console.log('Perfil actualizado correctamente');
      } else {
        throw new Error('Error al actualizar el perfil');
      }
    } catch (error) {
      console.error('Error en la actualización del perfil:', error);
    }
  };

  return {
    profileData,
    formData,
    handleChange,
    handleUpdateProfile,
  };
}

export default useProfile;