import React, { useRef } from 'react'
import { FaCreditCard } from 'react-icons/fa'
import './PaymentModal.css'
import PrimaryButton from './PrimaryButton'
import { VscClose } from 'react-icons/vsc'

function PaymentModal({onOpen,setModal}) {
    const ref = useRef(null)
    function handleClose(){
       setModal(false)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('yes')
    }
  return (
    <div className='paymentmodal-container' >
        <div className='paymentmodal-div'>
        <VscClose className='close-icon' onClick={handleClose} />
            <div className='paymentmodal-div-service'>
                <form onSubmit={handleSubmit}>
                <div className='radioHolder'>
                    <input id='versus' type={'radio'} />
                    <label htmlFor='versus'>VersusPay</label>
                    <FaCreditCard className='icon' />
                </div>
                <div className='radioHolder'>
                    <input type={'radio'} id="credit" />
                    <label htmlFor='credit'>VersusPay</label>
                    <FaCreditCard className='icon' />
                </div>

                <div className='checkboxHolder'>
                    <input type={'checkbox'} />
                    <label>I agree to the Terms of Service</label>
                </div>
        <PrimaryButton type={'submit'} otherStyle={{height: '35px', padding:0, fontStyle: '17px', fontWeight: 'bold', borderRadius:'10px'}} style={{width: '100%'}} >
        Buy Tickets
        </PrimaryButton>
                </form>
            </div>
        </div>
    </div>
  )
}

export default PaymentModal