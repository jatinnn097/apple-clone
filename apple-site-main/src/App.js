import React from "react";
import { useState } from "react";
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Latest from "./Latest";

function App(){

  const [active, setActive] = useState("");
  return(
    <>
      <Navbar active ={active} setActive={setActive}/>
      <div className={active ? "main-content-blur" : "main-content"}>
          <Hero />
          <Latest />
      </div>
    </>
  )
}

export default App;