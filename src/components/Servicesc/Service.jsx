import React from "react";
import './service.css';

function Service(props) {
  return (
    <div className="outerblock">
      <div className="block1">
        <img className="rect1" src={props.img1} alt="satellite"></img>
        <img className="mainimg" src={props.img2} alt="satellite"></img>
      </div>
      <div className="Blockhead">
        <p>{props.text1}</p>
      </div>
      <div className="Blockp">
        <p>{props.text2}</p>
      </div>
    </div>
  );
}

export default Service;
