import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Registrarse = () => {
  return (
    <div className='bodys'>
    <div className='wrapper'>
      <form>
        <h1><strong>Registro</strong></h1>
        <div className="input-box">
          <input type="text" placeholder='Nombre de usuario' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="text" placeholder='correo electronico' required />
          <MdEmail className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Contraseña' required />
          <FaLock className='icon' />
        </div>

        <button type="submit">Registrarse</button>

        <div className="register-link">
          <p>¿Ya tienes una cuenta? <a href="/Loguearse">Inicia sesión</a></p>
          <p>Volver a <a href="/Home">Inicio</a></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Registrarse
