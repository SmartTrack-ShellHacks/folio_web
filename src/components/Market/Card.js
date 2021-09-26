import React,{useEffect} from "react";
import Chart from './Chart'
import {getCoinId} from '../Utils/helper'

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
    icon: "https://i.dlpng.com/static/png/6505264_preview.png" 
}]

const Card = (props)=>{

    const {coin} = props
    const currency ='$'
    const price=''
    const change='5'
    let icon = ''
    let symbol = coin
    let name = ''

    const getCoinImage = (token) =>{
        token = token.toUpperCase()
        for(let i = 0; i<images.length;i++){
            if(images[i].symbol===token){
                return images[i].icon
            }
        }
    }

    useEffect(() => {
        return () => {
            icon = getCoinImage(coin)
            symbol = coin
            name = getCoinId(coin)
        }
    }, [coin])

    return (
        <>
            <img className='icon' src={icon} alt={symbol}/>
            <div>
                <span className='name'>{name}</span>
                <span className='symbol'>{symbol}</span>
            </div>
            <Chart coin={coin}/>
            <div>
                <span className='price'>{currency}{price}</span>
                <span className='change'>{change}%</span>
            </div>
        </>
    )
}

export default Card;