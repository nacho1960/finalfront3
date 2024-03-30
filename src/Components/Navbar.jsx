import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const{dispatch,state}= useContext(ContextGlobal)
  const  changeTheme=() => { dispatch({type:"CHANGE_THEME"})}
console.log(state)
  return (
    <nav>
    <Link to ="/"><h3>Home</h3></Link>
    <Link to ="/contact"><h3>contacto</h3></Link>
    <Link to ="/detail/:id"><h3>detail</h3></Link>
    <Link to ="/favs"><h3>favs</h3></Link>
   

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={()=>changeTheme()} >Change theme</button>
    </nav>
  )
}

export default Navbar