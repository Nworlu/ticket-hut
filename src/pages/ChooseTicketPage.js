import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import './ChooseTicketPage.css'

function ChooseTicketPage() {
    function handleFormSubmit(e){
        e.preventDefault()
        console.log(e)
    }
  return (
    <div className='chooseticket-container'>
        <div className='chooseticket-div'>
            <h2>Choose your Tickets</h2>
            <p>N 5000</p>
                <form className='form-order' onSubmit={handleFormSubmit}>
                    <div className='inputHolder'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type={'text'} id="firstName" />
                    </div>
                    <div className='inputHolder'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type={'text'} id="lastName" />
                    </div>
                    <div className='inputHolder'>
                        <label htmlFor='email'>Email</label>
                        <input type={'text'} id="email" />
                    </div>
                    <div className='inputHolder'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input type={'text'} id="phoneNumber" />
                    </div>
                    <PrimaryButton type={'submit'} style={{marginTop: '20px', width: '100%'}} otherStyle={{borderRadius: '5px'}}>
                    Order Summary
                    </PrimaryButton>
                </form>
        </div>
    </div>
  )
}

export default ChooseTicketPage