import React from 'react'
import imagesList from '../Images'
import "../components/responsive/365px/footer_resp.css"

function Footer_resp() {
  return (
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
      <img src={imagesList[11]} alt=""></img>
      <img src={imagesList[13]} alt=""></img>
      <img src={imagesList[12]} alt=""></img>
    </div>
    <div className='signature'>
      © 2022 All Rights Reserved
    </div>
  </div>
  )
}

export default Footer_resp