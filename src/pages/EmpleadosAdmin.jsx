import React from 'react'
import DataTable from 'react-data-table-component';

const EmpleadosAdmin = () => {

    const columns = [
        {
          name: 'Usuario',
          selector: row=> row.usuario,
        },
        {
          name: 'Correo',
          selector: row=> row.correo,
        },
        {
          name: 'Password',
          selector: row=> row.password,
        }
      ];
      
      const data=[
        {
          id: 1,
          usuario: 'Carlos Sanchez',
          correo: 'CarlosSanchez@gmail.com',
          password: '123'
        },
        {
          id: 2,
          usuario: 'Miguel Servantes',
          correo: 'MiguelServantes@gmail.com',
          password: '123'
        },
        {
          id: 3,
          usuario: 'Martha Loayza',
          correo: 'MarthaLoayza@gmail.com',
          password: '123'
        },
        {
          id: 4,
          usuario: 'Lucia Sambrano',
          correo: 'LuciaSambrano@gmail.com',
          password: '123'
        }
        ];

  return (
    <div className='container mt-5'>
      <div className='userconten'>
      <h1><strong>Empleados</strong></h1>
      <DataTable
      columns={columns}
      data={data}
      ></DataTable>
      <br></br>
      <button><a href="/InicioAdmin">Usuarios</a></button>
      </div>
    </div>
  )
}

export default EmpleadosAdmin