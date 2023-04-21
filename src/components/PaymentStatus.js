import React from 'react'
import './PaymentStatus.css'
import success from '../assets/success1.png'
import PrimaryButton from './PrimaryButton'
import { FaCheckCircle, FaLock } from 'react-icons/fa'

function PaymentStatus() {
  return (
    <div className='PaymentStatus-modal'>
        <div className='PaymentStatus-container'>
            <div>
                {/* <FaCheckCircle/> */}
                <img src={success}/>
            </div>
            <h2>Payment Successful</h2>
        </div>
    </div>
  )
}

export default PaymentStatus