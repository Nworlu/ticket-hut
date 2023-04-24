import React from "react";
import "./EventDetailPage.css";
import detailImage from "../assets/detail-image.png";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInfo,
  FaInstagram,
  FaMailBulk,
  FaMailchimp,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import PrimaryButton from "../components/PrimaryButton";
import "./counter";
function EventDetailPage() {
  return (
    <div>
    <div className="eventdetail-container">
      <div className="eventdetail-div one">
        <div className="eventdetail-img-container">
              <img src={detailImage} />
            </div>
        <div className="eventdetail-div-detail">
          <div className="eventdetail-div-detail-time">
          <h2 className="event-title">Computer Science</h2>
          <p className="desc">
            Unleashing an Unusual Energy of Spiritual Vibrations. SOUNDGASM
            RELOADED is where you get high on life to be Freaky and Naughty
            [Cloud9 + Energy unmatched]
          </p>
          <div className="event-date">

            <p><span><span className="helper">date</span><br></br>12th June </span><span><span className="helper">venue</span><br></br>mph</span> <span><span className="helper">time</span><br></br>16:00 pm </span></p>
          </div>
          </div>

        </div>
      </div>
      <div className="eventdetail-div two">
        <div className="eventdetail-buy-ticket-div">
          <div className="eventdetail-buy-ticket">
            <div className="eventdetail-buy">
              <div className="eventdetail-buy-price">
                <p>General Admission</p>
                <div className="eventdetail-buy-quan">
                  <FaPlus className="icons add" />
                  <div className="quan counter">1</div>
                  <FaMinus className="icons subtract" />
                </div>
              </div>
              <div className="eventdetail-info ">
                <p>N <span className="price">5000</span></p>
                <FaInfo className="icons" />
              </div>
              <div className="eventdetail-info total-div">
                <p><span>total:</span><span className="total"></span></p>
              </div>
            </div>
            <PrimaryButton
              style={{ marginTop: "20px", width: "100%" }}
              otherStyle={{ borderRadius: "0px" }}
            >
              Buy Tickets
            </PrimaryButton>
          </div>
        </div>
      </div>
      
    </div>
    <div className="eventdetail-container bg-white">
          <div className="eventdetail-shortmessage">
          <div className="eventdetail-tags">
            <h5>Tags</h5>
            <div className="eventdetail-tags-badge">
              <p>Regal</p>
              <p>MET Themed</p>
              <p>MET Themed</p>
            </div>
          </div>
          <div className="eventdetail-social">
            <h5>Share With Friends</h5>
            <div className="eventdetail-social-icons">
              <FaFacebook className="icons" />
              <FaFacebookMessenger className="icons" />
              <FaMailchimp className="icons" />
              <FaInstagram className="icons" />
            </div>
          </div>
          <div className="eventdetail-about-organisers">
            <h5>About The Organisers</h5>
            <div className="eventdetail-about-organisers-container">
              <div className="organized-container">
              <p className="organized">Organized by</p>
              <p>Veritas SRA</p>
              <p className="contact" >Contact</p>
              </div>
              <div className="eventdetail-about-organisers-desc">
                <p>
                  Unleashing an Unusual Energy of Spiritual Vibrations. SOUNDGASM
                  RELOADED is where you get high on life to be Freaky and Naughty
                  [Cloud9 + Energy unmatched]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
