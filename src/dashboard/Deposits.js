import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Estimated Value</Title>
      <Typography component="p" variant="h4">
        $10,000.00
      </Typography>
      <Typography component="h2" variant="h7" color="secondary" >
        Number of Dogecoins
      </Typography>
      <Typography component="p" variant="h5">
        10727.18633361
      </Typography>
      <Typography component="h2" variant="h7" color="secondary" >
        USDT Avalible
      </Typography>
      <Typography component="p" variant="h5">
        10727.18633361
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
