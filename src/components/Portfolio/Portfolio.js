import { Icon, Grid, Typography, makeStyles } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";

function Portfolio() {
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

      <Grid container spacing={7}></Grid>
    </div>
  );
}

export default Portfolio;
