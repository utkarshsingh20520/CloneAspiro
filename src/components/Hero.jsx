import React from "react";
import "./css/Hero.css";
import Navbar from "./Navbar";
import traveller from "../Images/traveller.png";
import Decore from "../Images/Decore.png";
import Plane from "../Images/plane.png";
import vector from "../Images/Vector.png";

function hero() {
  return (
    
      <div className="herocont">
        <Navbar />
        {/* <svg className="svghero" viewBox="-200 100 2000 1000">
                 <path fill="red" d=" M 150 100 C 100 150 50 250 200 350 C 250 400 500 200 500 500 C 550 700 650 700 800 700 L 800 100 L 800 100 L 350 100 L 150 100 ">
                 </path>
             </svg> */}
        
        <div className="eclipse">            
            </div> 

        <div className="circlehero">
            <img src={Decore}></img>
            </div> 
          <img className="vector" src={vector}></img>
         <img className="planehero" src={Plane}></img> 
         <img className="planehero1" src={Plane}></img>         

        <div className="container herocont1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 herotxt">
              <p> BEST DESTINATIONS AROUND THE WORLD</p>
              <h1> Travel, enjoy and live a new and full life</h1>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="herobut">
                  <button className="findout">
                      Find out more
                  </button>
                  <div className="Playdemo">
                     <i class="fa fa-play playbut"></i>
                     <p>Play demo</p>
                  </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-0 imgtrav">
              <img src={traveller}></img>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default hero;
