import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {  
    Box,
    Button,
    Stack,
    TextField,
} from '@mui/material';
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'

const DetailsCustomer = () => {

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
        navigate('/booking/dates');
    };


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 5,
            px: 2,
        }}
        >
            <Title 
            text={
                'Pide presupuesto sin compromiso'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'If you are interested to buy the property contact us we will call you. \
                Shortly to fulfill you requirements and property.'
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
                    onChange={ (e)=> setName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="family_name"
                    label="Apellidos"
                    name="family_name"
                    autoComplete="email"
                    autoFocus
                    onChange={ (e)=> setFamilyName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={ (e)=> setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Teléfono"
                    name="phone"
                    autoComplete="email"
                    autoFocus
                    onChange={ (e)=> setPhone(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Dirección"
                    name="address"
                    autoComplete="email"
                    autoFocus
                    onChange={ (e)=> setAddress(e.target.value)}
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
                    borderRadius: 5,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    Siguiente
                </Button>
            </Box>
        </Stack>
    )
}

export default DetailsCustomer;