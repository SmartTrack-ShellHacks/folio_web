import React from "react";
import Chart from './Chart'

const Card = (props)=>{

    const {coin} = props

    const getDetails=(coin)=>{
        
        const symbol =''
        const name = ''
        const icon =''
        
        const details = {
            symbol:symbol,
            name:name,
            icon:icon
        }
        return details
    }
    const currency ='$'
    const price=''
    const change='5'
    const {symbol='', name='', icon=''} = getDetails(coin)


    return (
        <>
            <img className='icon' src={icon} alt={symbol}/>
            <div>
                <span className='name'>{name}</span>
                <span className='symbol'>{symbol}</span>
            </div>
            {/* <Chart/> */}
            <div>
                <span className='price'>{currency}{price}</span>
                <span className='change'>{change}%</span>
            </div>
        </>
    )
}

export default Card;