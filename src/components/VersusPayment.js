import React from 'react'
import './VersusPayment.css'
import versusPay from '../assets/Vector.png'
import PrimaryButton from './PrimaryButton'
import { FaLock } from 'react-icons/fa'

function VersusPayment() {
  return (
    <div className='versuspayment-modal'>
        <div className='versuspayment-container'>
            <div className='versuspayment-div'>
                <img src={versusPay}/>
                <div className='versuspayment-div-ticket'>
                    <p className='name-ticket'>TicketHut</p>
                    <div className='versuspayment-div-pay'>
                    <p style={{color: 'black'}}>Pay </p>
                    <p className='price-ticket'>NGN 8000.00</p>
                    </div>
                </div>
            </div>
            <h2>You are about to be charged N8000</h2>
            <form>
                <PrimaryButton type={'button'} style={{width: '100%', marginTop:'30px'}} otherStyle={{height:'35px', padding:'0px', borderRadius:'10px', backgroundColor:"#8364F6"}}>
                    Pay NGN 8000.00
                </PrimaryButton>
            </form>
            <div className='secured-by'>
                <div className='versus-pay'>
                    <FaLock className='icon'/>
                    <p>Secured by</p>
                </div>
                <p className='by'>VERSUS PAY</p>
            </div>
        </div>
    </div>
  )
}

export default VersusPayment