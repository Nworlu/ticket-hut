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

function EventDetailPage() {
  return (
    <div className="eventdetail-container">
      <div className="eventdetail-div">
        <div className="eventdetail-div-detail">
          <div className="eventdetail-div-detail-time">
          <p>25th - April 2023</p>
          <h2>Computer Science</h2>
          <p className="desc">
            Unleashing an Unusual Energy of Spiritual Vibrations. SOUNDGASM
            RELOADED is where you get high on life to be Freaky and Naughty
            [Cloud9 + Energy unmatched]
          </p>
          </div>
          <div className="eventdetail-img-container">
            <img src={detailImage} />
          </div>
        </div>
        <div className="eventdetail-buy-ticket-div">
          <div className="eventdetail-buy-ticket">
            <div className="eventdetail-buy">
              <div className="eventdetail-buy-price">
                <p>General Admission</p>
                <div className="eventdetail-buy-quan">
                  <FaPlus className="icons" />
                  <div className="quan">1</div>
                  <FaMinus className="icons" />
                </div>
              </div>
              <div className="eventdetail-info">
                <p>N 5,000</p>
                <FaInfo className="icons" />
              </div>
            </div>
            <PrimaryButton
              style={{ marginTop: "20px", width: "100%" }}
              otherStyle={{ borderRadius: "10px" }}
            >
              Buy Tickets
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="eventdetail-shortmessage">
        <div className="eventdetail-about-detail">
          <div className="event-venue">
            <p>Venue</p>
            <p>M P H</p>
          </div>
          <div className="event-date">
            <p>Date & Time</p>
            <p>12th June - 16:00 pm </p>
          </div>
        </div>
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
  );
}

export default EventDetailPage;
