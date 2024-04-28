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
          <input type="text" name='name' placeholder='name' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="text" name='paternallastname' placeholder='paternallastname' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="text" name='maternallastname' placeholder='maternallastname' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" name='password' placeholder='password' required />
          <FaLock className='icon' />
        </div>
        <div className="input-box">
          <input type="text" name='email' placeholder='email' required />
          <MdEmail className='icon' />
        </div>
        <div className="input-box">
          <input type="text" name='cellphone' placeholder='cellphone' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="number" name='typeDocument' placeholder='typeDocument' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="text" name='nroDocument' placeholder='nroDocument' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="text" name='genderId' placeholder='genderId' required />
          <FaUser className='icon' />
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
