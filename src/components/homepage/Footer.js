import React from 'react'
import { useState } from 'react'
import imagesList from './homepage-images/GImages'
import "./footer.css"
import twitter from "../../assets/images/icons/footlogos/Vector (1).png"
import intsa from "../../assets/images/icons/footlogos/Vector (2).png"
import fb from "../../assets/images/icons/footlogos/Vector.png"



function Footer() {
  const footLogos = [fb, twitter, intsa]
  const [slideIndex, setSlideIndex] = useState(1)

  return (
    <div className='footer'>
      <div className="footLogos">
        {

          footLogos.map(item => {
            return (

              <div className="fimg">
                <img src={item} />
              </div>
            )
          })
        }
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
  )
}

export default Footer