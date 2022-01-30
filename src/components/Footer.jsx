import React from "react";
import "./css/Footer.css";
import logo from "../Images/ogo2.png"
import insta from "../Images/insta.png"
import facebook from "../Images/facebook.png"
import Play from "../Images/Play.png"
import Store from "../Images/Store.png"

function Footer() {
  return (
    <div className="Footer">
      <div className=" footermain">
        <div className="foot1">
            <img src={logo}></img>
            <p>Book your trip in minute, get full Control for much longer. </p>
        </div>
        <div className="foot2">
          <h1>Company</h1>

          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className="foot2">
          <h1>Contact</h1>

          <ul>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>
        <div className="foot2">
          <h1>More</h1>

          <ul>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low Fare Tips</li>
          </ul>
        </div>
        <div className="foot5">
            <div className="Sociofooter">
                <img src={insta} alt="insta"/>
                <img src={facebook} alt="facebook"/>
            </div>

            <p>Discover our app</p>
             
            <div className="Footlast">
                <img src={Play} alt="play"/>
                <img src={Store} alt="Store"/>
            </div> 

        </div>
      </div>
      <p className="Footpla">All rights reserved@jadoo.co</p>
    </div>
  );
}

export default Footer;
