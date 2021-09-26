import { Icon, makeStyles, Typography } from "@material-ui/core";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const useStyles = makeStyles({
    nav: {
      height: "3rem",
      width: "100vw",
      background: "#302f4d",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    icon: {
      fontSize: "2rem",
      color: "#fcffeb",
    },
    title: {
      fontSize: "1.6rem",
      color: "#fcffeb",
    },
    links: {
      display: "flex",
      alignItems: "center",
      marginRight: "4rem",
      justifyContent: "space-between",
      width: "12rem",
    },
    headTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "22rem",
      marginLeft: "1.5rem",
    },
    linkText: {
      color: "#5FB2FF",
      fontSize: "1.2rem",
      opacity: 0.8,
    },
    inactiveLinkText: {
      color: "#fcffeb",
      fontSize: "1.2rem",
    },
    none: {
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  const location = useLocation();

  return (
    <div className={classes.nav}>
      <div className={classes.headTitle}>
        <Icon className={classes.icon}>account_balance_wallet</Icon>
        <Typography variant="h4" className={classes.title}>
          {" "}
          Folio - Web Crypto Tracker
        </Typography>
      </div>

      <div className={classes.links}>
        <Link to="/" className={classes.none}>
          <Typography
            variant="body1"
            className={location.pathname === "/" ? classes.linkText : classes.inactiveLinkText}
          >
            Portfolio
          </Typography>
        </Link>
        <Link to="/calculator" className={classes.none}>
          <Typography
            variant="body1"
            className={location.pathname === "/calculator" ? classes.linkText : classes.inactiveLinkText}
          >
            Calculator
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
