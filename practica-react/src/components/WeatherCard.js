import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import WindImg from '../assets/images/wind.png';
import PressureImg from '../assets/images/pressure.png';
import HumidityImg from '../assets/images/humidity.png';
import FeelsImg from '../assets/images/feels.png';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    backgroundColor: "rgba(192, 159, 128, 0.8)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin:"1rem",
    borderRadius:"1rem",
    padding:"1rem",
    boxShadow:"2px 2px 5px black",
  },
  divdisplay:{
    display: "flex",
    justifyContent: "space-around",
    marginRight: theme.spacing(2),
  },
  divdisplay2:{
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  divdisplay3:{
    display: "flex",
    justifyContent: "space-around",
    alignItems:"center"
  },
  img:{
    height:20,
    marginRight: theme.spacing(1),
  },
  Icono:{
    height: "5rem",
    width: "5rem",
    marginRight: theme.spacing(3),
  },

}));

export default function WeatherCard(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={6}>
        <Typography style={{ color: 'white'}} variant="h5" className={classes.shadowtext}>{props.name}</Typography>
        <div className={classes.divdisplay3}>
          <CloudIcon style={{ color: 'white'}} className={classes.Icono}></CloudIcon>
          <Typography style={{ color: 'white'}} variant="h2">{props.temperatura}°</Typography>
        </div>
        <Typography style={{ color: 'white'}} variant="h6">{props.description}</Typography>
        <div>

        </div>

      </Grid>
      <Grid>
        <div className={classes.divdisplay2}>
          <div className={classes.divdisplay}>
            <img className={classes.img} src={WindImg}></img>
            <Typography style={{ color: 'white'}}>Wind</Typography>
          </div>
          <Typography style={{ color: 'white'}}>{props.wind}</Typography>
        </div>
        <div className={classes.divdisplay2}>
          <div className={classes.divdisplay}>
            <img className={classes.img} src={PressureImg}></img>
            <Typography style={{ color: 'white'}}>Pressure</Typography>
          </div>
          <Typography style={{ color: 'white'}}>{props.pressure} mb</Typography>
        </div>
        <div className={classes.divdisplay2}>
          <div className={classes.divdisplay}>
            <img className={classes.img} src={HumidityImg}></img>
            <Typography style={{ color: 'white'}}>Humidity</Typography>
          </div>
          <Typography style={{ color: 'white'}}>{props.humidity}%</Typography>
        </div>
        <div className={classes.divdisplay2}>
          <div className={classes.divdisplay}>
            <img className={classes.img} src={FeelsImg}></img>
            <Typography style={{ color: 'white'}}>Feels like</Typography>
          </div>
          <Typography style={{ color: 'white'}}>{props.feels}°</Typography>
        </div>

      </Grid>
    </Grid>
  );
}
