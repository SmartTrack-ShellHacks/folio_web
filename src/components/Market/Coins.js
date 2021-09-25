import React from "react";
import Card from './Card'

const Coins = () =>{
    const coins =['btc']
    
    return (
        <>
            {coins.map((coin)=>{
                return <Card coin={coin} key={coin}/>
            })}
        </>
    )
}

export default Coins;