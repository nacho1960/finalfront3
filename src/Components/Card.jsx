import React from "react";
import { Link } from "react-router-dom";
import {useContextGlobal} from "./utils/global.context"

const Card = ({ dentista }) => {
  const {dispatch} = useContextGlobal()
console.log("ID del dentista: " + dentista.id);

  // const addFav = () => {
  //   const updatedFavs = [...favs, dentista];
  //   setFavs(updatedFavs);
  //   localStorage.setItem('favs', JSON.stringify(updatedFavs));
  // };
  const addFav = () =>{ dispatch({type: 'ADD_CART', payload: dentista})}
  
  return (
    <Link to={`/detail/${dentista.id}`}>
    <div className="card">
      <img src="src\images\doctor.jpg" style={{ width: "100%", loading: "lazy" }} alt="" />
        {/* En cada card deberan mostrar en name - username y el id */}
        <h1>{dentista.name}</h1>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <h2>{dentista.username}</h2>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <h3>{dentista.id}</h3>
        <button onClick={addFav} className="favButton">Add fav</button>
      
    </div>
    </Link>
  );
};

export default Card;
