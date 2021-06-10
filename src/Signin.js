import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// const express = require("express");
// const router = express.Router();
// const fs = require('fs');
import Users from "./dashboard/User"
import { AlternateEmail } from '@material-ui/icons';
const User = require("./schema/User");



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DogeSim
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignInSide({email, setEmail,password, setPassword,user, setUser, hasAccount, setHasAccount,doge, setDoge, USDT, setUSDT}) {
  const classes = useStyles();
  var chart = document.getElementById('tradingview')
  chart.style.display = "none"
  
  const handleSignup = () =>{
    console.log(email,password)
    console.log(Users)
    var newUser = {
      "name": email,
      "password": password,
      "USDT": 10000,
      "DOGE": 10000
    }
    console.log(newUser)
    Users.user.forEach((item)=>{
      if (item.name == email){
        setDoge(item.DOGE)
        setUSDT(item.USDT)
        setUser(item.name)
        alert("Login success!")
        window.location.href = '/'
      }
    })
    Users.user.push(newUser)
    console.log(Users)
    setDoge(10000)
    setUSDT(10000)
    setUser(email)
    alert("Signup success!")
    window.location.href = '/'
  }
  // useEffect(() => {
  //   async function getLatestPrice() {
  //     const url = 'https://api.huobi.pro/market/detail/merged?symbol=dogeusdt'
  //     const response = await fetch(url);
  //     const responseJSON = await response.json(response);
  //     var fetchedPrice = responseJSON.tick.close
  //     // console.log(fetchedPrice)
  //     if(currentPrice==fetchedPrice){
  //       fetchedPrice += 0.000001 
  //     }
  //     setCurrentPrice(fetchedPrice);

  //   }
  //   getLatestPrice();
  // }, [hasAccount]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          { hasAccount ? (
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
              ) : (
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          )}

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => { setPassword(e.target.value) }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  if (hasAccount) {
                    handleLogin();
                  } else {
                    handleSignup();
                  }
                }
              }}
            />
            { hasAccount ? (
              <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleLogin() }>
                Sign In
              </Button>
            ) : (
              <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSignup() }>
                Sign Up
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                { hasAccount ? (
                  <Link variant="body2" onClick={() => setHasAccount(!hasAccount) }>Don't have an account? Sign up</Link>
                ) : (
                  <Link variant="body2" onClick={() => setHasAccount(!hasAccount) }>Already have an account? Sign in</Link>
                )}
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

