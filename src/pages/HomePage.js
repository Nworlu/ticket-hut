import React, { useEffect } from 'react'
import './HomePage.css'
import axios from "axios";
import imageBack from '../assets/back-image.png'
import PrimaryButton from '../components/PrimaryButton'
const apiUrl = 'https://app.tixhut.co/api'
import './department'

function HomePage() {
  useEffect(()=>{
    async function getEvent(){
      try {
        const res = await axios.get(`${apiUrl}/events`)
        console.log(res)
      } catch (error) {
        
      }
    }
    getEvent()
  },[])
  return (
    <div className='homepage-container'>
      <h2 className='hero-section'>The very best <span className='brand-text'> events</span></h2>
      <div className='homepage-div'>
        <div className='homepage-event'>

          <div className='homepage-image-container'>
              <img src={imageBack} />
          </div>

          <div className='hompage-event-detail'>
            <div className='homepage-event-host-price'>
            <span className='homepage-event-host'>department of natural and a pplied scince </span><span className='homepage-event-price'>2500</span>
          </div>
              <h4 className='homepage-event-title'>War against drugs</h4>
          </div>

            <p className='homepage-event-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam</p>
              <div className='homepage-event-date-time'><span className='date'>April  25th</span> <span className='time'>23:00</span></div>

            </div>
            <div className='homepage-event'>

<div className='homepage-image-container'>
    <img src={imageBack} />
</div>

<div className='hompage-event-detail'>
  <div className='homepage-event-host-price'>
  <span className='homepage-event-host'>department of natural and a pplied scince </span><span className='homepage-event-price'>2500</span>
</div>
    <h4 className='homepage-event-title'>War against drugs</h4>
</div>

  <p className='homepage-event-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam</p>
    <div className='homepage-event-date-time'><span className='date'>April  25th</span> <span className='time'>23:00</span></div>

  </div>

  <div className='homepage-event'>

<div className='homepage-image-container'>
    <img src={imageBack} />
</div>

<div className='hompage-event-detail '>
  <div className='homepage-event-host-price'>
  <span className='homepage-event-host'>department of natural and a pplied scince </span><span className='homepage-event-price'>2500</span>
</div>
    <h4 className='homepage-event-title'>War against drugs</h4>
</div>

  <p className='homepage-event-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam</p>
    <div className='homepage-event-date-time'><span className='date'>April  25th</span> <span className='time'>23:00</span></div>

  </div>
  <div className='homepage-event csc'>

<div className='homepage-image-container'>
    <img src={imageBack} />
</div>

<div className='hompage-event-detail'>
  <div className='homepage-event-host-price'>
  <span className='homepage-event-host'>department of natural and a pplied scince </span><span className='homepage-event-price'>2500</span>
</div>
    <h4 className='homepage-event-title'>War against drugs</h4>
</div>

  <p className='homepage-event-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam</p>
    <div className='homepage-event-date-time'><span className='date'>April  25th</span> <span className='time'>23:00</span></div>

  </div>    

      </div>
      <PrimaryButton style={{marginTop:'50px', width:'320px', marginBottom: '40px'}} >
      Load More
      </PrimaryButton>
    </div>
  )
}

export default HomePage
