import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PaymentScreen from '../pages/PaymentScreen'

function PaymentComponent() {
  return (
    <div>
        <Routes>
            <Route path='/versus-pay' index element={<PaymentScreen/>} />
        </Routes>
    </div>
  )
}

export default PaymentComponent