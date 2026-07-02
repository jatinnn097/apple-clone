import React from "react";
import { useRef, useState } from "react";
import './App.css';

import card1 from './assets/latest/card1.png';
import card2 from './assets/latest/card2.png';
import card3 from './assets/latest/card3.png';
import card4 from './assets/latest/card4.png';
import card5 from './assets/latest/card5.png';
import card6 from './assets/latest/card6.png';
import card7 from './assets/latest/card7.png';
import card8 from './assets/latest/card8.png';
import card9 from './assets/latest/card9.png';
import card10 from './assets/latest/card10.png';
import card11 from './assets/latest/card11.png';
import card12 from './assets/latest/card12.png';
import card13 from './assets/latest/card13.png';

import left_arrow from './assets/left-arrow.png';
import right_arrow from './assets/right-arrow.png';


function Latest(){

    const products = [
        {
            tag : "",
            title: "iPhone 17 Pro",
            subtitle: "All Out Pro",
            price: "From ₹134900.00 Footnote †",
            image: card1,
            text: "white"
        },
        {
            tag : "NEW",
            title: "MacBook Neo",
            subtitle: "MacBook Neo",
            price: "From ₹79990.00 Footnote †",
            image: card2,
            text: "dark"
        },
        {
            tag : "",
            title: "iPhone 17e",
            subtitle: "MacBook Neo",
            price: "From ₹79990.00 Footnote †",
            image: card3,
            text: "dark"
        },
        {
            tag : "",
            title: "AirPods Max 2",
            subtitle: "MacBook Neo",
            price: "From ₹79990.00 Footnote †",
            image: card4,
            text: "dark"
        },
        {
            tag : "",
            title: "MacBook Pro",
            subtitle: "MacBook Neo",
            price: "From ₹79990.00 Footnote †",
            image: card5,
            text: "white"
        },
    ]

    const sliderRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    
    const checkScroll = () => {
        const slider = sliderRef.current;
        setShowLeft(slider.scrollLeft > 10);
        setShowRight(slider.scrollLeft < slider.scrollWidth - slider.clientWidth - 10)
    }
    
    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -200,
            behavior : "smooth"
        });
        setTimeout(checkScroll, 300);
    }
    
    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 200,
            behavior : "smooth"
        })
    }

    return(
        <section className="latest">
            <h2>The latest. <span>Take a look at what’s new right now.</span></h2>
            <div className="slider-wrapper">
                {
                    showLeft && 
                        <button className="arrow left" onClick={scrollLeft}>
                            <img src={left_arrow} alt="left arrow"/>
                        </button>
                }
                <div className="cards" ref={sliderRef} onScroll={checkScroll}>
                    {
                        products.map((item, index) => (
                            <div className={ `card ${item.text}`} style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="overlay">
                                    {
                                        item.tag && (
                                            <p className="tag">{item.tag}</p>
                                        )
                                    }
                                    {
                                        !item.tag && (
                                            <div className="space"/>
                                        )
                                    }
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    showRight && 
                        <button className="arrow right" onClick={scrollRight}>
                            <img src={right_arrow} alt="left arrow"/>
                        </button>
                }
            </div>
        </section>
    )
}

export default Latest;
