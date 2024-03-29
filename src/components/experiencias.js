import React from 'react';
import 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderRadius: 0,
  }));

const Experiencias = () => {
    const firestore                 = useFirestore();
    const experienciascollectionRef = collection(firestore, 'experiencias')
    const { status, data }          = useFirestoreCollectionData(experienciascollectionRef);

    if (status === 'loading') return <div>Cargando experiencias...</div>;
  
    data.sort((a,b) => {
        var fecha1 = new Date(a.fechadesde);
        var fecha2 = new Date(b.fechadesde);

        if (fecha1 < fecha2) return 1;
        if (fecha1 > fecha2) return -1;
        return 0;
    });

    return (
        <ul>
            {
                data.map((experiencia) => {
                    return(
                        <li key={experiencia.NO_ID_FIELD}>
                        {experiencia.cargo}<br/>
                        {experiencia.nombreempresa}<br/>
                        {'Desde: '+experiencia.fechadesde}<br/>
                        {experiencia.fechahasta ? 'Hasta: '+experiencia.fechahasta : 'Actualidad'}<br/>
                        {experiencia.ubicacion}<br/>
                        {experiencia.funciones}<br/>
                    </li>
                    )
                })
            }
        </ul>
    )
    
}

export default Experiencias;
