import React from "react";
import "./css/Destinations.css";
import rome from "../Images/rome.png"
import london from "../Images/london.jpg"
import europe from "../Images/europe.png"
import Destin from  "./Destintion/Destin"
import decore from "../Images/destideco.png"
function Destination() {
  return (
    <div className="Destination">
      <p>Top Selling</p>
      <h2>Top Destinations</h2>
       <img className="Destideco" src={decore} alt="Destination" />
      <div className="Destincont">
        <div className="row">
          <Destin image={rome} desti={"Rome, Italy"} cost={"5.42k"} days={"10 Days Trip"}/> 
          <Destin image={london} desti={"London, UK"} cost={"4.2k"} days={"12 Days Trip"}/> 
          <Destin image={europe} desti={"Full Europe"} cost={"15k"} days={"28 Days Trip"}/> 
        </div>
      </div>
    </div>
  );
}

export default Destination;
