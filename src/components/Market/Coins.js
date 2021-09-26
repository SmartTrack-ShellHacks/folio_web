import React from "react";
import Card from './Card'
import { makeStyles } from "@material-ui/styles";

const Coins = ({ portfolio, btcPrice, ethPrice, adaPrice, dogePrice, uniPrice, eosPrice, usdtPrice, xrpPrice }) =>{
    const coins =['btc', 'eth', 'ada', 'doge', 'usdt', 'uni', 'xrp', 'eos']
    const useStyles = makeStyles({
        cards: {
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
          alignItems: 'center'
        },

    });
    
    const classes = useStyles();



    return (
        <div className={classes.cards}>
            {coins.map((coin)=>{
                return <Card coin={coin} key={coin}/>
            })}
        </div>
    )
}

export default Coins;