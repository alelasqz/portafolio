import React from 'react';
import 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

const ListadoUsuarios = () => {
    const firestore = useFirestore();

    const usuarioscollectionRef = collection(firestore, 'usuarios');
    const { status, data } = useFirestoreCollectionData(usuarioscollectionRef);

    if (status === 'loading') {
        return <div>Cargando usuarios...</div>;
    }

    return (
        <ul>
            {data.map(usuario => (
                <li key={usuario.NO_ID_FIELD}>
                    {usuario.nombre}
                </li>
            ))}
        </ul>
    )
}

export default ListadoUsuarios;
