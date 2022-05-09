import React from 'react';
import 'firebase/firestore';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'center',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  borderRadius: 0,
  width: '300px',
}));

const Header = () => {
  return (
    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="flex-end" className='App-header'>
      <Grid item xs={5} sm={8} md={8} >
        <Item>
        </Item>
      </Grid>
      <Grid item xs={7} sm={4} md={4} >
        <Item sx={{alignContent: 'baseline'}}>
          <div className='alex'>
            alex
          </div>
          <div className='punto'> . </div>
          <div className='link'>
            proyectos
          </div>
        </Item>
      </Grid>
    </Grid>
  )
}

export default Header;
