import React, { useRef, useState } from 'react'
import logo1 from '../assets/Vector.png'
import logo2 from '../assets/paystack.png'
import { FaCreditCard } from 'react-icons/fa'
import './PaymentModal.css'
import PrimaryButton from './PrimaryButton'
import { VscClose } from 'react-icons/vsc'
import { PaystackButton } from 'react-paystack'
// pk_test_e4d7d1e2ca71e9885dc1ab00387e876bb2ddc7fe
const options =[
    {label: "VersusPay", value:"versuspay", image: logo1},
    {label: "PayStack", value:"paystack", image: logo2}
]
function PaymentModal({onOpen,setModal}) {
    const [selectedOption, setSelectedOption] = useState(null)
    const [optionValue, setOptionValue] = useState('')
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setOptionValue(event.target.value)
      };
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
                {options.map((option) => (
                <div className='radioHolder' key={option.value}>
                    <div>
                <img src={option.image} width='20' height='20' alt={option.label.toUpperCase()} />
                <label htmlFor={option.value} >
                {option.label.toUpperCase()}
                </label>
                    </div>
                <input
                id={option.value}
                type="radio"
                name="options"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleChange}
                />
                {/* <FaCreditCard className='icon' /> */}
                </div>
                ))}
                {/* <div className='radioHolder'>
                    <input id='versus' value={''} type={'radio'} />
                    <label htmlFor='versus'>VersusPay</label>
                    <FaCreditCard className='icon' />
                </div>
                <div className='radioHolder'>
                    <input type={'radio'} id="credit" />
                    <label htmlFor='credit'>PayStack</label>
                    <FaCreditCard className='icon' />
                </div> */}

                <div className='checkboxHolder'>
                    <input type={'checkbox'} />
                    <label>I agree to the Terms of Service</label>
                </div>
                 <PrimaryButton disabled={optionValue? false: false} type={'submit'} otherStyle={{height: '35px', padding:0, fontStyle: '17px', fontWeight: 'bold', borderRadius:'10px'}} style={{width: '100%'}} >
                 Buy Tickets
                 </PrimaryButton>
       
                </form>
            </div>
        </div>
    </div>
  )
}

export default PaymentModal