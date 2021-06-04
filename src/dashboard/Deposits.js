import React , { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
// import requests from 'requests'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits({doge, setDoge, USTD, setUSTD, currentPrice, setCurrentPrice}) {
  
  
  

  // useEffect(() => {
  //   async const getLatestPrice = () => {
  //     const url = 'https://api.huobi.pro/market/detail/merged?symbol=dogeusdt'
  //     fetch(url)
  //     .then(response => response.json())
  //     .then(data => console.log(data.tick.close)
  //   }
  // ),[]}
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Estimated Value</Title>
      <Typography component="p" variant="h4">
        ${doge*currentPrice+USTD}
      </Typography>
      <Typography component="h2" variant="h6" color="secondary" >
        Number of Dogecoins
      </Typography>
      <Typography component="p" variant="h5">
        {doge}
      </Typography>
      <Typography component="h2" variant="h6" color="secondary" >
        USDT Avalible
      </Typography>
      <Typography component="p" variant="h5">
        {USTD}
      </Typography>
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography> */}
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}
