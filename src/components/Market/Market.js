import React from "react";
import Header from "./Header";
import Coins from "./Coins";
import Navbar from "../Navbar/Navbar";
import { Typography, makeStyles } from "@material-ui/core";

const Market = () => {
  const useStyles = makeStyles({
    title: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "2rem",
      marginLeft: "2rem",
      marginRight: "2rem",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.title}>
        <Typography className={classes.text} variant="h3">
          Market
        </Typography>
      </div>
      <Header />
      <Coins />
    </>
  );
};

export default Market;
