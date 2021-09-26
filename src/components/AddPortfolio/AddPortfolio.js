import { InputBase, Button, makeStyles, Container, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";

function AddPortfolio() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [coinName, setCoinName] = useState("");
  const [amount, setAmount] = useState();
  const [cost, setCost] = useState();

  const useStyles = makeStyles({
    container: {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "2rem",
    },
    input: {
      color: "black",
      fontSize: "18px",
      backgroundColor: "white",
      borderRadius: "8px",
      border: "2px solid black",
      width: "20rem",
      height: "52px",
      margin: "20px 0 20px 0",
      "@media (max-width: 1440px)": {
        margin: "16px 0 16px 0",
      },
    },
    registerBtn: {
      marginTop: 20,
      marginBottom: 50,
      boxShadow: "0px 2px 4px rgba(85, 35, 221, 0.4)",
      height: "64px",
      width: "189px",
      background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      "@media (max-width: 1440px)": {
        marginTop: 10,
        marginBottom: 30,
      },
    },
    card: {
      background: "#fff",
      border: "3px solid #302f4d",
      boxShadow: "0px 0px 8px 8px rgba(255, 255, 255, 0.25)",
      borderRadius: "25px",
      //   width: "626px",
      width: "38rem",
      height: "38rem",
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
      width: "40rem",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    fieldName: {
      width: "10rem",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "20px",
      textAlign: "right",
    },
    name: {
      display: "flex",
      justifyContent: "space-between",
    },
    totalCost: {
      padding: "4.2rem 0rem",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "20px",
    },
    totalCostText: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "20px",
    },
    error: {
      color: "red",
      fontSize: "18px",
      fontFamily: "Roboto",
    },
  });

  const classes = useStyles();

  const navigate = useNavigate();

  const handleOnSubmit = async () => {
    if (coinName.length < 1) {
      alert("No coin entered");
      return;
    }

    if (amount === undefined || amount <= 0) {
      alert("Positive numbers only");
      return;
    }
    if (cost === undefined || cost <= 0) {
      alert("Positive numbers only");
      return;
    }

    setIsProcessing(true);

    localStorage.setItem("coin", coinName);
    localStorage.setItem(coinName + "Amount", amount);
    localStorage.setItem(coinName + "Cost", cost);

    setIsProcessing(false);
    navigate("/");
  };

  const handleCoinInput = (event) => {
    setCoinName(event.target.value);
  };
  const handleAmountInput = (event) => {
    setAmount(event.target.value);
  };
  const handleCostInput = (event) => {
    setCost(event.target.value);
  };

  console.log(coinName);
  console.log(amount);
  console.log(cost);

  return (
    <div className="addPortfolio">
      <Navbar />
      <Container className={classes.container}>
        <div className={classes.card}>
          <div className={classes.form}>
            <form noValidate autoComplete="off" className="register-form">
              <div className={classes.registerFields}>
                <div className={classes.field}>
                  <span className={classes.fieldName}>Enter Token:</span>
                  <Select className={classes.input} value={coinName} label="coin" onChange={handleCoinInput}>
                    <MenuItem value="Cardano">Cardano</MenuItem>
                    <MenuItem value="Ethereum">Ethereum</MenuItem>
                    <MenuItem value="Bitcoin">Bitcoin</MenuItem>
                    <MenuItem value="Uniswap">Uniswap</MenuItem>
                    <MenuItem value="Dogecoin">Dogecoin</MenuItem>
                    <MenuItem value="Tether">Tether</MenuItem>
                    <MenuItem value="XRP">XRP</MenuItem>
                    <MenuItem value="EOS">EOS</MenuItem>
                  </Select>
                </div>
                <div className={classes.field}>
                  <span className={classes.fieldName}>Amount:</span>
                  <InputBase
                    type="number"
                    variant="standard"
                    name="amount"
                    value={amount}
                    onChange={handleAmountInput}
                    className={classes.input}
                    fullWidth
                  />
                </div>
                <div className={classes.field}>
                  <span className={classes.fieldName}>Cost:</span>
                  <InputBase
                    type="number"
                    variant="standard"
                    name="cost"
                    value={cost}
                    onChange={handleCostInput}
                    className={classes.input}
                    fullWidth
                  />
                </div>
              </div>
              <Button
                className={classes.registerBtn}
                disabled={isProcessing}
                onClick={handleOnSubmit}
                variant="contained"
              >
                {isProcessing ? "Loading..." : "Confirm"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddPortfolio;
