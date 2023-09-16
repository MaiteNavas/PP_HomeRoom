import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import headerImg from '../assets/img/LaCasinaDeManuela.jpg'

const Home1_About = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(8),
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='section' width='95%' align='center'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h3'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#213555',
                }}
                >
                    HOME ROOM
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#213555',
                }}
                >
                    We have 9000 more review and our customers
                    trust on out property and quality products.
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/house'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 5,
                        color: 'white',
                        backgroundColor: '#213555',
                        borderColor: '#213555',
                        "&&:hover": {
                            color: '#4F709C',
                            borderColor: '4F709C',
                        },
                        "&&:focus": {
                            color: '4F709C',
                            borderColor: '4F709C',
                        }
                    }}
                    >
                        Alojamientos
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'flex-start',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-start',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: 0,
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Home1_About