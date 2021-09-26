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
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
      totalGain: 0,
    },
    {
      coin: "Bitcoin",
      symbol: "BTC",
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
      totalGain: 0,
    },
    {
      coin: "Dogecoin",
      symbol: "Doge",
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
      totalGain: 0,
    },
    {
      coin: "Uniswap",
      symbol: "UNI",
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
      totalGain: 0,
    },
    {
      coin: "Tether",
      symbol: "USDT",
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
      totalGain: 0,
    },
    {
      coin: "XRP",
      symbol: "XRP",
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
      totalGain: 0,
    },
    {
      coin: "Ethereum",
      symbol: "ETH",
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
      totalGain: 0,
    },
    {
      coin: "EOS",
      symbol: "EOS",
      icon: "imgUrl",
      cost: 0,
      value: 0,
      percentGain: 0,
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
