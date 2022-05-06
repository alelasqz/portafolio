import React from 'react';
import 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const ListadoExperiencias = () => {
    const firestore = useFirestore();

    const experienciascollectionRef = collection(firestore, 'experiencias')
    const { status, data } = useFirestoreCollectionData(experienciascollectionRef);

    if (status === 'loading') {
        return <div>Cargando experiencias...</div>;
    }
    else
    {
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
                            {'Hasta: '+experiencia.fechahasta}<br/>
                            {experiencia.ubicacion}<br/>
                            {experiencia.funciones}<br/>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ListadoExperiencias;
