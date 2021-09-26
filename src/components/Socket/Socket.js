
import React, {useState, useEffect} from "react";





const Socket = () =>{
    const [price, setPrice] = useState('')

    const ws = new WebSocket('wss://staging.coinroutes.com/api/streaming/cbbo/?token=6c634e1eacecc4801b000249287fbf923d5c8824', []);
    ws.onopen = () => {
        let requestMessage = {
            currency_pair: 'BTC-USD',
            size_filter: 1,
            sample: 0.5,
            };
        ws.send(JSON.stringify(requestMessage));     
    };
    ws.addEventListener("message", async (message) => {
        const data = await JSON.parse(message.data)
        if(data && data.asks) setPrice(data.asks[0].price)
    })


    return(
        <>
        {price}
        </>
    )
}

export default Socket;








