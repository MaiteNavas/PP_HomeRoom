import React, {useEffect, useState} from 'react';
import axios from '../../../axios/axios';
import {Link} from 'react-router-dom';

function IndexBooking(){

    const [bookings, setBookings] = useState([]);

    useEffect ( ()=> {
        getAllBookings();
    }, []);

    const getAllBookings = async () => {
        try {
            const response = await axios.get('admin/booking');
            console.log(response.data);
            if (Array.isArray(response.data.data)) {
                setBookings(response.data.data);
            } else {
                console.error('La respuesta de la API no es un array válido.', response.data);
            }
        } catch (error) {
            console.error('Error al obtener reservas desde la API:', error);
        }
    };

    const deleteBooking = async (id) => {
       await axios.delete(`admin/booking/${id}`);
       getAllRooms();     
    };

    return (

    <section className="flex flex-col w-full items-center">
        <button type="button" className="text-white my-4 bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <Link to="/admin/booking/create">+ Añadir reserva</Link>
        </button>
        <table className="w-4/5 text-sm text-left text-[#213555] dark:text-gray-400  mx-8 shadow-md sm:rounded-lg">
            <thead className="text-xs text-[#213555] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ESTADO
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID CLIENTE
                    </th>
                    <th scope="col" className="px-6 py-3">
                        HABITACIÓN
                    </th>
                    <th scope="col" className="px-6 py-3">
                        CHECKIN
                    </th>
                    <th scope="col" className="px-6 py-3">
                        CHECKOUT
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
            { bookings.map((booking) => (
                <tr key={booking.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-[#213555] whitespace-nowrap dark:text-white">
                      {booking.id}
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium text-[#213555] whitespace-nowrap dark:text-white">
                      {booking.booking_status.name}
                    </th>
                    <td className="px-6 py-4">
                    {booking.customer.name}
                    </td>
                    <td className="px-6 py-4">
                    {booking.room.name}
                    </td>
                    <td className="px-6 py-4">
                    {booking.checkin_date}
                    </td>
                    <td className="px-6 py-4">
                    {booking.checkout_date}
                    </td>
                    <td className="px-6 py-4">
                    {booking.price}
                    </td>
                    <td className="px-6 py-4 text-left w-full flex">
                    <button type="button" className="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/admin/booking/edit/${booking.id}`}>Editar</Link></button>
                    <button type="button" onClick={ ()=>deleteBooking(booking.id)} className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Eliminar</button>  
                    </td>
                </tr>
                 )
                  )}   
            </tbody>
        </table>
    </section>
    
    );
};

export default IndexBooking;

