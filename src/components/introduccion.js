import React from 'react';
import { useEffect, useState } from 'react';
import 'firebase/firestore';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: '#000',
    boxShadow: 'none',
    borderRadius: 0
  }));

const Introduccion = (data) => {

    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        setUsuario(data.usuario);
    }, [data]);

    if(usuario)
        return (
            <Grid container spacing={0} justifyContent="center" direction="row" alignItems="center" sx={{height:'70vh', backgroundColor: '#fff', maxHeight: '430px'}}>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid item xs={12} sm={12} md={12} >
                        <Item  sx={{textAlign: 'center',  margin: '40px', marginBottom: '20px', fontSize: '18px'}}>
                            <Typography>
                                "{usuario.introduccion}"
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} >
                        <Item sx={{textAlign: 'center'}}>
                            <Typography variant="body1">
                                {usuario.nombres+' '+usuario.apellidos}
                            </Typography>
                            <Typography variant="caption">
                                {usuario.ubicacion}
                            </Typography>
                        </Item>
                    </Grid>
                    
                </Grid>
            </Grid>
        )
}

export default Introduccion;
