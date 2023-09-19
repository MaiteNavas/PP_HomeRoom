import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBarAdmin from '../../../components/NavBar/NavBarAdmin';

function EditHouse(){

    const endpoint = 'http://localhost:8000/api/admin/house/';

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            name: name,
            description: description,
            city: city,
        });
        navigate('/admin/house');
    }

    useEffect( () =>{
        const getHouseById = async () => {
            const response = await axios.get(`${endpoint}${id}`);
            setName(response.data.name);
            setDescription(response.data.description);
            setCity(response.data.city);
        }
        getHouseById();
        
    }, []);

    return (
    <>
        <NavBarAdmin/>
        <div className="container fluid">
            <h2>Editar alojamiento</h2>
            <form onSubmit={update}>
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
                <button type='submit' className='btn btn-success'>Actualizar</button>
            </form>
        </div>
    </>
    );
};

export default EditHouse;