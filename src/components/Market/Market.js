
import React from "react";
import Header from './Header'
import Coins from "./Coins";
import Navbar from "../Navbar/Navbar";



const Market = () =>{

    return(
        <>
            <Navbar />
            <span>Coin Market</span>
            <Header />
            <Coins />
        </>
    )
}

export default Market;