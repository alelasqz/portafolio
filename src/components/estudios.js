import React from 'react';
import 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const Estudios = () => {
    const firestore                 = useFirestore();
    const estudioscollectionRef     = collection(firestore, 'estudios')
    const { status, data }          = useFirestoreCollectionData(estudioscollectionRef);

    if (status === 'loading') return <div>Cargando estudios...</div>;
  
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
                        {experiencia.instituto}<br/>
                        {experiencia.titulo}<br/>
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

export default Estudios;
