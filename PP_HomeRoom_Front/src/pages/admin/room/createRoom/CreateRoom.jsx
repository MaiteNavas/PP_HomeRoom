import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function CreateHouse(){
    const endpoint = 'http://localhost:8000/api/admin/room'
        const [name, setName] = useState('')
        const [description, setDescription] = useState('')
        const [id_house, setIdHouse] = useState('')
        const [price, setPrice] = useState('')
        const navigate = useNavigate()
        const store = async (e) => {
            e.preventDefault();
            await axios.post(endpoint, {name: name, description: description, id_house: id_house, price: price})
            navigate('/admin/room')
        }
      return (
        <div>
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
                    <label className='form-label'>Alojamiento</label>
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
                        onChange={ (e)=> setPrice(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                
                <button type='submit' className='btn btn-success'>Guardar</button>
            </form>
        </div>
      )
}

export default CreateHouse