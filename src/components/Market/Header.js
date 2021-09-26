
import React from "react";



const Header = () =>{
    const market = -1
    const label = () =>{
        if (market>0){return 'up'}
        else return 'down'
    }
    const color = () =>{
        if (market>0){return 'green'}
        else return 'red'
    }

    return(
        <>
        {/* <div>
            <span>Market is {label()}: <span className={color()}>{market}%</span></span>
            <span>in the past 24 hours</span>
        </div> */}
        <form>
            <select id="currency" name="currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>
        </form>
            
        </>
    )
}

export default Header;