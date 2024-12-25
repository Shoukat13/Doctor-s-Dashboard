import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo"><img src="/icons/TestLogo.jpg" alt="Logo"/></div>
      <div className="navbar__menu">
        <span className="menu__item"><img src="/icons/homeLogo.jpg" className="menu__icon" alt="home"/>  Overview</span>
        <div className="menu__item menu__item--active"><img src="/icons/patientIcon.jpg" className="menu__icon" alt="Patient"/>Patients</div>
        <span className="menu__item"><img src="/icons/schedule.jpg" className="menu__icon" alt="Schedule"/>Schedule</span>
        <span className="menu__item"><img src="/icons/message.jpg" className="menu__icon" alt="Message"/>Messages</span>
        <span className="menu__item"><img src="/icons/transaction.jpg" className="menu__icon" alt="Credit"/>Transactions</span>
      </div>
      <div className="navbar__doctor-info">
        <img src="/icons/doctor.jpg" alt="Doctor" className="doctor-info__avatar" />
        <div className="doctor-item__details">
        <h4 className="doctor-info__name">Dr. John Doe</h4>
        <p className="doctor-item__info">General Practitioner</p>
        </div>
        <img className ="nav-settings" src = "/icons/settings.jpg" alt = "Settings"/>
        <img className ="nav-settings" src = " /icons/vert_dots.jpg" alt = "more options"/>
      </div>
    </div>
  );
}

export default Navbar;
