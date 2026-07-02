import React from "react";
import './App.css';

import left from './assets/left-arrow.png';
import right from './assets/right-arrow.png';

function NavbarMessage(){
    return(
        <div className="nav-message">
            <img src={left}/>
            <div className="msg">
                <p>Get up to 6 months of No Cost EMI Footnote ◊ plus up to ₹10000.00 instant cashback Footnote ∆ on selected products with eligible cards.<a href="#">See offers</a> </p>
                <div className="plus">
                    <p>+</p>
                </div>
            </div>
            <img src={right}/>
        </div>
    )
}

export default NavbarMessage;