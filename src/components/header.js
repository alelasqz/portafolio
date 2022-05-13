import React from 'react';
import 'firebase/firestore';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

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
    <Grid container spacing={0} direction="row" justifyContent="center" alignItems="flex-end" className='App-header'>
      <Grid item xs={5} sm={4} md={8} >
        <Item>
        </Item>
      </Grid>
      <Grid item xs={7} sm={8} md={4} >
        <Item sx={{alignContent: 'baseline'}}>
          <div className='alex'>
            <Link className='link alex' to="/portafolio">alex</Link>
          </div>
          <div className='punto'> . </div>
          <Link className='link' to="/proyectos">proyectos</Link>
          <div className='punto2'> . </div>
          <Link className='link' to="/blog">blog</Link>
        </Item>
      </Grid>
    </Grid>
  )
}

export default Header;
