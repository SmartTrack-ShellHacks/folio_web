import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const Card = ({
  coin,
  symbol,
  icon,
  cost,
  btcPrice,
  ethPrice,
  adaPrice,
  dogePrice,
  uniPrice,
  eosPrice,
  usdtPrice,
  xrpPrice,
}) => {
  let price = 0;

  if (coin === "Bitcoin") {
    price = btcPrice;
  } else if (coin === "Ethereum") {
    price = ethPrice;
  } else if (coin === "Cardano") {
    price = adaPrice;
  } else if (coin === "Dogecoin") {
    price = dogePrice;
  } else if (coin === "Uniswap") {
    price = uniPrice;
  } else if (coin === "EOS") {
    price = eosPrice;
  } else if (coin === "Tether") {
    price = usdtPrice;
  } else if (coin === "XRP") {
    price = xrpPrice;
  }

  const useStyles = makeStyles({
    accordion: {
      width: "23rem",
      background: "#fff",
    },
    icon: {
      width: "2.5rem",
      height: "2.5rem",
    },
    name: {
      marginTop: ".5rem",
      marginLeft: "1rem",
    },
    row: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    small: {
      fontSize: ".7rem",
    },
    items: {
      width: "8rem",
      textAlign: "center",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<Icon>expand_more</Icon>} aria-controls="panel1a-content" id="panel1a-header">
          <img className={classes.icon} src={icon} alt={coin + " logo"} />
          <Typography variant="body1" className={classes.name}>
            {coin + " Portfolio"}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.row}>
            <div className={classes.items}>
              <Typography variant="body1" className={classes.name}>
                {cost + " USD"}
              </Typography>
              <Typography variant="body1" className={classes.small}>
                Cost
              </Typography>
            </div>
            <div className={classes.items}>
              <Typography variant="body1" className={classes.name}>
                {localStorage.getItem(coin + "Amount")
                  ? (localStorage.getItem(coin + "Amount") * price).toFixed(2) + " USD"
                  : 0 + " USD"}
              </Typography>
              <Typography variant="body1" className={classes.small}>
                Value
              </Typography>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.items}>
              <Typography variant="body1" className={classes.name}>
                {localStorage.getItem(coin + "Amount")
                  ? localStorage.getItem(coin + "Amount") + " " + symbol
                  : 0 + " " + symbol}
              </Typography>
              <Typography variant="body1" className={classes.small}>
                Owned
              </Typography>
            </div>
            <div className={classes.items}>
              <Typography variant="body1" className={classes.name}>
                {localStorage.getItem(coin + "Cost")
                  ? (localStorage.getItem(coin + "Amount") * price - localStorage.getItem(coin + "Cost")).toFixed(2) +
                    " USD"
                  : 0 + " USD"}
              </Typography>
              <Typography variant="body1" className={classes.small}>
                Total Gain
              </Typography>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Card;
