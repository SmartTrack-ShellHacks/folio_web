import {
    getCurrencyPairs,
    costCalculator,
} from './api'

const getExchanges = async (slugPair, data)=>{
    if(!data){data = await getCurrencyPairs()}
    let slug={}
    for(let i=0; i<data.data.length;i++){
        if(data.data[i].slug===slugPair){
            slug = data.data[i]
            break;
        }
    }
    const exchanges = slug.exchanges.map((exchange)=>{
        return exchange.slug
    })
    return exchanges 
}

const getTargetCurrencies = async (data)=>{
    if(!data){data = await getCurrencyPairs()}
    
    const targetCurrencies = data.data.map((slug)=>{
        return slug.slug.target_currency.slug
    })
    return targetCurrencies 
}

const getFundingCurrencies = async (targetCurrency, data)=>{
    if(!data){data = await getCurrencyPairs()}
    
    const fundingCurrencies = data.data.map((slug)=>{
        if(slug.target_currency.slug===targetCurrency){
            return slug.slug.target_currency.slug
        }
    })
    return fundingCurrencies
}

const getSlugPair = (target, funding) =>{
    const slugPair = target+'-'+funding
    return slugPair.toUpperCase
}
const getBidsByCoin = async (coin, quantity, data) => {
    if(!data){data = await getCurrencyPairs()}
    const slugPair = getSlugPair(coin, 'usd')
    const exchanges = getExchanges(slugPair, data)
    const costs = await costCalculator(slugPair,exchanges,'bids',quantity)
    return costs
}


const calculateOrder = async (target,funding, quantity, type, data) => {
    if(!data){data = await getCurrencyPairs()}
    if(!type){type = 'bids'}
    const slugPair = getSlugPair(target, funding)
    const exchanges = getExchanges(slugPair, data)
    const costs = await costCalculator(slugPair,exchanges,type,quantity)
    return costs
}

export {
    getExchanges,
    getTargetCurrencies,
    getFundingCurrencies,
    getBidsByCoin,
    calculateOrder
  }