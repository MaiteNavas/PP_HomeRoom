import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from '../../../../components/navBarAdmin/NavBarAdmin';

function CreateHouse(){

    const endpoint = 'http://localhost:8000/api/admin/house';

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, description: description, city: city});
        navigate('/admin/house');
    };

    return (
    <>
        <NavBarAdmin/>
        <div className="container fluid">
            <h2>Crear un alojamiento</h2>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input 
                        value={name} 
                        onChange={ (e)=> setName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <input 
                        value={description} 
                        onChange={ (e)=> setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Ciudad</label>
                    <input 
                        value={city} 
                        onChange={ (e)=> setCity(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-success'>Guardar</button>
            </form>
        </div>
    </>
    );
};

export default CreateHouse;