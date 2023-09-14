import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function IndexRoom(){
    const endpoint = 'http://localhost:8000/api/admin'

    const [rooms, setRooms] = useState([])
    useEffect ( ()=> {
        getAllRooms()
    }, [])
    const getAllRooms = async () => {
        const response = await axios.get(`${endpoint}/room`)
        setRooms(response.data)
    }
    const deleteRoom = async (id) => {
       await axios.delete(`${endpoint}/room/${id}`)
       getAllRooms()
         
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="./create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Añadir habitación</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Alojamiento</th>
                    <th>Precio</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                { rooms.map( (room) => (
                    <tr key={room.id}>
                        <td>{room.name}</td>
                        <td>{room.description}</td>
                        <td>{room.id_house}</td>
                        <td>{room.price}</td>

                        <td>
                            <Link to={`/admin/room/edit/${room.id}`} className='btn btn-info'>Editar</Link>
                            <button onClick={ ()=>deleteRoom(room.id)} className='btn btn-danger'>Eliminar</button>
                        </td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}

export default IndexRoom

