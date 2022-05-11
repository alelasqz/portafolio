import React from 'react';
import 'firebase/firestore';
import Grid from '@mui/material/Grid';

//Redes Sociales
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (  
    <Grid container spacing={4} direction="row" justifyContent="center" alignItems="flex-end" className="footer">
      <IconButton aria-label="delete" onClick={() => window.open('https://linkedin.com/in/alelasqz', '_blank').focus()}>
        <LinkedInIcon />
      </IconButton>

      <IconButton aria-label="delete" onClick={() => window.open('https://instagram.com/alelasqz', '_blank').focus()}>
        <InstagramIcon />
      </IconButton>

      <IconButton aria-label="delete" onClick={() => window.open('https://facebook.com/alelasqz', '_blank').focus()}>
        <FacebookIcon />
      </IconButton >

      <IconButton aria-label="delete" onClick={() => window.open('https://github.com/alelasqz', '_blank').focus()}>
        <GitHubIcon />
      </IconButton >
    </Grid>
  )
}

export default Footer;
