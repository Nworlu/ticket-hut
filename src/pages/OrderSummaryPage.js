import React, { useState } from "react";
import PaymentModal from "../components/PaymentModal";
import PrimaryButton from "../components/PrimaryButton";
import "./OrderSummaryPage.css";

function OrderSummaryPage() {
    const [openModal, setModal] = useState(false)

    function modalHandler(){
        setModal(!openModal)
    }
  return (
    <div className="ordersummary-container">
      <h2>Order Summary</h2>
      <div className="ordersummary-div">
        <div className="ordersummary-model">
          <div className="ordersummary-number">
            <p>
              <span>1x</span> General Admission
            </p>
            <p>N 5001</p>
          </div>
          <div className="ordersummary-price">
            <p>Total</p>
            <p>N 5001</p>
          </div>
        </div>
        <PrimaryButton onClick={modalHandler} style={{ width: "100%" }} otherStyle={{borderRadius: '10px'}} >Buy Tickets</PrimaryButton>
      </div>
      {openModal && <PaymentModal onOpen={openModal} setModal={setModal} />}
    </div>
  );
}

export default OrderSummaryPage;
