import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  MenuItem,
  Select,
  FormControl,
  Typography,
  Input,
  makeStyles,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Results from "./Results";
// import { costCalculator } from "../Utils/api";
import { calculateOrder } from "../Utils/helper";

const useStyles = makeStyles({
  title: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  wrapper: {
    width: "100vw",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "2rem",
  },
  form: {
    width: "20vw",
  },
  select: {
    width: "12vw",
    marginLeft: "1rem",
  },
  group: {
    display: "flex",
    alignItems: "center",
    marginLeft: "2rem",
    justifyContent: "space-between",
  },
  btn: {
    boxShadow: "0px 2px 4px rgba(85, 35, 221, 0.4)",
    background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
    color: "white",
    fontSize: ".7rem",
    marginLeft: "2rem",
    fontWeight: "bold",
  },
  process: {
    marginLeft: "2rem",
    color: "#3887FE",
  },
});
const Calculator = ({ btcPrice, ethPrice, adaPrice, dogePrice, uniPrice, eosPrice, usdtPrice, xrpPrice }) => {

  const classes = useStyles();

  const [calcCoin, setCalcCoin] = useState("");
  const [fiat, setFiat] = useState("USD");
  const [quantity, setQuantity] = useState();
  const [payload, setPayload] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleCoinInput = (event) => {
    setCalcCoin(event.target.value);
  };
  const handleFiatInput = (event) => {
    setFiat(event.target.value);
  };
  const handleQuantityInput = (event) => {
    setQuantity(event.target.value);
  };

  // const calculate = async (currency_pair, exchanges, side, quantity) => {
  //   try {
  //     const { data } = await costCalculator(currency_pair, exchanges, side, quantity);
  //     console.log("nuts", data.data);
  //     setPayload(data.data);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  const handleOnSubmit = async () => {
    setProcessing(true);
    if (calcCoin.length < 1) {
      alert("No coin entered");
      setProcessing(false);
      return;
    }

    if (quantity === undefined || quantity <= 0) {
      alert("Positive numbers only");
      setProcessing(false);
      return;
    }

    // let pair = calcCoin + "-" + fiat;
    // calculate(pair, ["gdax", "gemini", "bitstamp"], "bids", quantity);
    let data = await calculateOrder(calcCoin, fiat, quantity);
    setPayload(data.data.data);
    setProcessing(false);
  };

  // console.log("NUTZZ", payload);

  return (
    <div>
      <Navbar />
      <div className={classes.title}>
        <Typography className={classes.text} variant="h3">
          Cost Calculator
        </Typography>
      </div>
      <div className={classes.wrapper}>
          <div className={classes.wrapper}>
          <FormControl className={classes.form}>
            <div className={classes.group}>
              <Typography variant="body1">Coin</Typography>
              <Select className={classes.select} value={calcCoin} label="coin" onChange={handleCoinInput}>
                <MenuItem value="ADA">Cardano</MenuItem>
                <MenuItem value="ETH">Ethereum</MenuItem>
                <MenuItem value="BTC">Bitcoin</MenuItem>
                <MenuItem value="UNI">Uniswap</MenuItem>
                <MenuItem value="DOGE">Dogecoin</MenuItem>
                <MenuItem value="USDT">Tether</MenuItem>
                <MenuItem value="XRP">XRP</MenuItem>
                <MenuItem value="EOS">EOS</MenuItem>
              </Select>
            </div>
            </FormControl>
            <FormControl className={classes.form}>
            <div className={classes.group}>
              <Typography variant="body1">Quantity</Typography>
              <Input
                type="number"
                variant="standard"
                name="amount"
                value={quantity}
                onChange={handleQuantityInput}
                className={classes.select}
                fullWidth
              />
            </div>
            </FormControl>

            <FormControl className={classes.form}>
            <div className={classes.group}>
              <Typography variant="body1">Fiat</Typography>
              <Select className={classes.select} value="USD" label="fiat" onChange={handleFiatInput}>
                <MenuItem value="USD">USD</MenuItem>
              </Select>
            </div>
            </FormControl>

            <FormControl className={classes.form}>
            <Button className={classes.btn} onClick={handleOnSubmit}>
              Go
            </Button>
        </FormControl>
            {processing && <CircularProgress className={classes.process} />}
          </div>
      </div>
      {Object.keys(payload).length > 0 && <Results payload={payload} />}
    </div>
  );
};

export default Calculator;
