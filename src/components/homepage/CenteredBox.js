import React from 'react'
import { useState } from 'react'
import logos from './homepage-images/HeaderImages';
import "./centeredBox.css"
import "../responsive/365px/centeredBox_resp.css"

function CenteredBox() {
    // increment, decrement states
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(2)
    const [count3, setCount3] = useState(0)
    return (
        <div className="main_centeredBox">
            <div className="mcb_left">
                <div className="mcb_left1">
                    <p>Check In</p>
                    {/* kalendary chstacvac */}
                    <input type="date" name="dob" data-placeholder="21.02.2022"  required aria-required="true" />

                </div>
                <div className="mcb_left2">
                    <p>Check Out</p>

                    {/* kalendary chstacvac */}
                        <input type="date" name="dob" data-placeholder="dd.mm.yyyy" required aria-required="true" />
                        
                </div>
                
            </div>
            {/* line div is <hr /> */}
            <div className='linee'></div>
            <div className="mcb_center">
                <div className="mcb_center1">
                    <p>Rooms</p>
                    <div className="incDec_line">
                        <button
                            onClick={() => setCount(count - 1)}
                            disabled={count === 0}>
                            <img src={logos[2]} alt="" />
                        </button>
                        <input
                            value={count}
                            onChange={e => setCount(e.target.value)}
                            style={{ color: count > 0 ? "#161616" : "grey" }}
                        />
                        <button
                            onClick={() => setCount(count + 1)}>
                            <img src={logos[3]} alt="" />
                        </button>
                    </div>
                </div>
                <div className="mcb_center2">
                    <p>Adults</p>
                    <div className="incDec_line">
                        <button
                            onClick={() => setCount2(count2 - 1)}
                            disabled={count2 === 0}>
                            <img src={logos[2]} alt="" />
                        </button>
                        <input
                            value={count2}
                            onChange={e => setCount2(e.target.value)}
                            style={{ color: count2 > 0 ? "#161616" : "grey" }}
                        />
                        <button
                            onClick={() => setCount2(count2 + 1)}>
                            <img src={logos[3]} alt="" />
                        </button>
                    </div>
                </div>
                <div className='linee'></div>
                <div className="mcb_center3">
                    <p>Children</p>
                    <div className="incDec_line">
                        <button
                            onClick={() => setCount3(count3 - 1)}
                            disabled={count3 === 0}
                        >
                            <img src={logos[2]} alt="" />
                        </button>
                        <input
                            className="incDec_inp1" value={count3}
                            onChange={e => setCount3(e.target.value)}
                            style={{ color: count3 > 0 ? "#161616" : "grey" }}
                        />
                        <button
                            onClick={() => setCount3(count3 + 1)}>
                            <img src={logos[3]} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='linee'></div>
            <div className="mcb_right">
                <button>Check Aviability</button>
            </div>
        </div>
    )
}

export default CenteredBox