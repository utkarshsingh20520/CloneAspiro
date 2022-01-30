import React from 'react'
import './Booksec1.css'
import trip1 from "../../Images/trip1.png";
import trip2 from "../../Images/trip2.png";
import trip3 from "../../Images/trip3.png";

function Booksec1() {
    return (
        <div className="Booksec1">
          <p>Easy and Fast</p>
          <p className="bookpsec">Book Your Next Trip In 3 Easy Steps</p>
          <div className="Bookcont">
            <div className="Book1">
              <div className="Book11">
                <img src={trip1} />
              </div>
              <div className="Book22">
                <p>Choose Destination</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>

            <div className="Book1">
              <div className="Book12">
                  <img src={trip2} />
              </div>
              <div className="Book22">
              <p>Make Payment</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>

            <div className="Book1">
              <div className="Book13">
                  <img src={trip3}/>
              </div>
              <div className="Book22">
              <p>Reach Airport on Selected Date</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>

    )
}

export default Booksec1
