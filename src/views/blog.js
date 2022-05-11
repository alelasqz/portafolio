import React from 'react';
import Usuario from '../components/usuario';
import Introduccion from '../components/introduccion';
import Footer from '../components/footer';
import { doc, collection } from 'firebase/firestore';
import { useFirestoreDocData, useFirestoreCollectionData, useFirestore } from 'reactfire';
//Grid
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';


const Blog = () => {
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
    <ul>
      {
        data.map((proyecto) => {
            return(
              <li key={proyecto.NO_ID_FIELD}>
              {proyecto.nombreproyecto}<br/>
            </li>
            )
        })
      }
    </ul>
  )
}

export default Blog;