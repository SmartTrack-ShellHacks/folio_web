import axios from "axios";
require("dotenv").config();

const baseURL = 'https://staging.coinroutes.com'
const apiToken = process.env.REACT_APP_KEY || ''
const priceSocketURL = 'api/streaming/real_price'
const cbboSocketURL = 'api/streaming/cbbo'



const request= async ({ endpoint, method = "GET", data = {}, params = {} })=> {
    const url = `${baseURL}/${endpoint}`;
    console.log("Health Check", apiToken);

    const headers = {
      "Content-Type": "application/json",
    };
    
    if (apiToken) {
      headers["Authorization"] = `Token ${apiToken}`;
    }

    try {
      const res = await axios({ url, method, data, headers, params });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || err };
    }
  }

const request1 = async({endpoint, method, body, token})=>{
      try{
        let headers = {'Content-Type': 'application/json'}
        if(token) headers['Authorization']=`Bearer ${token}`
        let req = {
        method:method,
        headers: headers,
      }
      if(body) request['body']= JSON.stringify(body)
      console.log("options",request)
      const resp = await fetch(baseURL+endpoint,req)
      const data = await resp.json()
      
      console.log(data)
      
      if(data.error) throw(data.error)
      return  data.data ? data.data : null

      }
      catch(err){
        console.error(err)
      }
      finally{
        console.log('request', baseURL+endpoint)
      }
  }
const  getCurrencyPairs = async ()=>{
    const endpoint='/api/currency_pairs/'
    const data = await request({
        endpoint:endpoint,
        method:'GET',
    })
    return {data}
}

//Example
// {
//     "currency_pair": "BTC-USD",
//     "exchanges": [
//       "gdax", "gemini", "bitstamp"
//     ],
//     "side": "bids",
//     "quantity": 1
// }
const  costCalculator = async (currency_pair, exchanges, side, quantity)=>{
    const endpoint = '/api/cost_calculator/'
    const data = await request({
        endpoint:endpoint,
        method:'POST',
        data:{
            currency_pair: currency_pair,
            exchanges: exchanges,
            side: side,
            quantity: quantity,
        },
    })
      return {data}
    }

const getCoinData = async (coin)=>{
  const data= [{price:3},{price:5} ]

  return data
}

const getHistoricalData = async(coin, days, interval, fiat) =>{
  if(!fiat){fiat = 'usd'}
  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${coin}/market_chart`,
    params: {vs_currency: fiat, days: days, interval: interval},
    headers: {'Content-Type': 'application/json'}
  };
  const data = await axios.request(options)
  return data
}




export {
  getCurrencyPairs,
  costCalculator,
  getCoinData,
  getHistoricalData
}