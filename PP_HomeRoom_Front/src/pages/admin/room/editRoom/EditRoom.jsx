import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBarAdmin from '../../../../components/navBarAdmin/NavBarAdmin';

function EditHouse(){

    const endpoint = 'http://localhost:8000/api/admin/room/';

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [id_house, setIdHouse] = useState('');
    const [price, setPrice] = useState('');
    
    const navigate = useNavigate();
    const {id} = useParams();
    
    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            name: name,
            description: description,
            id_house: id_house,
            price: price,
        });
        navigate('/admin/room');
    }
    useEffect( () =>{
        const getHouseById = async () => {
            const response = await axios.get(`${endpoint}${id}`);
            setName(response.data.name);
            setDescription(response.data.description);
            setIdHouse(response.data.id_house);
            setPrice(response.data.price);
        };
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
                    <label className='form-label'>ID Alojamiento</label>
                    <input 
                        value={id_house} 
                        onChange={ (e)=> setIdHouse(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input 
                        value={price} 
                        onChange={ (e)=> setPrecio(e.target.value)}
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