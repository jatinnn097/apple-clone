import React from "react";
import { useState } from "react";
import './App.css';

import logo from './assets/apple-logo.png';
import search from './assets/search.png';
import bag from './assets/bag.png';
import DropdownMenu from "./DropdownMenu";
import NavbarMessage from "./NavbarMessage";

function Navbar({active, setActive}){

    const menuData = {
        Store:{
            "Shop": ["Shop the Latest","Mac","iPad","iPhone","Apple Watch", "AirPods", "Accessories"],
            "Quick Links": ["Find a store","Order Status","Apple Trade In", "Ways to Buy", "Personal Setup"],
            "Shop Special Stores": ["Education" ,"Business"]
        },
        Mac:{
            "Explore Mac": ["Explore All Mac","Macbook Neo","iPad","iPhone","Apple Watch", "AirPods", "Accessories"],
            "Shop Mac": ["Shop Mac","Mac Accessories","Apple Trade In", "Ways to Buy", "Personal Setup"],
            "More from Mac": ["Mac Support" ,"Apple care"]
        },
        iPad:{
            "Explore iPad": ["Explore All iPad","iPad Pro","iPad Air","iPad Mini","Apple Pencil", "Keyboards", "Accessories"],
            "Shop iPad": ["Shop iPad", "iPad Accessories", "Ways to Buy", "Personal Setup"],
            "More from iPad": ["iPad Support", "AppleCare", "iPadOS 27 Preview", "Apple Intelligence and Siri", "Apple Creator Studio", "Apps by Apple", "iCloud+", "Education"]
        },
        iPhone:{
            "Explore iPhone": ["Explore All iPhone", "iPhone 17 Pro" ,"iPhone Air", "iPhone 17", "iPhone 17e", "iPhone 16"],
            "Shop iPhone": ["iPhone Accessories", "Apple Trade In", "iPhone Support", "AppleCare", "iOS 27 Preview","Apple Intelligence and Siri", "Ways to Buy", "Personal Setup"],
            "More from iPhone": ["Apps by Apple", "iPhone Privacy","Better with Mac", "iCloud+", "Wallet"]
        },
        Watch:{
            "Explore Watch": ["Explore All Apple Watch", "Apple Watch Series 11", "Apple Watch SE 3", "Apple Watch Ultra 3", "Apple Watch Nike"],
            "Shop Watch": ["Shop Apple Watch Apple Watch Straps", "Apple Watch Accessories", "Ways to Buy", "Personal Setup"],
            "More from Watch": ["Apple Watch Support AppleCare" ,"watchOS 27 Preview","Apple Watch For Your Kids","Apps by Apple","Apple Fitness+", "Education"]
        },
    }

    const menu = [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support"
    ]

    return(
        <div className="nav-wrapper" onMouseLeave={() => setActive("")}>
    
        <nav className="navbar">
            <img src={logo} className="nav-icon"></img>
            {
               menu.map((item)=>(
                 <p key={item} 
                    onMouseEnter={() => setActive(item)}>
                    {item}
                  </p>
               ))
            }

            <img src={search} className="nav-btn"/>
            <img src={bag} className="nav-btn"/>
        </nav>

        <div onMouseDown={() => setActive("")}/> 
        { 
            !active && ( <NavbarMessage/>)
        }
        {
            active && ( <DropdownMenu data={menuData[active]}/>)
        }
       
        </div>
    )
}

export default Navbar;