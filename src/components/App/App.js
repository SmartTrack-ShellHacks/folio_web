import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import AddPortfolio from "../AddPortfolio/AddPortfolio";
import Market from '../Market/Market'


function App() {
  const [portfolio, setPortfolio] = useState([
    {
      coin: "Cardano",
      symbol: "ADA",
      icon: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    {
      coin: "Bitcoin",
      symbol: "BTC",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    {
      coin: "Dogecoin",
      symbol: "DOGE",
      icon: "https://seeklogo.com/images/D/dogecoin-logo-625F9D262A-seeklogo.com.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    {
      coin: "Uniswap",
      symbol: "UNI",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsV6-0KW9vH6bz-UfpscApA9udwHtJbL16-ddXTOVauyNLjqXm5e94vNs0Bc-h2JyQig&usqp=CAU",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    {
      coin: "Tether",
      symbol: "USDT",
      icon: "https://cdn.iconscout.com/icon/free/png-256/tether-441954.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    {
      coin: "XRP",
      symbol: "XRP",
      icon: "https://cdn.freelogovectors.net/wp-content/uploads/2021/01/xrp-icon-freelogovectors.net_.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    {
      coin: "Ethereum",
      symbol: "ETH",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    {
      coin: "EOS",
      symbol: "EOS",
      icon: "https://i.dlpng.com/static/png/6505264_preview.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio portfolio={portfolio} />} />
          <Route path="/addPortfolio" element={ <AddPortfolio /> } />
          <Route path="/portfolio" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
