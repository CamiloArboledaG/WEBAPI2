import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
      display:"flex",
      justifyContent:"space-between"
  },
  divlogo: {
    display:"flex",
    justifyContent:"space-between",
    alignItems: "center"
},
  title: {
    marginRight: theme.spacing(2),
  },
  logo: {
      height:"4rem",
    marginRight: theme.spacing(2),
  },
  boton: {
    marginRight: theme.spacing(2),
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" style={{ background: '#565656' }}>
        <Toolbar className={classes.root}>
            <div className={classes.divlogo}>
                
          <img className={classes.logo} src={Logo}></img>
          <Typography variant="h6" className={classes.menuButton}>
            Weather and News
          </Typography>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
