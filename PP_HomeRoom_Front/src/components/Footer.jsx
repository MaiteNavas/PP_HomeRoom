import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from '../atoms/FooterTitle'
import FooterLink from '../atoms/FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#213555',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Home Room'} />
        <FooterLink 
        text={'Av Campón, 15, Salinas, Asturias'} 
        />
        <FooterLink 
        text={'654-333-333'} 
        />
        <FooterLink 
        text={'info@homeroom.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Servicios'} />
        <FooterLink text={'Alojamientos'} />
        <FooterLink text={'Habitaciones'} />
        <FooterLink text={'Reservas'} />
        <FooterLink text={'Actividades'} />
        

      </StackColumn>


      <StackColumn>
        <FooterTitle text={'Contacto'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: 'white',
            "&:hover": {
              color: 'lightgrey',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: 'white',
            "&:hover": {
              color: 'lightgrey',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p'
        color= 'white' 
        >
          &copy; 2022 HomeRoom
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer