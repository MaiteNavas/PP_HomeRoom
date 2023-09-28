import React, {useEffect, useState} from 'react';
import axios from '../../../axios/axios';
import {Link} from 'react-router-dom';

function IndexCustomer(){

    const [customers, setCustomers] = useState([]);

    useEffect ( ()=> {
        getAllCustomers();
    }, []);

    const getAllCustomers = async () => {
        try {
            const response = await axios.get('admin/customer');
            if (Array.isArray(response.data.data)) {
                setCustomers(response.data.data);
            } else {
                console.error('La respuesta de la API no es un array válido.', response.data);
            }
        } catch (error) {
            console.error('Error al obtener habitaciones desde la API:', error);
        }
    };

    const deleteCustomer = async (id) => {
       await axios.delete(`admin/customer/${id}`);
       getAllCustomers();     
    };

    return (

    <section className="flex flex-col w-full items-center">
        <button type="button" className="text-white my-4 bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={'/admin/customer/create'}>+ Añadir cliente</Link></button>
        <table className="w-4/5 text-sm text-left text-[#213555] dark:text-gray-400  mx-8 shadow-md sm:rounded-lg">
            <thead className="text-xs text-[#213555] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        NOMBRE
                    </th>
                    <th scope="col" className="px-6 py-3">
                        APELLIDOS
                    </th>
                    <th scope="col" className="px-6 py-3">
                        EMAIL
                    </th>
                    <th scope="col" className="px-6 py-3">
                        TELÉFONO
                    </th>
                    <th scope="col" className="px-6 py-3">
                        DIRECCIÓN
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ACCIÓN
                    </th>
                </tr>
            </thead>
            <tbody>
            { customers.map( (customer) => (
                <tr key={customer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-[#213555] whitespace-nowrap dark:text-white">
                      {customer.name}
                    </th>
                    <td className="px-6 py-4">
                    {customer.family_name}
                    </td>
                    <td className="px-6 py-4">
                    {customer.email}
                    </td>
                    <td className="px-6 py-4">
                    {customer.phone}
                    </td>
                    <td className="px-6 py-4">
                    {customer.address}
                    </td>
                    
                    <td className="px-6 py-4 text-left w-full flex">
                    <button type="button" className="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/admin/customer/show/${customer.id}`}>Ver</Link></button>
                    <button type="button" className="text-white bg-[#213555] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Link to={`/admin/customer/edit/${customer.id}`}>Editar</Link></button>
                    <button type="button" onClick={ ()=>deleteCustomer(customer.id)} className="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Eliminar</button>  
                    </td>
                </tr>
                 ))}   
            </tbody>
        </table>
    </section>

    );
};

export default IndexCustomer;

