
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import {  Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
  const {state} = useContextGlobal()

  return (



    <div className={`App ${ state.theme === "light" ? "dark" : "light"}`}>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favs" element={<Favs />} />

        <Route path="/*" element={<div>La pagina no existe</div>} />
      </Routes>
      <Footer/>
    </div>


  );
}

export default App;


