import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import "./Footer.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'©Copyright: All rights reserved '}
      {new Date().getFullYear()}
      {'. / '}
      <Link color="inherit" href="https://optimistic-agnesi-cdd26b.netlify.app/">
        {'@CONTACT ME'}
      </Link>
    </Typography>
  );
}


function Footer() {

  return (
    <div className="footer">
      <CssBaseline />
      <footer>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;