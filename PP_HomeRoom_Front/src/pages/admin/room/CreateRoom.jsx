import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from '../../../components/NavBar/NavBarAdmin';

function CreateHouse(){

    const endpoint = 'http://localhost:8000/api/admin';

    const [houses, setHouses] = useState([]);

    useEffect ( ()=> {
        getAllHouses();
    }, []);

    const getAllHouses = async () => {
        const response = await axios.get(`${endpoint}/house`);
        setHouses(response.data);
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [id_house, setIdHouse] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();
    
    const store = async (e) => {
        e.preventDefault();
        await axios.post(`${endpoint}/room`, {name: name, description: description, id_house: id_house, price: price});
        navigate('/admin/room');
    };

    return (
    <>
        <NavBarAdmin/>
        <div className="container fluid">
            <h2>Crear una habitación</h2>
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
                    <label className='form-label'>Alojamiento</label>
                    <select
                        value={id_house} 
                        onChange={ (e)=> setIdHouse(e.target.value)}
                        type='text'
                        className='form-control'>
                            {houses.map( (house) =>(
                                <option value={house.id}>{house.name}</option>
                            ))
                            }
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input 
                        value={price} 
                        onChange={ (e)=> setPrice(e.target.value)}
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