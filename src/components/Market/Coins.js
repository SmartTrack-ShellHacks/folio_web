import React from "react";
import Card from './Card'

const Coins = ({ portfolio, btcPrice, ethPrice, adaPrice, dogePrice, uniPrice, eosPrice, usdtPrice, xrpPrice }) =>{
    const coins =['btc', 'eth', 'ada', 'doge', 'usdt', 'uni', 'xrp', 'eos']
    



    return (
        <>
            {coins.map((coin)=>{
                return <Card coin={coin} key={coin}/>
            })}
        </>
    )
}

export default Coins;