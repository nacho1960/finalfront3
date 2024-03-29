import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from "axios";
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()
//   const [dentistas,setDentistas]=useState([])
//   useEffect (()=>{
//     axios.get('https://jsonplaceholder.typicode.com/users')
// .then((res)=>setDentistas(res.data))},[])



  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
       
        
        {state.dentistas.map((dentista)=> <Card key={dentista.id} dentista={dentista}/>)}
      </div>
    </main>
  )
}

export default Home