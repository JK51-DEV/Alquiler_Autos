import React from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/RegistroCatalogo.css";

const RegistroCatalogo = () => {
  return (
    <div className='bodyscatalogo'>
    <div className='wrappercatalogo'>
      <div className='bodycatalogo'>
      <form>
        <h1><strong>Catálogo</strong></h1>
        <br></br>
        <div className='fromcatalogo'>
        <div className='Contcatalogo'>
          <div className='ingresocatalogo'>
          <input className='imputcatalogo' type="text" name='Marca' required />
          <div className='labelcatalogo'>Marca</div>
        </div>
        </div>
        <br></br>
        <div className='Contcatalogo'>
          <div className='ingresocatalogo'>
          <input className='imputcatalogo' type="text" name='Modelo' required />
          <div className='labelcatalogo'>Modelo</div>
        </div>
        </div>
        <br></br>
        <div className='Contcatalogo'>
          <div className='ingresocatalogo'>
          <input className='imputcatalogo' type="number" name='Año' required />
          <div className='labelcatalogo'>Año</div>
        </div>
        </div>
        <br></br>
        </div>

        <div className='fromcatalogo'>
        <div className='Contcatalogo'>
          <div className='ingresocatalogo'>
          <input className='imputcatalogo' type="number" name='Kilometraje' required />
          <div className='labelcatalogo'>Kilometraje</div>
        </div>
        </div>
        <br></br>
        <div className='Contcatalogo'>
          <div className='ingresocatalogo'>
          <input className='imputcatalogo' type="number" name='Nro. de Asientos' required />
          <div className='labelcatalogo'>Nro. de Asientos</div>
        </div>
        </div>
        <br></br>
        <div className='Contcatalogo'>
          <div className='ingresocatalogo'>
          <select className='selectcatalogo' name="transmision" id="">
            <option>Seleccionar</option>
            <option>Diesel</option>
            <option>Gasolina</option>
          </select>
          <div className='labelcatalogo'>transmision</div>
        </div>
        </div>
        <br></br>

        <div className='Contcatalogo'>
          <div className='ingresocatalogo'>
          <select className='selectcatalogo' name="combustible" id="">
            <option>Seleccionar</option>
            <option>Diesel</option>
            <option>Gasolina</option>
          </select>
          <div className='labelcatalogo' >combustible</div>
        </div>
        </div>
        <br></br>
        </div>
        <button type="submit">Registrar</button>

        <div className="register-link">
          <p>Volver a <a href="/Home">Inicio</a></p>
        </div>
      </form>

      </div>
    </div>
    </div>
  )
}

export default RegistroCatalogo
