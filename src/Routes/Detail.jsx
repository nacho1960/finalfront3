import React from 'react'
import { useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
const {id} = useParams()
const [seleccion, setSeleccion] = useState({})

useEffect(() => {
  const getResponse = async () => {
    let res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    setSeleccion(res.data);
  };

  getResponse();
}, []);

return (
  <>
    <h1>Detail Dentist id </h1>
    <h1>{seleccion.name}</h1>
    <h1>{seleccion.email}</h1>
    <h1>{seleccion.phone}</h1>
    <h1>{seleccion.website}</h1>
    {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
    {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  </>
)
}

export default Detail