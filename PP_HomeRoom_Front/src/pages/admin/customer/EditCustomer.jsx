import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBarAdmin from '../../../components/NavBar/NavBarAdmin';

function EditCustomer(){

    const endpoint = 'http://localhost:8000/api/admin/customer/';

    const [name, setName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            name: name,
            family_name: family_name, 
            email: email, 
            phone: phone, 
            address: address
        });
        navigate('/admin/customer');
    };

    useEffect( () =>{
        const getCustomerById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name);
            setFamilyName(response.data.family_name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setAddress(response.data.address);
        };
        getCustomerById();   
    }, []);
    
    return (
    <>
        <NavBarAdmin/>
        <div className="container fluid">
            <h2>Editar cliente</h2>
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
                    <label className='form-label'>Apellidos</label>
                    <input 
                        value={family_name} 
                        onChange={ (e)=> setFamilyName(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input 
                        value={email} 
                        onChange={ (e)=> setEmail(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Teléfono</label>
                    <input 
                        value={phone} 
                        onChange={ (e)=> setPhone(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Dirección</label>
                    <input 
                        value={address} 
                        onChange={ (e)=> setAddress(e.target.value)}
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

export default EditCustomer;