import React, { useState } from 'react';
import axios from '../js/axios';
import { useNavigate } from 'react-router-dom';
import {  
    Box,
    Button,
    Stack,
    TextField,
} from '@mui/material';
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph';
import { useAuth } from '../contexts/AuthContext';



const Register = () => {



    const { setUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
	
	const register = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post('register', {name: name, email: email, password: password});
			if (resp.status === 200) {
				setUser(resp.data.user);
				return  navigate('/login');
			}
		} catch (error) {
            if (error.response.status === 422) {
				console.log(error.response.data.errors);
				if (error.response.data.errors.name) {
					setNameError(error.response.data.errors.name[0]);
				} else {
					setNameError('');
				}
				if (error.response.data.errors.email) {
					setEmailError(error.response.data.errors.email[0]);
				} else {
					setEmailError('');
				}
				if (error.response.data.errors.password) {
					setPasswordError(error.response.data.errors.password[0]);
				} else {
					setPasswordError('');
				}
			}
		}
	}

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
                'Registrarse'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Introduce tus nombre, correo electrónico y contraseña'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            color={'#7b7b7b'}
            />

            <Box 
            component="form" 
            noValidate 
            onSubmit={register} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
            <Paragraph 
                    text={nameError}
                    maxWidth = {'sm'}
                    mx={0}
                    textAlign={'center'}
                    color={'red'}
                />
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
                <Paragraph 
                    text={emailError}
                    maxWidth = {'sm'}
                    mx={0}
                    textAlign={'center'}
                    color={'red'}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={ (e)=> setEmail(e.target.value)}
                />
                <Paragraph 
                    text={passwordError}
                    maxWidth = {'sm'}
                    mx={0}
                    textAlign={'center'}
                    color={'red'}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Contraseña"
                    name="password"
                    autoComplete="email"
                    autoFocus
                    onChange={ (e)=> setPassword(e.target.value)}
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
    );
};
export default Register;