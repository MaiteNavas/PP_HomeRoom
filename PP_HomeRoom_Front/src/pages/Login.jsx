import { useState } from "react";
import axios from '../js/axios';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {  
    Box,
    Button,
    Stack,
    TextField,
} from '@mui/material';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';


export default function Login() {

    const { setUser, csrfToken } = useAuth();
    const [error, setError] = useState(null);


    // login user
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const body = {
			email: email.value,
			password: password.value,
		};
		csrfToken();
		try {
			const resp = await axios.post('/login', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/admin" />;
			}else{
                console.log('hola')
            }
		} catch (error) {
			if (error.response.status === 401) {
				setError(error.response.data.message);
			}else{
                console.log('Error en la solicitud:', error)
            }
		}
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
                'Login'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Introduce tu correo electrónico y contraseña'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            color={'#7b7b7b'}
            />
            <Paragraph 
            text={error}
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            color={'red'}
        />

            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="Contraseña"
                    name="password"
                    autoComplete="password"
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
    );
};
