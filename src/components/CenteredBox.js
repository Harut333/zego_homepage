import React from 'react'
import { useState } from 'react'
import imagesList from '../Images'
import "./centeredBox.css"
import "../components/responsive/365px/centeredBox_resp.css"

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
                    <input placeholder='21.02.2022' />
                </div>
                <div className="mcb_left2">
                    <p>Check Out</p>
                    <input
                        placeholder='dd/mm/yy'
                        maxLength={10} />
                </div>
                <div className="mcb_left3">
                    <button>
                        <img src={imagesList[2]} alt="" />
                    </button>
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
                            <img src={imagesList[3]} alt="" />
                        </button>
                        <input
                            value={count}
                            onChange={e => setCount(e.target.value)}
                            style={{ color: count > 0 ? "#161616" : "grey" }}
                        />
                        <button
                            onClick={() => setCount(count + 1)}>
                            <img src={imagesList[4]} alt="" />
                        </button>
                    </div>
                </div>
                <div className="mcb_center2">
                    <p>Adults</p>
                    <div className="incDec_line">
                        <button
                            onClick={() => setCount2(count2 - 1)}
                            disabled={count2 === 0}>
                            <img src={imagesList[3]} alt="" />
                        </button>
                        <input
                            value={count2}
                            onChange={e => setCount2(e.target.value)}
                            style={{ color: count2 > 0 ? "#161616" : "grey" }}
                        />
                        <button
                            onClick={() => setCount2(count2 + 1)}>
                            <img src={imagesList[4]} alt="" />
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
                            <img src={imagesList[3]} alt="" />
                        </button>
                        <input
                            className="incDec_inp1" value={count3}
                            onChange={e => setCount3(e.target.value)}
                            style={{ color: count3 > 0 ? "#161616" : "grey" }}
                        />
                        <button
                            onClick={() => setCount3(count3 + 1)}>
                            <img src={imagesList[4]} alt="" />
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