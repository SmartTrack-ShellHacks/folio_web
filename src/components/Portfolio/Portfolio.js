import { Icon, Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";

function Portfolio({ portfolio, btcPrice, ethPrice, adaPrice, dogePrice, uniPrice, eosPrice, usdtPrice, xrpPrice }) {
  const useStyles = makeStyles({
    portfolio: {
      background: "#fff",
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "2rem",
      marginLeft: "2rem",
      marginRight: "2rem",
    },
    icon: {
      fontSize: "3rem",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      marginTop: "3rem",
    },
    wrap: {
      marginTop: "2rem",
      marginBottom: "2rem",
    },
    black: {
      textDecoration: "none",
      color: "black",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.portfolio}>
      <Navbar />
      <div className={classes.title}>
        <Typography className={classes.text} variant="h3">
          Portfolio
        </Typography>
        <Link to="/addPortfolio" className={classes.black}>
          <Icon className={classes.icon}>add_circle_outline</Icon>
        </Link>
      </div>

      <Grid container className={classes.wrap}>
        {Object.keys(portfolio).map((item) => (
          <Grid className={classes.container} item md={6} xs={12}>
            <Card
              coin={portfolio[item].coin}
              symbol={portfolio[item].symbol}
              icon={portfolio[item].icon}
              cost={
                localStorage.getItem(portfolio[item].coin + "Cost")
                  ? localStorage.getItem(portfolio[item].coin + "Cost")
                  : 0
              }
              btcPrice={btcPrice}
              ethPrice={ethPrice}
              adaPrice={adaPrice}
              dogePrice={dogePrice}
              uniPrice={uniPrice}
              eosPrice={eosPrice}
              usdtPrice={usdtPrice}
              xrpPrice={xrpPrice}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
