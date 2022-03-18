import React from 'react'
import "./imagesBoxes.css"
import "../responsive/365px/imagesBoxes_resp.css"
import RImages from './homepage-images/RImages'

function RoomsBox() {
  return (
    <div className='roomsBox'>
      <div className='roomsTxt'>
        <p>Rooms</p>
        <hr />
      </div>
      <RImages />
      <a href=''>See All</a>
    </div>
  )
}

export default RoomsBox