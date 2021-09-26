import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const Results = ({ payload }) => {
  let sor = payload.sor_orders;

  const useStyles = makeStyles({
    wrapper: {
      marginTop: "1.5rem",
      // marginLeft: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    orderInfo: {
      marginTop: "1rem",
      marginLeft: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    sorInfo: {
      marginTop: "1rem",
      marginLeft: "1rem",
      width: "28rem",
    },
    sor: {
      display: "flex",
      // justifyContent: "space-between",
      flexWrap: "wrap",
    },
    title: {
      marginTop: "1rem",
      width: "100vw",
      background: "#6096ba",
      paddingLeft: "1rem",
      textAlign: "center",
      color: "#fcffeb",
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    text: {
      fontSize: "1.2rem",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.order}>
        <Typography className={classes.title} variant="h5">
          Order Information
        </Typography>
        <div className={classes.orderInfo}>
          <Typography className={classes.text} variant="body1">
            Best Avg Price: {"$" + payload.best_average_price.toFixed(4)}
          </Typography>
          <Typography className={classes.text} variant="body1">
            Best Total Fees: {"$" + payload.best_total_fees.toFixed(4)}
          </Typography>
          <Typography className={classes.text} variant="body1">
            Order Total with Fees: {"$" + payload.best_total_fees.toFixed(4)}
          </Typography>
        </div>
      </div>
      <div className={classes.order}>
        <Typography className={classes.title} variant="h5">
          Smart Order Routing
        </Typography>
        <div className={classes.sor}>
          {sor.map((item) => (
            <div className={classes.sorInfo}>
              <Typography className={classes.text} variant="body1">
                Exchange: {item.exchange}
              </Typography>
              <Typography className={classes.text} variant="body1">
                Order Quantity: {item.qty}
              </Typography>
              <Typography className={classes.text} variant="body1">
                Limit Price: {"$" + item.sor_limit_price.toFixed(4)}
              </Typography>
              <Typography className={classes.text} variant="body1">
                Total Order Fees: {"$" + item.total_fees.toFixed(4)}
              </Typography>
              <Typography className={classes.text} variant="body1">
                Total Price with Fees: {"$" + item.gross_price.toFixed(4)}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
