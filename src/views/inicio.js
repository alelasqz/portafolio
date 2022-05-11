import React from 'react';
import Usuario from '../components/usuario';
import Introduccion from '../components/introduccion';
import { doc } from 'firebase/firestore';
import { useFirestoreDocData, useFirestore } from 'reactfire';
//Grid
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';


const Inicio = () => {
  const firestore         = useFirestore();
  const usuarioRef        = doc(firestore, 'usuarios', '48J8WyIX5ISOB72PgxIC');
  const { status, data }  = useFirestoreDocData(usuarioRef);

  if (status === 'loading') {
    return <div>Cargando usuario...</div>;
  }

  return(
    <Container className="App" sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={6} >
          <Usuario usuario={data}/>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
            <Introduccion usuario={data}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Inicio;