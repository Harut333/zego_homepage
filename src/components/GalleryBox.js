import React from 'react'
import "./imagesBoxes.css"
import "../components/responsive/365px/imagesBoxes_resp.css"
function GalleryBox() {
  return (
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
  )
}

export default GalleryBox