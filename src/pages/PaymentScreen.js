import React from 'react'
import './PaymentScreen.css'
import VersusPayment from '../components/VersusPayment'
import VerifyEmail from '../components/VerifyEmail'
import VerifyOtp from '../components/VerifyOtp'
import PaymentStatus from '../components/PaymentStatus'

function PaymentScreen() {
  return (
    <div className="paymentscreen-page">
        {/* <VersusPayment/> */}
        {/* <VerifyEmail/> */}
        {/* <VerifyOtp/> */}
        <PaymentStatus/>
    </div>
  )
}

export default PaymentScreen