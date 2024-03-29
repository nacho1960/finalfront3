
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import {  Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";


function App() {
  return (



    <div className="App">
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/favs" element={<Favs />} />

        <Route path="/*" element={<div>La pagina no existe</div>} />
      </Routes>
    </div>


  );
}

export default App;


