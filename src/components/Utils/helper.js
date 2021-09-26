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


export {
    getExchanges,
    getTargetCurrencies,
    getFundingCurrencies
  }