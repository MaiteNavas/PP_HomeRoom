import React, {useEffect, useState} from 'react';
import axios from '../../../axios/axios';
import {Link} from 'react-router-dom';


function IndexRoom(){

    const [rooms, setRooms] = useState([]);

    useEffect ( ()=> {
        getAllRooms();
    }, []);

    const getAllRooms = async () => {
        try {
            const response = await axios.get('admin/room');
            if (Array.isArray(response.data.data)) {
                setRooms(response.data.data);
            } else {
                console.error('La respuesta de la API no es un array válido.', response.data);
            }
        } catch (error) {
            console.error('Error al obtener habitaciones desde la API:', error);
        }
    };

    const deleteRoom = async (id) => {
       await axios.delete(`admin/room/${id}`);
       getAllRooms();     
    };

    return (
    <>
    
    <section className="flex flex-col w-full items-center">
    <button type="button" className="text-white my-4 bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link to="/admin/room/create">+ Añadir habitación</Link>
        </button>
        <table className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400  mx-8 shadow-md sm:rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        NOMBRE
                    </th>
                    <th scope="col" className="px-6 py-3">
                        DESCRIPCIÓN
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ALOJAMIENTO
                    </th>
                    <th scope="col" className="px-6 py-3">
                        PRECIO
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ACCIÓN
                    </th>
                </tr>
            </thead>
            <tbody>
            { rooms.map((room) => (
                <tr key={room.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {room.name}
                    </th>
                    <td className="px-6 py-4">
                    {room.description}
                    </td>
                    <td className="px-6 py-4">
                    {room.house.name}
                    </td>
                    <td className="px-6 py-4">
                    {room.price}
                    </td>
                    <td className="px-6 py-4 text-left">
                    <button type="button" className="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/admin/room/edit/${room.id}`}>Editar</Link></button>
                    <button type="button" onClick={ ()=>deleteRoom(room.id)} className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Eliminar</button>  
                    </td>
                </tr>
                 )
                  )}   
            </tbody>
        </table>
    </section>
    </>
    );
};

export default IndexRoom;

