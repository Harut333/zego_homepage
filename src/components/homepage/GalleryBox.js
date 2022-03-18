import React from 'react'
import "./imagesBoxes.css"
import "../responsive/365px/imagesBoxes_resp.css"

// import ImagesArr from '../Images'
import GImages from './homepage-images/GImages'

function GalleryBox() {
  return (
    <div className='galleryBox'>
      <div className='galleryTxt'>
        <p>Gallery</p>
        <hr />
      </div>
      <GImages />
      <a href=''>See All</a>
    </div>
  )
}

export default GalleryBox