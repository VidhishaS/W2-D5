import React from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App (){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element = {<Home/>} path="/home" />
      <Route element = {<About/>} path="/about" />
      <Route element = {<Contact/>} path="/contact" />
      <Route element = {<Login/>} path="/login" />
      <Route element = {<Signup/>} path="/signup" />

      
    </Routes>
    </BrowserRouter>
    </>
   );
};
export default App;
