import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavBarAdmin from '../../../components/NavBar/NavBarAdmin';

function IndexRoom(){

    const endpoint = 'http://localhost:8000/api/admin';

    const [rooms, setRooms] = useState([]);

    useEffect ( ()=> {
        getAllRooms();
    }, []);

    const getAllRooms = async () => {
        const response = await axios.get(`${endpoint}/room`);
        setRooms(response.data);
    };

    const deleteRoom = async (id) => {
       await axios.delete(`${endpoint}/room/${id}`);
       getAllRooms();     
    };

    return (
    <>
        <NavBarAdmin/>
        <div className="container fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">HABITACIONES
                        <Link to="./create" className="float-right btn btn-success btn-sm">Añadir habitación</Link>
                    </h6>  
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                            <Link to={`/admin/room/edit/${room.id}`} className="btn btn-primary btn-sm">Editar</Link>  
                                            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</button>
                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title fs-5" id="exampleModalLabel">¿Estás seguro de eliminar la habitación?</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            Una vez eliminado no se podrá recuperar.
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                            <button onClick={ ()=>deleteRoom(house.id)} className='btn btn-danger'>Eliminar</button>
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

export default IndexRoom;

