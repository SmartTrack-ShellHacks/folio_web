import { Icon, Grid, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chart from "../Market/Chart";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function Portfolio({ portfolio }) {
  const [price, setPrice] = useState(2);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("htps://rest.coinapi.io/v1/exchangerate/BTC/USD");
      console.log(data);
    };
    getData();
  }, []);

  const useStyles = makeStyles({
    portfolio: {},
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
              value={
                localStorage.getItem(portfolio[item].coin + "Amount")
                  ? localStorage.getItem(portfolio[item].coin + "Amount") * price
                  : 0
              }
              amountBought={
                localStorage.getItem(portfolio[item].coin + "Amount")
                  ? localStorage.getItem(portfolio[item].coin + "Amount")
                  : 0
              }
              totalGain={
                localStorage.getItem(portfolio[item].coin + "Cost")
                  ? localStorage.getItem(portfolio[item].coin + "Amount") * price -
                    localStorage.getItem(portfolio[item].coin + "Cost")
                  : 0
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
