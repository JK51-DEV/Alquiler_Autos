import React from 'react';
import "../styles/Loguearse.css";
import { FaUser, FaLock } from "react-icons/fa";

const Loguearse = () => {
  return (
    <div className='bodys'>
    <div className='wrapper'>
      <form>
        <h1><strong>Inicia sesión</strong></h1>
        <div className="input-box">
          <input type="text" name="" placeholder='Nombre de usuario' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" name="" placeholder='Contraseña' required />
          <FaLock className='icon' />
        </div>

        <div className="remenber-forgot">
          <label><input type="checkbox" />Recuérdame</label>
          <a href="#">¿Olvidó su contraseña?</a>
        </div>

        <button type="submit">Iniciar sesión</button>

        <div className="register-link">
          <p>¿No tienes una cuenta? <a href="/Registrarse">Regístrese</a></p>
          <p>Volver a <a href="/Home">Inicio</a></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Loguearse;
