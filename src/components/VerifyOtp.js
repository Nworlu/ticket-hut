import React from 'react'
import './VerifyOtp.css'
import versusPay from '../assets/Vector.png'
import PrimaryButton from './PrimaryButton'
import { FaLock } from 'react-icons/fa'

function VerifyOtp() {
  return (
    <div className='VerifyOtp-modal'>
        <div className='VerifyOtp-container'>
            <div className='VerifyOtp-div'>
                <img src={versusPay}/>
                <div className='VerifyOtp-div-ticket'>
                    <p className='name-ticket'>TicketHut</p>
                    <div className='VerifyOtp-div-pay'>
                    <p style={{color: 'black'}}>Pay </p>
                    <p className='price-ticket'>NGN 8000.00</p>
                    </div>
                </div>
            </div>
            <h2>Verify OTP</h2>
            <form>
                <div className='card-number'>
                    <input type={'text'} maxLength={1} />
                    <input type={'text'} maxLength={1} />
                    <input type={'text'} maxLength={1} />
                    <input type={'text'} maxLength={1} />
                </div>
                <PrimaryButton type={'button'} style={{width: '100%', marginTop:'10px'}} otherStyle={{height:'35px', padding:'0px', borderRadius:'10px', backgroundColor: '#8364F6'}}>
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

export default VerifyOtp