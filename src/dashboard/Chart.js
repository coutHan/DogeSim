import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { widget } from 'lightweight-charts';
import Users from "./User"
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

var tradeview = `
<div class="tradingview-widget-container">
  <div id="tradingview_68cb6"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/DOGEUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span class="blue-text">DOGEUSDT Rates</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.MediumWidget(
  {
    "symbols": [
      [
        "Dogecoin",
        "BINANCE:DOGEUSDT|1D"
      ]
    ],
    "chartOnly": false,
    "width": 400,
    "height": 100,
    "locale": "en",
    "colorTheme": "light",
    "gridLineColor": "#F0F3FA",
    "trendLineColor": "#2196F3",
    "fontColor": "#787B86",
    "underLineColor": "#E3F2FD",
    "isTransparent": false,
    "autosize": false,
    "container_id": "tradingview_68cb6"
    }
  );
  </script>
</div>`

var thisIsMyCopy = '<p>copy copy copy <strong>strong copy</strong></p>';

export default function Chart({doge, setDoge, USDT, setUSDT,currentPrice, setCurrentPrice, user}) {
  const [buyDoge, setbuyDoge] = useState(0)
  const [sellDoge, setsellDoge] = useState(0)
  const theme = useTheme();
  const classes = useStyles();

  const defaultProps = {
		symbol: [
      "Dogecoin",
      "BINANCE:DOGEUSDT|1D"
    ],
		interval: 'D',
		containerId: 'tv_chart_container',
		datafeedUrl: 'https://demo_feed.tradingview.com',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

  const handleBuyInput = ({text}) =>{
    // setbuyDoge()
    console.log("Buy", text.target.value)
    setbuyDoge(text.target.value)
  }

  const handleSellInput = ({text}) =>{
    // setbuyDoge()
    console.log("Buy", text.target.value)
    setsellDoge(text.target.value)
  }

  const handleBuy = () =>{
    console.log(buyDoge)
    console.log("Buy")
    const newDoge = parseInt(doge)+parseInt(buyDoge)
    // console.log(newDoge, typeof(doge), typeof(buyDoge))
    setDoge(newDoge)
    const newUSDT = USDT-buyDoge*currentPrice
    setUSDT(newUSDT)
    Users.user.forEach((item)=>{
      if (item.name == user){
        item.DOGE = newDoge
        item.USDT = newUSDT
      }
    })
  }

  const handleSell = () =>{
    console.log(sellDoge)
    console.log("Buy")
    const newDoge = parseInt(doge)-parseInt(sellDoge)
    // console.log(newDoge, typeof(doge), typeof(buyDoge))
    setDoge(newDoge)
    const newUSDT = USDT+sellDoge*currentPrice
    setUSDT(newUSDT)
    Users.user.forEach((item)=>{
      if (item.name == user){
        item.DOGE = newDoge
        item.USDT = newUSDT
      }
    })
  }

  return (
    <React.Fragment>
      <Title>DOGE/USDT</Title>
      
      <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <TextField id="buy" label={"You have "+USDT+" USDT"} placeholder="Quantity of Dogecoins to buy"  onChange={text => handleBuyInput({text})}/>
        </Grid>
        <Grid item xs={6}>
        <TextField id="sell" label={"You have "+doge+" Dogecoins"} placeholder="Quantity of Dogecoins to sell" onChange={text => handleSellInput({text})}/>
        </Grid>
        <Grid item xs={3}>
        <Button
            
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleBuy}
          >
            Buy Dogecoin
        </Button>
        </Grid>
        <Grid item xs={3}>
          </Grid>
        <Grid item xs={3}>
        <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSell}
          >
            Sell Dogecoin
        </Button>
        </Grid>
      </Grid>
    </form>
      
    </React.Fragment>
  );
}
