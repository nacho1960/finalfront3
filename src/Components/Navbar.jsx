import React from 'react'
import { Link } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
    <Link to ="/"><h3>Home</h3></Link>
    <Link to ="/contact"><h3>contacto</h3></Link>
    <Link to ="/detail/:id"><h3>detail</h3></Link>
    <Link to ="/favs"><h3>favs</h3></Link>
   

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar