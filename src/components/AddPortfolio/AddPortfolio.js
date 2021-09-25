import { InputBase, Button, Typography, makeStyles } from "@material-ui/core";
import { useState } from "react";

function AddPortfolio() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const useStyles = makeStyles({
    input: {
      color: "black",
      fontSize: "18px",
      backgroundColor: "white",
      borderRadius: "8px",
      width: "243px",
      height: "52px",
      margin: "20px 0 20px 0",
      "@media (max-width: 1440px)": {
        margin: "16px 0 16px 0",
      },
    },
    registerBtn: {
      marginTop: 20,
      marginBottom: 50,
      borderRadius: "25px",
      boxShadow: "0px 2px 4px rgba(85, 35, 221, 0.4)",
      height: "64px",
      width: "189px",
      background:
        "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      "@media (max-width: 1440px)": {
        marginTop: 10,
        marginBottom: 30,
      },
    },
    card: {
      background:
        "radial-gradient(50% 50% at 50% 50%, #6096BA 0%, #302F4D 100%)",
      boxShadow: "0px 0px 8px 8px rgba(255, 255, 255, 0.25)",
      borderRadius: "25px",
      width: "626px",
      height: "652px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      "@media (max-width: 1440px)": {
        height: 603,
        width: 630,
      },
    },
    form: {
        width: "100%",
    },
    registerFields: {
        display: "flex",
        flexDirection: "column",
    },
    field: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    fieldName: {
        maxWidth: "50px",
    },
    name: {
      display: "flex",
      justifyContent: "space-between",
    },
    totalCost: {
        padding: "4.2rem 0rem"
    },
    error: {
      color: "red",
      fontSize: "18px",
      fontFamily: "Roboto",
    },
  });

  const classes = useStyles();

  return (
    <div className="addPortfolio">
      <div className={classes.card}>
        <div className={classes.form}>
          <form noValidate autoComplete="off" className="register-form">
            <div className={classes.registerFields}>
              <div className={classes.field}>
                <span className={classes.fieldName}>Name</span>

                <InputBase
                    type="text"
                    variant="standard"
                    name="username"
                    placeholder="Username"
                    // value={form.username}
                    // onChange={handleOnInputChange}
                    className={classes.input}
                    fullWidth
                    inputProps={{ maxLength: 12 }}
                />
              </div>
              <div className={classes.field}>
                <span className={classes.fieldName}>Email</span>

                <InputBase
                    type="email"
                    variant="standard"
                    name="email"
                    placeholder="Email"
                    // value={form.email}
                    // onChange={handleOnInputChange}
                    className={classes.input}
                    fullWidth
                />
              </div>
              <div className={classes.field}>
                <span className={classes.fieldName}>Password</span>

                <InputBase
                    type="password"
                    variant="standard"
                    name="password"
                    placeholder="Password"
                    // value={form.password}
                    // onChange={handleOnInputChange}
                    className={classes.input}
                    fullWidth
                />
              </div>
            </div>

            <div className={classes.totalCost}>
                <Typography>Total Cost Per Coin: </Typography>
            </div>

            <Button
              className={classes.registerBtn}
              // disabled={isProcessing}
              // onClick={handleOnSubmit}
              variant="contained"
            >
              {isProcessing ? "Loading..." : "Confirm"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPortfolio;
