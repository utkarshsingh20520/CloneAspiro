import React from "react";
import rect3 from "../../Images/rect3.png";
import rect4 from "../../Images/rect4.png";
import Plane from "../../Images/plane.png";
import './service.css'
function Service2() {
  return (
    <div className="outerbox2">
      <img className="rect31" src={rect3} alt="rect" />
      <div className="outerblock1">
        <div className="block2">
          <img className="rect11" src={rect4} alt="satellite"></img>
          <img className="mainimg" src={Plane} alt="satellite"></img>
        </div>
        <div className="Blockhead">
          <p>Best Flights</p>
        </div>
        <div className="Blockp">
          <p>Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
      </div>
    </div>
  );
}

export default Service2;
