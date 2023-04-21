import React from 'react'
import { FaDownload } from 'react-icons/fa'
import './ReceiptPage.css'
import detailImage from '../assets/detail-image.png'

function ReceiptPage() {
  return (
    <div className='receiptpage-container'>  
       <div className='receiptpage-img-container'>
    <img src={detailImage}/>
</div>
<div className='receiptpage-detail-container'>
    <div className='receiptpage-location-detail'>
        <div className='receiptpage-location'>
            <span>Location</span>
            <p>Auditorium, Veritas University</p>
        </div>
        <FaDownload className='icon'/>
    </div>
    <div className='receiptpage-name-detail'>
        <div className='receiptpage-name'>
        <span>Name</span>
        <p>Akintade Oluwaseun Timothy</p>
        </div>
        <div className='receiptpage-date'>
        <span>Date</span>
        <p>15 April, 2025</p>
        </div>
    </div>
    {/* <div> */}
        <div className='receiptpage-time-detail'>
            <div className='receiptpage-time'>
                <span>Time</span>
                <p>19 : 00 PM</p>
            </div>
            <div className='receiptpage-paid'>
                <span>Amount Paid</span>
                <p>N 2500</p>
            </div>
        </div>
    {/* </div> */}
</div>
<div className='receiptpage-ticket'>
    <p>Ticket ID </p>
    <p>T4648849944</p>
</div>
</div>
  )
}

export default ReceiptPage