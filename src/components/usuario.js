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
        <div>
            {data.nombres+' '+data.apellidos}<br/>
            {data.profesion+' at '+data.empresa}<br/>
            {data.ciudad+', '+data.pais}<br/>
            {data.linkedin}<br/>
            {data.correo}<br/>
        </div>
    )
}

export default Usuario;
