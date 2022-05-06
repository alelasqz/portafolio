import React from 'react';
import 'firebase/firestore';
import ListadoExperiencias from './listadoexperiencias';
import Usuario from './usuario';

export default (props) => {
  return(
    <div>
      <Usuario />
      <ListadoExperiencias />
    </div>
  )
}