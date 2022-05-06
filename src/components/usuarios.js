import React from 'react';
import 'firebase/firestore';
import ListadoUsuarios from './listadousuarios';
import Usuario from './usuario';

export default (props) => {
  return(
    <div>
      <Usuario />
      <ListadoUsuarios />

    </div>
  )
}