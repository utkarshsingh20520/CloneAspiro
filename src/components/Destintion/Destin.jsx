import React from "react";
import './Destin.css'

function Destin(props) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 Dest">
      <div className="destcontent">
        <div className="Destimage">
          <img src={props.image} alt="img"/>
        </div>
        <div className="desttext">
          <div className="desttext1">
            <p>{props.desti}</p>
            <p>{props.cost}</p>
          </div>
          <div className="desttext2">
            <p>
              <i class="fa fa-location-arrow"></i>{" "}
            </p>
            <p>{props.days} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destin;
