import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import { widget } from 'lightweight-charts';
// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

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

var tradeview = `<div class="tradingview-widget-container">
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
  "width": 40,
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

export default function Chart() {
  const theme = useTheme();

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

  return (
    <React.Fragment>
      <Title>DOGE/USDT</Title>
      {/* <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Price ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>

      </ResponsiveContainer> */}
       {/* <div className="test" dangerouslySetInnerHTML={{__html: tradeview}}></div>  */}

       <Typography component="p" variant="h4">
        Move chart here
      </Typography>
    </React.Fragment>
  );
}
