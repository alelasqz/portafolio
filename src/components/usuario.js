import React from 'react';
import 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useFirestoreDocData, useFirestore } from 'reactfire';

const Usuario = () => {
    const firestore = useFirestore();

    const usuarioRef = doc(firestore, 'usuarios', '48J8WyIX5ISOB72PgxIC');
    const { status, data } = useFirestoreDocData(usuarioRef);

    if (status === 'loading') {
        return <div>Cargando usuario...</div>;
    }

    return (
        <ul>
            Hola {data.nombre}, estos son los usuarios registrados
        </ul>
    )
}

export default Usuario;
