import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import PrimaryButton from "./PrimaryButton";
import { FaHamburger, FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import logo  from '../assets/full logo black.png'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  function handleMenu(){
    setToggle(!toggle)
    console.log(toggle)
  }
  return (
  
    <div className={toggle?"navbar-container":"navbar-container-active"}>
      <div className={toggle?"navbar-img-container":"navbar-img-container-ative"}>
        <img src={logo} className="navbar-logo"/>
      </div>
      {/* <FiMenu */}
      <FiMenu type="button" onClick={handleMenu} className={toggle?"menu-icon":"menu-icon-active"}/>
      <div className={toggle?"navbar-links":"navbar-links-active"}>
        {/* <div className="navbar-input"> */}
            <div className="navbar-product">
            <input  type={'text'} placeholder={'Search'} />
            <FaSearch className="icon"/>
            </div>
            <div className={"navbar-dropmenu"}>
            <select id="select-host"> 
                <option >Select Department</option>
                <option value={'csc'}>Computer Science</option>
                <option value={'his'}> History</option>
            </select>
            </div>
            <NavLink>
          <PrimaryButton>Create Event</PrimaryButton>
        </NavLink>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Navbar;
