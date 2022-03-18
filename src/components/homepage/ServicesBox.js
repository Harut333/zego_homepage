import React from 'react'
import "./imagesBoxes.css"
import "../responsive/365px/imagesBoxes_resp.css"
import SImages from './homepage-images/SImages'


function ServicesBox() {
  return (
    <div className='servicesBox'>
          <div className='servicesTxt'>
            <p>Services</p>
            <hr />
          </div>
          <SImages />
          <a href=''>See All</a>
        </div>
  )
}

export default ServicesBox