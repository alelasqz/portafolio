import React from 'react';
import 'firebase/firestore';
import { useFirebaseApp, useFirestoreCollection } from 'reactfire';

export default (props) => {
    const firebase = useFirebaseApp();

    const usuariosRef = firebase.firestore().collection('usuarios');
    const usuarios = useFirestoreCollection(usuariosRef).docs.map(d => ({id: d.id, ...d.data()}));
  return(
    <ul>
        {usuarios.map(u => (
            <li key={u.id}>
                {u.nombre}
            </li>
        ))}
    </ul>
  )
}