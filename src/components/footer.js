import React from 'react';
import { useEffect, useState } from 'react';
import 'firebase/firestore';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

//Redes Sociales
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  borderRadius: 0,
}));

const Footer = (data) => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    setUsuario(data.usuario);
  }, [data]);

  if(usuario) 
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Typography variant="caption" color="initial" >
          Redes Sociales
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <IconButton aria-label="delete" onClick={() => window.open(usuario.linkedin, '_blank').focus()}>
          <LinkedInIcon />
        </IconButton>

        <IconButton aria-label="delete" onClick={() => window.open(usuario.instagram, '_blank').focus()}>
          <InstagramIcon />
        </IconButton>

        <IconButton aria-label="delete" onClick={() => window.open(usuario.facebook, '_blank').focus()}>
          <FacebookIcon />
        </IconButton >

        <IconButton aria-label="delete" onClick={() => window.open(usuario.github, '_blank').focus()}>
          <GitHubIcon />
        </IconButton >
      </Grid>
    </Container>
  )
}

export default Footer;
