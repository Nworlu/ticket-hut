import React from 'react'
import './HomePage.css'
import imageBack from '../assets/back-image.png'
import PrimaryButton from '../components/PrimaryButton'

function HomePage() {
  return (
    <div className='homepage-container'>
      <h2 className='hero-sectoin'>The very best events</h2>
      <div className='homepage-div'>
        <div className='homepage-event'>
        <div className='homepage-image-container'>
            <img src={imageBack} />
        </div>
        <div className='hompage-event-detail'>
            <h4>War against drugs</h4>
            <p>25th April 2023</p>
            <p><span>By: </span>Computer Science</p>
            <span>Starting price</span><span> 2500</span>
        </div>
        </div>
        <div className='homepage-event'>
        <div className='homepage-image-container'>
            <img src={imageBack} />
        </div>
        <div className='hompage-event-detail'>
            <p>25th - April 2023</p>
            <p>Computer Science</p>
        </div>
        </div>
        <div className='homepage-event'>
        <div className='homepage-image-container'>
            <img src={imageBack} />
        </div>
        <div className='hompage-event-detail'>
            <p>25th - April 2023</p>
            <p>Computer Science</p>
        </div>
        </div>
        <div className='homepage-event'>
        <div className='homepage-image-container'>
            <img src={imageBack} />
        </div>
        <div className='hompage-event-detail'>
            <p>25th - April 2023</p>
            <p>Computer Science</p>
        </div>
        </div>
      </div>
      <PrimaryButton style={{marginTop:'50px', width:'320px', marginBottom: '40px'}} >
      Load More
      </PrimaryButton>
    </div>
  )
}

export default HomePage
