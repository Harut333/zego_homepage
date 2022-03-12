import { useState } from 'react';
import './App.css';
import imgArr from './Images';
import "./responsive375.css"

//for function Scrolling
// import { useScrollTo } from "react-use-window-scroll";


function App() {
  // increment, decrement states
  const [count, setCount] = useState(1)
  const [count2, setCount2] = useState(2)
  const [count3, setCount3] = useState(0)

  // bars show, hide states
  const [barsClicked, setBarsClicked] = useState(false)
  const ClickedBars = () => {
    barsClicked ? setBarsClicked(false) : setBarsClicked(true)
  }
  // function Scrolling isn't working
  // function Scrolling(els) {


  //   return (
  //     <div>
  //       {
  //         els.map((el) => {
  //           el.scrollTo(0, 1000)= useScrollTo()
  //         })
  //       }
  //     </div >
  //   )

  // }
  return (

    <div className="wrapper">
      {/* header for responsive 375px */}
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
              <li><a href="">Gallery</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Rooms</a></li>
            </ul>
          </div>
          <div className='bars_resp'>
            <img
              src={imgArr[14]}
              alt=""
              onClick={ClickedBars}
            ></img>
          </div>
          <div className='logo_resp'>
            <img src={imgArr[0]} alt="" />
          </div>
          <div className='lang_resp'>
            <p>EN</p>
          </div>
        </div>
      </div>
      {/*  main header  */}
      <div className="header">
        <div className="header_main">
          <div className="header_left">
            <img src={imgArr[0]} alt="" />
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Rooms</a></li>
            </ul>
          </div>
          <div className="header_right">
            <img src={imgArr[1]} alt="" />
            <a href="">Cart</a>
          </div>
        </div>
      </div>
      <div className="main_page">
        <div className="main_topBox">
          <div className="main_leftTextBox">
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
          </div>
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
                  <img src={imgArr[2]} alt="" />
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
                    <img src={imgArr[3]} alt="" />
                  </button>
                  <input
                    value={count}
                    onChange={e => setCount(e.target.value)}
                    style={{ color: count > 0 ? "#161616" : "grey" }}
                  />
                  <button
                    onClick={() => setCount(count + 1)}>
                    <img src={imgArr[4]} alt="" />
                  </button>
                </div>
              </div>
              <div className="mcb_center2">
                <p>Adults</p>
                <div className="incDec_line">
                  <button
                    onClick={() => setCount2(count2 - 1)}
                    disabled={count2 === 0}>
                    <img src={imgArr[3]} alt="" />
                  </button>
                  <input
                    value={count2}
                    onChange={e => setCount2(e.target.value)}
                    style={{ color: count2 > 0 ? "#161616" : "grey" }}
                  />
                  <button
                    onClick={() => setCount2(count2 + 1)}>
                    <img src={imgArr[4]} alt="" />
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
                    <img src={imgArr[3]} alt="" />
                  </button>
                  <input
                    className="incDec_inp1" value={count3}
                    onChange={e => setCount3(e.target.value)}
                    style={{ color: count3 > 0 ? "#161616" : "grey" }}
                  />
                  <button
                    onClick={() => setCount3(count3 + 1)}>
                    <img src={imgArr[4]} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className='linee'></div>
            <div className="mcb_right">
              <button>Check Aviability</button>
            </div>
          </div>
        </div>
        <div className='galleryBox'>
          <div className='galleryTxt'>
            <p>Gallery</p>
            <hr />
          </div>
          <div className='galleryImgs'>
            <div className='galleryImg1'></div>
            <div className='galleryImg2'></div>
            <div className='galleryImg3'></div>
            <div className='galleryImg4'></div>
            <div className='galleryImg5'></div>
            <div className='galleryImg6'></div>
          </div>
          <a href=''>See All</a>
        </div>
        <div className='roomsBox'>
          <div className='roomsTxt'>
            <p>Rooms</p>
            <hr />
          </div>
          <div className='roomsImgs'>
            <div className='roomsImg1'>
              <p>Standart</p>
            </div>
            <div className='roomsImg2'>
              <p>Deluxe</p>
            </div>
            <div className='roomsImg3'>
              <p>Family</p>
            </div>
            <div className='roomsImg4'>
              <p>Shale</p>
            </div>
            <div className='roomsImg5'>
              <p>Vestibulum</p>
            </div>
            <div className='roomsImg6'>
              <p>Suspendisse</p>
            </div>
          </div>
          <a href=''>See All</a>
        </div>
        <div className='servicesBox'>
          <div className='servicesTxt'>
            <p>Services</p>
            <hr />
          </div>
          <div className='servicesImgs'>
            <div className='servicesImg1'></div>
            <div className='servicesImg2'></div>
            <div className='servicesImg3'></div>
            <div className='servicesImg4'></div>
            <div className='servicesImg5'></div>
            <div className='servicesImg6'></div>
          </div>
          <a href=''>See All</a>
        </div>
        <div className='footer'>
          <div className='footLogos'>
            <img src={imgArr[11]} alt=""></img>
            <img src={imgArr[13]} alt=""></img>
            <img src={imgArr[12]} alt=""></img>
          </div>
          <div className='footNavbar'>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <hr />
          <div className='signature'>
            © 2022 All Rights Reserved
          </div>
        </div>

        {/* footer for responsive 375px */}
        <div className='footer_resp'>
          <div className='footNavbar'>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footLogos'>
            <img src={imgArr[11]} alt=""></img>
            <img src={imgArr[13]} alt=""></img>
            <img src={imgArr[12]} alt=""></img>
          </div>
          <div className='signature'>
            © 2022 All Rights Reserved
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default App;