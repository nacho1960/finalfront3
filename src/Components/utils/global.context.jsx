// import { createContext, useContext,useState } from "react";
import { createContext, useContext,useReducer,useEffect } from "react";
import { reducer } from '../../reducer/reducer';
import axios from "axios";
const localStorageFavs = JSON.parse(localStorage.getItem('favs'))
export const initialState = { 
  dentistas: [],
  favs: localStorageFavs === null ? [] : localStorageFavs,
  theme:"light"
 
 
};
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const [favs, setFavs] = useState([])
const [state,dispatch] =useReducer(reducer,initialState)
// const [dentistas,setDentistas]=useState([]) 


// useEffect (()=>{
//   axios.get('https://jsonplaceholder.typicode.com/users')
// // .then((res)=>setDentistas(res.data))},[])
// .then(res=>dispatch({type:'GET_LIST',payload:res.data})),[]
// })
useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => dispatch({ type: 'GET_LIST', payload: res.data }))
    .catch(error => console.error('Error fetching data:', error));
}, []);
useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider
export const useContextGlobal = () => useContext( ContextGlobal)