import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {  
    Box,
    Button,
    Stack,
    TextField,
    InputLabel,
    Select,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'

const DetailsBooking = () => {

    const endpoint = 'http://localhost:8000/api/admin';

    const [houses, setHouses] = useState([]);

    useEffect ( ()=> {
        getAllHouses();
    }, []);

    const getAllHouses = async () => {
        const response = await axios.get(`${endpoint}/house`);
        setHouses(response.data);
    };
    const handleChange = (event) => {
        setHouses(event.target.value);
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [id_house, setIdHouse] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();
    
    const store = async (e) => {
        e.preventDefault();
        await axios.post(`${endpoint}/booking`, {name: name, description: description, id_house: id_house, price: price});
        navigate('/');
    };


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Detalle de la reserva'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Introduce tus fechas y la cantidad de personas'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />

            <Box 
            component="form" 
            noValidate 
            onSubmit={store} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="fmily_name"
                    label="Apellidos"
                    name="family_name"
                    autoComplete="email"
                    autoFocus
                />
                <InputLabel id="demo-simple-select-label">alojamiento</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={houses}
                        label="alojamiento"
                        onChange={handleChange}
                    >{houses.map( (house) =>(
                        <MenuItem value={house.id}>{house.name}</MenuItem>

                    ))
                    }
                    </Select>
                <DatePicker
                margin="normal"
                required
                fullWidth
                id="checkout"
                label="Check-out"
                name="checkout_date"
                autoComplete="email"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                id="fmily_name"
                label="Adultos"
                name="total_adults"
                autoComplete="email"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                id="fmily_name"
                label="Niños"
                name="total_children"
                autoComplete="email"
                autoFocus
                />    
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    Enviar
                </Button>
            </Box>
        </Stack>
    )
}

export default DetailsBooking;