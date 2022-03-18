import React from 'react'
import "./header.css"
import logos from './homepage-images/HeaderImages';
function Header() {
    return (
        <div className="header">
            <div className="header_main">
                <div className="header_left">
                    <img src={logos[0]} alt="" />
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Rooms</a></li>
                    </ul>
                </div>
                <div className="header_right">
                    <img src={logos[1]} alt="" />
                    <a href="">Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Header


