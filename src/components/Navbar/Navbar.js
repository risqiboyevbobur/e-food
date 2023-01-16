import React from "react";
import "./Navbar.css";

const icon = require("../img/EFood.png");
const search = require("../img/Search.png");
const cart = require("../img/cart.png");

export default function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-9">
            <img src={icon} className='efood' alt="" />
          </div>
          <div className="col-11">
            <ul className="list">
              <li className="list_item active">Home</li>
              <li className="list_item">Service</li>
              <li className="list_item">Top Sites</li>
              <li className="list_item">Contact</li>
              <div className="box">
                <img src={search} alt="" className="list_search" />
                <img src={cart} alt="" className="list_cart" />
              </div>
              <button className="btn_primary">Sign Up</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
