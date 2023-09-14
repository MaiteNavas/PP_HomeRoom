import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function IndexHouse(){
    const endpoint = 'http://localhost:8000/api/admin'

    const [houses, setHouses] = useState([])
    useEffect ( ()=> {
        getAllHouses()
    }, [])
    const getAllHouses = async () => {
        const response = await axios.get(`${endpoint}/house`)
        setHouses(response.data)
    }
    const deleteHouse = async (id) => {
       await axios.delete(`${endpoint}/house/${id}`)
       getAllHouses()
         
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="./create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Añadir alojamiento</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>descripción</th>
                    <th>Ciudad</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                { houses.map( (house) => (
                    <tr key={house.id}>
                        <td>{house.name}</td>
                        <td>{house.description}</td>
                        <td>{house.city}</td>

                        <td>
                            <Link to={`/admin/house/edit/${house.id}`} className='btn btn-info'>Editar</Link>
                            <button onClick={ ()=>deleteHouse(house.id)} className='btn btn-danger'>Eliminar</button>
                        </td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}

export default IndexHouse

