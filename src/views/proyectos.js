import React from 'react';
import Footer from '../components/footer';
import { doc, collection } from 'firebase/firestore';
import { useFirestoreDocData, useFirestoreCollectionData, useFirestore } from 'reactfire';
//Grid
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageCells from '../images/cells_continental_app.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Titulo = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.h2,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontWeight: 600,
  color: '#00000099',
  boxShadow: 'none',
  borderRadius: 0,
  marginTop: '100px',
}));

const Texto = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.p,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontWeight: 600,
  color: '#00000099',
  boxShadow: 'none',
  borderRadius: 0,
}));

const Descripcion = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.h4,
  padding: theme.spacing(1),
  textAlign: 'left',
  fontWeight: 600,
  color: '#00000099',
  boxShadow: 'none',
  borderRadius: 0,
  marginTop: '100px'
}));

{/* {
              data.map((proyecto) => {
                  return(
                <Titulo sx={{ }}>
                    {proyecto.nombreproyecto}<br/>
                </Titulo>
                  )
              })
            } */}

const Proyectos = () => {
  const firestore                 = useFirestore();
  const proyectoscollectionRef    = collection(firestore, 'proyectos')
  const { status, data }          = useFirestoreCollectionData(proyectoscollectionRef);

  if (status === 'loading') return <div>Cargando proyectos...</div>;

  data.sort((a,b) => {
      var fecha1 = new Date(a.fecha);
      var fecha2 = new Date(b.fecha);

      if (fecha1 < fecha2) return 1;
      if (fecha1 > fecha2) return -1;
      return 0;
  });

  return (
    <Grid container >
      <Grid item xs={12} sm={12} md={3} className="offset" sx={{}} />

      <Grid item xs={12} sm={12} md={9} sx={{}} className="ProyectosTitulo">
        <Titulo sx={{ }}>
          Continental Assist 
        </Titulo>
        <Texto sx={{ }}>
          App Móvil
        </Texto>
      </Grid>

      <Grid item xs={1} sm={1} md={1} sx={{}} />

      <Grid item xs={11} sm={11} md={11} >
        <Titulo sx={{textAlign: 'center'}}>
          <Box
            component="img"
            sx={{
              Height: { xs: '100%', md: '100%' },
              Width: { xs: '100%', md: '100%' },
              marginBottom: '20px',
              display: 'block',
              float: 'right',
            }}
            alt="Continental App"
            src={ImageCells}
          />
        </Titulo>
      </Grid>

      <Grid item xs={0} sm={1} md={3} sx={{}} />

      <Grid item xs={12} sm={10} md={5} >
       <Descripcion>
         Descripción
       </Descripcion>
       <Texto sx={{ }}>
          Aplicación móvil para la gestión de los planes de asistencia de Continental Assist.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Texto>
        <Texto sx={{ }}>
          Tecnologías utilizadas:
        </Texto>
        <Texto sx={{ }}>
          <ul>
            <li>React</li>
            <li>Firebase</li>
            <li>Material UI</li>
            <li>React Native</li>
          </ul>
        </Texto>
        <Descripcion>
         Métricas
       </Descripcion>
        <Texto sx={{ }}>
          Número de descargas:
        </Texto>
        <Texto sx={{ }}>
          
        </Texto>

        <Texto sx={{ }}>
          App Store ratings:
        </Texto>
        <Texto sx={{ }}>
          
        </Texto>

        <Texto sx={{ }}>
          Suscriptores activos:
        </Texto>
        <Texto sx={{ }}>
          
        </Texto>

        <Descripcion>
          Mi Role
        </Descripcion>
        <Texto sx={{ }}>
        El equipo de desarrollo para la app sólo tenía dos miembros. Yo como desarrollador principal y Luís como diseñador. Recibimos ayuda de algunos directivos de Continental Assist. Si bien los roles se han definido un poco, ambos tuvimos que ir más allá de nuestras capacidades para mantener la aplicación actualizada, entregar, iterar, y probar. He sido el desarrollador principal de la aplicación desde el principio. Codifiqué cada módulo de la aplicación. Trabajé junto a Luís para descubrir información sobre los comentarios y requisitos de los clientes y ayudé a priorizar los objetivos comerciales.
        </Texto>
      </Grid>
    </Grid>
  )
}

export default Proyectos;