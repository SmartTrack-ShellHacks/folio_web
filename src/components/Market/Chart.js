import React, {useState, useEffect} from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import {getCoinData} from '../Utils/api'


const Chart = (props)=>{

    const {coin}=props

    const [data, setData] = useState([])
    const [color, setColor] = useState('')

const getData = async(coin)=>{
    try{
        // const coinData = getCoinData(coin) 
        const coinData = [coin ]
        setData(coinData)
    }catch(error){
        throw error
    }
}


    useEffect(()=>{
        getData(coin)
    },[])

    useEffect(()=>{
        if(data[data.length].price>data[0].price){
            setColor('green')
        }else setColor('red')
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