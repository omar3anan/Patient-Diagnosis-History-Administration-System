import React from "react";
import "./../index.css"; // Import component-specific CSS

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Tech.Care</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" >
              <i className="fas fa-home"></i> Overview
            </a>
          </li>
          <li>
            <a href="#" className="active">
              <i className="fas fa-user-injured"></i> Patients
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-calendar-alt"></i> Schedule
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-envelope"></i> Message
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-money-bill-wave"></i> Transactions
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">Dr. Jose Simmons</span>
            <span className="user-role">General Practitioner</span>
          </div>
          <div className="user-avatar">
            <img src="https://fedskillstest.ct.digital/2.png" alt="Dr. Jose Simmons" />
          </div>
          <div className="settings-icon">
            <i className="fas fa-cog"></i>
          </div>
          <div className="three-dots" id="three-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="menu-toggle" id="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;