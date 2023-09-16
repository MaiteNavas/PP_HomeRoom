import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavBarAdmin from '../../../../components/navBarAdmin/NavBarAdmin';

function IndexCustomer(){
    
    const endpoint = 'http://localhost:8000/api/admin';

    const [customers, setCustomers] = useState([]);

    useEffect ( ()=> {
        getAllCustomers();
    }, []);

    const getAllCustomers = async () => {
        const response = await axios.get(`${endpoint}/customer`);
        setCustomers(response.data);
    };

    const deleteCustomer = async (id) => {
       await axios.delete(`${endpoint}/customer/${id}`);
       getAllCustomers();    
    };

    return (
    <>
        <NavBarAdmin/>
        <div className="container fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">CLIENTES
                <Link to="./create" className="btn btn-success btn-sm mt-1 mb-1 text-white">Añadir cliente</Link>
                </h6>   
            </div>
            <div className="card-body">
                <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Dirección</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            { customers.map( (customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.family_name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.address}</td>

                                    <td>
                                        <Link to={`/admin/customer/edit/${customer.id}`} className="btn btn-primary btn-sm">Editar</Link>  
                                        <a className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</a>
                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title fs-5" id="exampleModalLabel">¿Estás seguro de eliminar el cliente?</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Una vez eliminado no se podrá recuperar.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                        <button type="button" onClick={ ()=>deleteCustomer(customer.id)} className='btn btn-danger'>Eliminar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>   
    </div>
    </>                            
    );
};

export default IndexCustomer;

