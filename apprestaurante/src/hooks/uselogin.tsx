import {ChangeEvent,useState } from "react";

function useLogin() {
  const [DataUser, setDataUser] = useState({
    correo: "",
    password: "",
  });

 

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


} catch (error){
    console.log(error)

}}

  

  return {
    handleChangeUser,
    handleSeccion,
    DataUser,
  };

}

export default useLogin;
