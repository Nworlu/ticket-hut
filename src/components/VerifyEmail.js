import React from 'react'
import './VerifyEmail.css'
import versusPay from '../assets/Vector.png'
import PrimaryButton from './PrimaryButton'
import { FaLock } from 'react-icons/fa'

function VerifyEmail() {
  return (
    <div className='VerifyEmail-modal'>
        <div className='VerifyEmail-container'>
            <div className='VerifyEmail-div'>
                <img src={versusPay}/>
                <div className='VerifyEmail-div-ticket'>
                    <p className='name-ticket'>TicketHut</p>
                    <div className='VerifyEmail-div-pay'>
                    <p style={{color: 'black'}}>Pay </p>
                    <p className='price-ticket'>NGN 8000.00</p>
                    </div>
                </div>
            </div>
            <h2>Connect your VersusPay Account</h2>
            <form>
                <div className='card-number'>
                    <input placeholder='Email' />
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

export default VerifyEmail