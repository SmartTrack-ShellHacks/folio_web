import React,{useEffect, useState} from "react";
import Chart from './Chart'
import { Card as MaterialCard, Typography, Icon } from "@material-ui/core";
import {getCoinId} from '../Utils/helper'
import { makeStyles } from "@material-ui/styles";

const images =[
    {symbol: "BTC",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"}, 
    {symbol: "ETH",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"},
    {symbol: "ADA",
    icon: "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png"}, 
    {symbol: "DOGE",
    icon: "https://seeklogo.com/images/D/dogecoin-logo-625F9D262A-seeklogo.com.png"}, 
    {symbol: "USDT",
    icon: "https://cdn.iconscout.com/icon/free/png-256/tether-441954.png"}, 
    {symbol: "UNI",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsV6-0KW9vH6bz-UfpscApA9udwHtJbL16-ddXTOVauyNLjqXm5e94vNs0Bc-h2JyQig&usqp=CAU"}, 
    {symbol: "XRP",
    icon: "https://cdn.freelogovectors.net/wp-content/uploads/2021/01/xrp-icon-freelogovectors.net_.png"}, 
    {symbol: "EOS",
    icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/EOS-icon.png" 
}]

const Card = (props)=>{
    const useStyles = makeStyles({
        card: {
          width: "23rem",
          margin: "2rem",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: 'center'
        },
        column: {
          display: "flex",
          flexDirection: "column",
        },
        icon: {
          width: "2.5rem",
          height: "2.5rem",
        },
        symbol: {
          fontSize: ".7rem",
        },
        chart: {
            marginTop:'8rem'
        },
        items: {
          width: "8rem",
          textAlign: "center",
        },
    });
    
    const classes = useStyles();


    const {coin} = props
    const currency ='$'
    const [price, setPrice] = useState(0.0)
    const [change, setChange] = useState(0.0)
    const [icon, setIcon] = useState('')
    const [name, setName] = useState('')
    let symbol = coin

    const getCoinImage = (token) =>{
        token = token.toUpperCase()
        for(let i = 0; i<images.length;i++){
            if(images[i].symbol===token){
                return images[i].icon
            }
        }
    }
    const cardInfo = (newPrice, newChange )=>{
        setPrice(newPrice)
        setChange(newChange)
    }

    useEffect(() => {
        setIcon(getCoinImage(coin))
        symbol = coin
        setName(  getCoinId(coin))
        console.log(name)
    }, [coin])

    useEffect(() => {

    }, [])

    return (
        <MaterialCard className={classes.card}> 
            <img className={classes.icon} src={icon} alt={symbol}/>
            <div className={classes.column}>
                <Typography variant="body1" className={classes.name}>{name}</Typography>
                <Typography variant="body1" className={classes.symbol}>{symbol}</Typography>
            </div>
            <Chart coin={coin} className={classes.chart} cardInfo={cardInfo}/>
            <div className={classes.column}>
                <Typography variant="body1" className='price'>{currency}{price.toFixed(2)}</Typography>
                <Typography variant="body1" className='change'>{change.toFixed(2)}%</Typography>
            </div>
        </MaterialCard>
    )
}

export default Card;