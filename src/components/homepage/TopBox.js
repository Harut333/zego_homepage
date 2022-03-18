import React from 'react'
import Slider from "./Slider/Slider"
import CenteredBox from './CenteredBox'
import "./topBox.css"
import "../responsive/365px/topBox_resp.css"


function TopBox() {
    return (
        <div className="main_topBox">
            {/* <div className="main_leftTextBox">
                <h2>Stay with us <br /> feel like home</h2>
                <p>Leo malesuada porta ultricies vel fusce. Faucibus nulla <br /> vitae faucibus netus tristique integer ultrices.</p>
            </div>
            <div className="imgCircles">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}
            <Slider />
            <CenteredBox />

        </div>
    )
}

export default TopBox