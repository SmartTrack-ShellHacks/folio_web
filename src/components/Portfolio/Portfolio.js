import { Icon, Grid, Typography, makeStyles } from "@material-ui/core";
import Chart from "../Market/Chart";
import Navbar from "../Navbar/Navbar";
import Card from "./Card";

function Portfolio({ portfolio }) {
  const useStyles = makeStyles({
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
      marginTop: "3rem",
    },
  });

  const classes = useStyles();

  return (
    <div className="Portfolio">
      <Navbar />
      <div className={classes.title}>
        <Typography className={classes.text} variant="h3">
          Portfolio
        </Typography>
        <Icon className={classes.icon}>add_circle_outline</Icon>
      </div>

      <Grid container className={classes.wrap}>
        {portfolio.map((item) => (
          <Grid className={classes.container} item xs={6}>
            <Card
              coin={item.coin}
              symbol={item.symbol}
              icon={item.icon}
              cost={item.cost}
              value={item.value}
              amountBought={item.amountBought}
              totalGain={item.totalGain}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
