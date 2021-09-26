import React, {useState, useEffect} from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getCurrencyPairs, costCalculator} from '../Utils/api'
import { getCoinHistory, calculateOrder} from '../Utils/helper'


const Chart = (props)=>{
    
    const {coin}=props
    const sampleData = [{price:4, time:1},{price:1, time:2}]

    const [data, setData] = useState(sampleData)
    const [color, setColor] = useState('')

const getData = async(coin)=>{
    try{
        const resData = await getCoinHistory(coin) 
        const coinData = await resData.data.prices.map((data)=>{
            return {price:data[1], time:data[0]}
        })
        setData(coinData)
    }catch(error){
        throw error
    }
}
const getPair = async(coin)=>{
    try{
        const coinData = await getCurrencyPairs() 
        console.log('deez',coinData)
    }catch(error){
        throw error
    }
}
const calculatePro = async(currency_pair,exchanges,side,quantity)=>{
    try{
        const coinData = await costCalculator(currency_pair,
            exchanges,
            side,
            quantity) 
        console.log('nuts',coinData)
    }catch(error){
        throw error
    }
}



    useEffect(()=>{
        getData(coin)
        // getPair()
        // calculate( "BTC-USD",
        //   ["gdax", "gemini", "bitstamp"], "bids", 1,)
        // calculateOrder('btc', 'usd', 3)
    },[])

    useEffect(()=>{
        if(data.price && data.price[data.length-1]>data[0].price){
            setColor('green')
        }else 
        setColor('red')
    }, [data])

    return (
        <ResponsiveContainer width="75%" height={500} className='container'>
        <LineChart width={600} height={300} data={data}>
          <Line dataKey="time" type="monotone" animationDuration={2200} stroke="transparent" dot={false} key={0} />
          <Line dataKey="price" animationDuration={2200} stroke={color} dot={false} key={1} />
          <YAxis dataKey="price" stroke="transparent" type="number" domain={[datamin=>datamin, datamax=>datamax]}/>
          <XAxis dataKey="time" stroke="transparent" />
        </LineChart>
      </ResponsiveContainer>
    )
}



export default Chart;