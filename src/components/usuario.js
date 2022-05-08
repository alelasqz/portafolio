import React from 'react';
import { useEffect, useState } from 'react';
import 'firebase/firestore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Imagen from '../images/IMG_2720.jpg';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  borderRadius: 0,
}));

const Usuario = (data) => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    setUsuario(data.usuario);
  }, [data]);

  if(usuario) {
    return (
        <Grid container spacing={0} >
          <Grid item xs={12} sm={12} md={12} >
            <Grid item xs={12} sm={12} md={12} >
              <Item sx={{textAlign: 'center', backgroundColor: '#fff', color: '#000'}}>
                <Typography variant="h2">
                  {usuario.profesion}<br/>
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12} >
              <Item sx={{textAlign: 'center', backgroundColor: '#fff', color: '#000'}}>
                <Box
                  component="img"
                  sx={{
                    maxHeight: { xs: 300, md: 300 },
                    maxWidth: { xs: 300, md: 300 },
                    marginTop: '25px',
                    marginBottom: '25px',
                  }}
                  alt="The house from the offer."
                  src={Imagen}
                />
              </Item>
            </Grid>
          </Grid>
        </Grid>
    )
  }
}

export default Usuario;
