import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from '../../../../components/navBarAdmin/NavBarAdmin';

function CreateCustomer(){

    const endpoint = 'http://localhost:8000/api/admin/customer';

    const [name, setName] = useState('');
    const [family_name, setFamilyName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, family_name: family_name, email: email, phone: phone, address: address});
        navigate('/admin/customer');
    };

    return (
    <>
        <NavBarAdmin/>
        <div>
            <h2>Crear un cliente</h2>
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
                <button type='submit' className='btn btn-success'>Guardar</button>
            </form>
        </div>
    </>   
    );
};

export default CreateCustomer;