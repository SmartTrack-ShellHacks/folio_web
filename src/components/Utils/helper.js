import {
    getCurrencyPairs,
    costCalculator,
    getHistoricalData
} from './api'

const getExchanges = async (slugPair, data)=>{
    if(!data){data = await getCurrencyPairs()}
    let slug={exchanges:[]}
    data=data.data.data
    for(let i=0; i<data.length;i++){
        if(data[i].slug===slugPair){
            slug = data[i]
            break;
        }
    }
    const exchanges = slug.exchanges.map((exchange)=>{
        return exchange.slug
    })

    return exchanges 
}

const getTargetCurrencies = async (data) => {
  if (!data) {
    data = await getCurrencyPairs();
  }

  const targetCurrencies = data.data.map((slug) => {
    return slug.slug.target_currency.slug;
  });
  return targetCurrencies;
};

const getSlugPair = (target, funding) =>{
    const slugPair = target+'-'+funding
    return slugPair.toUpperCase()
}
const getBidsByCoin = async (coin, quantity, data) => {
    if(!data){data = await getCurrencyPairs()}
    const slugPair = getSlugPair(coin, 'usd')
    const exchanges = getExchanges(slugPair, data)
    const costs = await costCalculator(slugPair,exchanges,'bids',quantity)
    return costs
}


const getSlugPair = (target, funding) => {
  const slugPair = target + "-" + funding;
  return slugPair.toUpperCase;
};
const getBidsByCoin = async (coin, quantity, data) => {
  if (!data) {
    data = await getCurrencyPairs();
  }
  const slugPair = getSlugPair(coin, "usd");
  const exchanges = getExchanges(slugPair, data);
  const costs = await costCalculator(slugPair, exchanges, "bids", quantity);
  return costs;
};


const calculateOrder = async (target,funding, quantity, type, data) => {
    console.log('calculating order')
    if(!data){data = await getCurrencyPairs()}
    console.log('data',data)
    if(!type){type = 'bids'}
    console.log('type', type)
    const slugPair = await getSlugPair(target, funding)
    console.log('slug', slugPair)
    const exchanges = await getExchanges(slugPair, data)
    console.log('exchanges',exchanges)
    const costs = await costCalculator(slugPair,exchanges,type,quantity)
    console.log('cost', costs )
    return costs
}

const getCoinId = (symbol) => {
    let coinId ='bitcoin'
    const coins = [
        {symbol:'btc',coinId:'bitcoin'},{symbol:'eth',coinId:'ethereum'}, 
        {symbol:'ada',coinId:'cardano'},{symbol:'eos',coinId:'eos'},
        {symbol:'doge',coinId: 'dogecoin'},{symbol:'uni',coinId:'uniswap'}, 
        {symbol:'usdt',coinId:'tether' },{symbol:'xrp',coinId:'ripple'} ]
    coins.forEach((coin)=>{

        if(coin.symbol===symbol) {
            coinId= coin.coinId
        }
    })
    return coinId
}


const getCoinHistory = async(coin) =>{
    const days = 7
    const interval = 'hourly'
    const fiat = 'usd'
    const coinId = await getCoinId(coin)
    const data = await getHistoricalData(coinId, days, interval, fiat )

    return data
};

export {
    getExchanges,
    getTargetCurrencies,
    getFundingCurrencies,
    getBidsByCoin,
    calculateOrder,
    getCoinHistory,
    getCoinId
  }

