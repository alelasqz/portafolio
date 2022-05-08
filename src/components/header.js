import React from 'react';
import 'firebase/firestore';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  borderRadius: 0,
}));

const Header = () => {
  return (
    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="flex-end" className='App-header'>
      <Grid item xs={9} sm={9} md={9} >
        <Item>
        </Item>
      </Grid>
      <Grid item xs={3} sm={3} md={3} >
        <Item>
          Alex.
        </Item>
      </Grid>
    </Grid>
  )
}

export default Header;
