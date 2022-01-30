import React from "react";
import "./css/Booktrip.css";
import Btrip from "./Trip/Btrip"
import Booksec1 from "./Trip/Booksec1"

function booktrip() {
  return (
    <div className="Booktrip">
      <div className="Booksec">
        <Booksec1/>
        <Btrip />
      </div>
    </div>
  );
}

export default booktrip;
