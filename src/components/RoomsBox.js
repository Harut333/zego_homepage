import React from 'react'
import "./imagesBoxes.css"
import "../components/responsive/365px/imagesBoxes_resp.css"

function RoomsBox() {
  return (
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
  )
}

export default RoomsBox