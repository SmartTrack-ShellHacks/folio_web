import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import AddPortfolio from "../AddPortfolio/AddPortfolio";
import Market from "../Market/Market";

const ws = new WebSocket(
  "wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824",
  []
);
const ws2 = new WebSocket(
  "wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824",
  []
);
const ws3 = new WebSocket(
  "wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824",
  []
);
const ws4 = new WebSocket(
  "wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824",
  []
);
const ws5 = new WebSocket(
  "wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824",
  []
);
const ws6 = new WebSocket(
  "wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824",
  []
);
const ws7 = new WebSocket(
  "wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824",
  []
);

function App() {
  const [portfolio, setPortfolio] = useState({
    Cardano: {
      coin: "Cardano",
      symbol: "ADA",
      icon: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    Bitcoin: {
      coin: "Bitcoin",
      symbol: "BTC",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    Dogecoin: {
      coin: "Dogecoin",
      symbol: "DOGE",
      icon: "https://seeklogo.com/images/D/dogecoin-logo-625F9D262A-seeklogo.com.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    Uniswap: {
      coin: "Uniswap",
      symbol: "UNI",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsV6-0KW9vH6bz-UfpscApA9udwHtJbL16-ddXTOVauyNLjqXm5e94vNs0Bc-h2JyQig&usqp=CAU",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    Tether: {
      coin: "Tether",
      symbol: "USDT",
      icon: "https://cdn.iconscout.com/icon/free/png-256/tether-441954.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    XRP: {
      coin: "XRP",
      symbol: "XRP",
      icon: "https://cdn.freelogovectors.net/wp-content/uploads/2021/01/xrp-icon-freelogovectors.net_.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    Ethereum: {
      coin: "Ethereum",
      symbol: "ETH",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
    EOS: {
      coin: "EOS",
      symbol: "EOS",
      icon: "https://i.dlpng.com/static/png/6505264_preview.png",
      cost: 0,
      value: 0,
      amountBought: 0,
      totalGain: 0,
    },
  });

  const [btcPrice, setBtcPrice] = useState("");
  const [ethPrice, setEthPrice] = useState("");
  const [adaPrice, setAdaPrice] = useState("");
  const [dogePrice, setDogePrice] = useState("");
  const [uniPrice, setUniPrice] = useState("");
  const [eosPrice, setEosPrice] = useState("");
  const [xrpPrice, setXrpPrice] = useState("");
  const [usdtPrice, setUsdtPrice] = useState(1);

  ws.onopen = () => {
    let requestMessage = {
      currency_pair: "BTC-USD",
      size_filter: 1,
      sample: 0.5,
    };
    ws.send(JSON.stringify(requestMessage));
  };
  ws.addEventListener("message", async (message) => {
    const data = await JSON.parse(message.data);
    if (data.product === "BTC-USD") {
      if (data && data.asks) setBtcPrice(data.asks[0].price);
    }
  });

  ws2.onopen = () => {
    let requestMessage = {
      currency_pair: "ETH-USD",
      size_filter: 1,
      sample: 0.5,
    };
    ws2.send(JSON.stringify(requestMessage));
  };
  ws2.addEventListener("message", async (message) => {
    const data = await JSON.parse(message.data);
    if (data.product === "ETH-USD") {
      if (data && data.asks) setEthPrice(data.asks[0].price);
    }
  });

  ws3.onopen = () => {
    let requestMessage = {
      currency_pair: "ADA-USD",
      size_filter: 1,
      sample: 0.5,
    };
    ws3.send(JSON.stringify(requestMessage));
  };
  ws3.addEventListener("message", async (message) => {
    const data = await JSON.parse(message.data);
    if (data.product === "ADA-USD") {
      if (data && data.asks) setAdaPrice(data.asks[0].price);
    }
  });

  ws4.onopen = () => {
    let requestMessage = {
      currency_pair: "DOGE-USD",
      size_filter: 1,
      sample: 0.5,
    };
    ws4.send(JSON.stringify(requestMessage));
  };
  ws4.addEventListener("message", async (message) => {
    const data = await JSON.parse(message.data);
    if (data.product === "DOGE-USD") {
      if (data && data.asks) setDogePrice(data.asks[0].price);
    }
  });

  ws5.onopen = () => {
    let requestMessage = {
      currency_pair: "EOS-USD",
      size_filter: 1,
      sample: 0.5,
    };
    ws5.send(JSON.stringify(requestMessage));
  };
  ws5.addEventListener("message", async (message) => {
    const data = await JSON.parse(message.data);
    if (data.product === "EOS-USD") {
      if (data && data.asks) setEosPrice(data.asks[0].price);
    }
  });

  ws6.onopen = () => {
    let requestMessage = {
      currency_pair: "UNI-USD",
      size_filter: 1,
      sample: 0.5,
    };
    ws6.send(JSON.stringify(requestMessage));
  };
  ws6.addEventListener("message", async (message) => {
    const data = await JSON.parse(message.data);
    if (data.product === "UNI-USD") {
      if (data && data.asks) setUniPrice(data.asks[0].price);
    }
  });

  ws7.onopen = () => {
    let requestMessage = {
      currency_pair: "XRP-USD",
      size_filter: 1,
      sample: 0.5,
    };
    ws7.send(JSON.stringify(requestMessage));
  };
  ws7.addEventListener("message", async (message) => {
    const data = await JSON.parse(message.data);
    if (data.product === "XRP-USD") {
      if (data && data.asks) setXrpPrice(data.asks[0].price);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio
                portfolio={portfolio}
                btcPrice={btcPrice}
                ethPrice={ethPrice}
                adaPrice={adaPrice}
                dogePrice={dogePrice}
                uniPrice={uniPrice}
                eosPrice={eosPrice}
                usdtPrice={usdtPrice}
                xrpPrice={xrpPrice}
              />
            }
          />
          <Route path="/addPortfolio" element={<AddPortfolio />} />
          <Route path="/calculator" />
          <Route path="/market" element={<Market />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
