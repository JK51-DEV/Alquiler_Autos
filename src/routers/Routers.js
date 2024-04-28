import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Loguearse from "../pages/Loguearse";
import Registrarse from "../pages/Registrarse";
import InicioAdmin from "../pages/InicioAdmin";
import EmpleadosAdmin from "../pages/EmpleadosAdmin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Loguearse" element={<Loguearse/>} />
      <Route path="/Registrarse" element={<Registrarse/>} />
      <Route path="/InicioAdmin" element={<InicioAdmin/>} />
      <Route path="/EmpleadosAdmin" element={<EmpleadosAdmin/>} />
    </Routes>
  );
};

export default Routers;
