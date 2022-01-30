import React from "react";
import "./css/Navbar.css";
import logo from "../Images/Jadoo.png";

function Navbar() {
  return (
    <div>
      <div className="navbars">
        <div className="container navbars1">
          <div className="row">
            <div className="col-lg-3 logo">
              <div className="yellowbox">
                <img className="imglogo" src={logo} />
                <span id="logoc"></span>
                <span id="logoc1"></span>
              </div>
            </div>
            <div className="col-lg-9 links">
              <ul>
                <li>Destinations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Bookings</li>
                <li>Login</li>
                <li>
                  <button className="Signup">Sign up</button>
                </li>
                <li>
                  <button className="Dropd">
                    {" "}
                    EN <i class="fa fa-chevron-down"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
