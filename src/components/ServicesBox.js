import React from 'react'
import "./imagesBoxes.css"
import "../components/responsive/365px/imagesBoxes_resp.css"
function ServicesBox() {
  return (
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
  )
}

export default ServicesBox