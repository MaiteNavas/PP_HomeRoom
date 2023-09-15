import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function IndexHouse(){

    const endpoint = 'http://localhost:8000/api/admin';

    const [houses, setHouses] = useState([]);

    useEffect ( ()=> {
        getAllHouses();
    }, []);

    const getAllHouses = async () => {
        const response = await axios.get(`${endpoint}/house`);
        setHouses(response.data);
    };

    const deleteHouse = async (id) => {
       await axios.delete(`${endpoint}/house/${id}`);
       getAllHouses();     
    };

  return (

        <div className="container fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ALOJAMIENTOS
                        <Link to="./create" className="float-right btn btn-success btn-sm">Añadir alojamiento</Link>
                    </h6>  
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
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
                                            <Link to={`/admin/house/edit/${house.id}`} className="btn btn-primary btn-sm">Editar</Link>  
                                            <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar</button>
                                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title fs-5" id="exampleModalLabel">¿Estás seguro de eliminar el alojamiento?</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            Una vez eliminado no se podrá recuperar.
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                            <button onClick={ ()=>deleteHouse(house.id)} className='btn btn-danger'>Eliminar</button>
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
  )
}

export default IndexHouse

