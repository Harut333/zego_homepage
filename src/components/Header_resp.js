import React from 'react'
import imagesList from '../Images'
import { useState } from 'react'
import "./responsive/365px/header_resp.css"


function Header_resp() {

    const [barsClicked, setBarsClicked] = useState(false)
    const ClickedBars = () => {

        barsClicked ? setBarsClicked(false) : setBarsClicked(true)
    }
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header_resp'>
            <div className='mainHeader_resp'>
                <div className={barsClicked ? "navbar_resp" : "navbar_resp0"}>
                    <ul>
                        <li><a
                            href=""
                        //function Scrolling not working
                        // onClick={Scrolling}
                        >Home
                        </a></li>
                        <div className='line'></div>
                        <li><a href="">Gallery</a></li>
                        <div className='line'></div>
                        <li><a href="">Services</a></li>
                        <div className='line'></div>
                        <li><a href="">Rooms</a></li>
                        <div className='line'></div>
                    </ul>
                </div>
                <div className='bars_resp'>
                    <div className='burger_resp'
                        onClick={() => {
                            ClickedBars()
                            handleClick()
                        }}
                    >

                        <div className={click ? "line1" : "linee1"}></div>
                        <div className={click ? "line2" : "linee2"}></div>
                        <div className={click ? "line3" : "linee3"}></div>
                    </div>
                </div>
                <div className='logo_resp'>
                    <img src={imagesList[0]} alt="" />
                </div>
                <div className='lang_resp'>
                    <p>EN</p>
                </div>
            </div>
        </div>
    )
}

export default Header_resp