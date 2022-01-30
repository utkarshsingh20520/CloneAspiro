import React from "react";
import "./Btrip.css";
import Greece from "../../Images/Greece.jpg";
import map from "../../Images/map.png";
import leaf from "../../Images/leaf.png";
import send from "../../Images/send.png";
import heart from "../../Images/heart.png";
import build from "../../Images/build.png";
import Rome from "../../Images/rome2.png";
import bar1 from "../../Images/bar1.png";
import bar2 from "../../Images/bar2.png";

function Btrip() {
  return (
    <div className="Booksec2">
      <div className="greece">
        <div className="greeceimg">
          <img src={Greece} />
        </div>
        <div className="grrecetxt">
          <p>Trip to Greece</p>
          <p>14-29 June | By Robbin Johnson</p>
          {/*  */}
          <div className="Greeceicon">
            <img src={leaf} alt="trip" />

            <img src={map} alt="trip" />

            <img src={send} alt="trip" />
          </div>
          <div className="Greecelast">
            <div className="Greecelast1">
              <img src={build}></img>
              <p>24 People Going</p>
            </div>
            <div className="Greecelast2">
              <img className="tripheart" src={heart} alt="trip" />
            </div>
          </div>
        </div>
      </div>

      <div className="greece1">
        <div className="rome1">
          <img src={Rome} alt="trip" />
        </div>
        <div className="rome2">
          <p>Ongoing</p>
          <p> Trip to Rome</p>
          <p className="rop">
            <span className="frty">40%</span>completed
          </p>
          <div className="barimg">
            <img className="barome" src={bar2} alt="bar" />
            <img className="barome1" src={bar1} alt="bar" />
          </div>
        </div>
      </div>

      <div className="Circlebook"></div>
    </div>
  );
}

export default Btrip;
