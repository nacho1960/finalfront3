import React from "react";
import { useState } from "react";


// const Form = () => {
//   //Aqui deberan implementar el form completo con sus validaciones
//   const[email,setEmail]=useState("");
//   const [name,setName]= useState("");

//  function  handelSubmit(e){
    
//   console.log(e)
//   }

//   return (
//     <div>
//       <form onSubmit={ handelSubmit }>
//         <input type="text" onChange={ handleInput} id="nombre" />
//         <input type="email" onChange={handleInput} id="email" />
//         <button></button>
//       </form>
//     </div>
//   );
// };
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [mostrarError, setMostrarError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [mostrarMensaje, setMostrarMensaje] = useState (false);


  function handleSubmit(e){
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    e.preventDefault()
    if(name.length<5||!emailRegex.test(email)){
      setError("Por favor verifique su información nuevamente")
      setMostrarError(true)
    }
    else{setMensaje( `Gracias ${name} te contactaremos cuando antes vía mail`)
    setMostrarMensaje(true)
  }
  }


  function handleInput(event) {
   
    if (event.target.id === "email") {
       setEmail(event.target.value) }
    if (event.target.id === "nombre") {
      setName(event.target.value)
      
    }
   
  }
  
    
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} id="nombre"/>
      <input type="email" onChange={handleInput} id="email"/>
      <button>Enviar</button>
      </form>
       {mostrarError ? error : null}
      {mostrarMensaje ? mensaje : null} 
    </div>
  );
};

export default Form;
