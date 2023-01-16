import React from "react";
import "./Header.css";
const person = require("../img/Scooter Guy.png");
const burger = require("../img/Burger.png");
const pizza = require("../img/Pizza.png");
const sandvich = require("../img/sandwich.png");
const asian = require("../img/Asian food.png");
const sand = require("../img/sandwich (1).png");
const burg = require("../img/item_01-480x480 1.png");
const star = require("../img/Star.png");
const burger1 = require("../img/Burger (1).png");
const item = require("../img/item_01-480x480 1 (1).png");
const item1 = require("../img/item_01-480x480 1 (2).png");
const man = require("../img/food delivery 4.png");
const chese = require("../img/Rectangle 53.png");
const cart = require("../img/Group 178.png");
const apple = require("../img/Store=App Store, Style=Black.png");
const play = require("../img/Store=Google Play, Style=Black.png");
const jole = require("../img/Rectangle 8.png");
export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <h1 className="food">
              super fast{" "}
              <span className="delivery">
                Food <br /> delivery
              </span>{" "}
              service
            </h1>
            <br />
            <p className="text_info">
              We provide super fast-delivery service. Let’s use our <br />{" "}
              services right now and get discounts of up to 50%
            </p>
            <br />
            <div className="boxes">
              <button className="explore">Explore Food</button>
              <a href="#!">Download App</a>
            </div>
          </div>
          <div className="col-6">
            <img src={person} alt="" className="person" />
          </div>
          <h1 className="our">
            Our popular <span>Category</span>{" "}
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <img src={burger} alt="" className="burger" />
          </div>
          <div className="col-3">
            <img src={pizza} alt="" className="pizza" />
          </div>
          <div className="col-3">
            <img src={sandvich} alt="" className="sandvich" />
          </div>
          <div className="col-3">
            <img src={asian} alt="" className="asian" />
          </div>
          <div className="col-3">
            <img src={asian} alt="" className="asian" />
          </div>
          <div className="col-3">
            <img src={sand} alt="" className="sand" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img src={burg} className="card-img-top a" alt="..." />
              <img src={star} className="card-img-top b" alt="..." />
              <div className="card-body">
                <h5 className="card-title v">Cheeseburger With Salad</h5>
                <p className="card-text v">$18.00</p>
                <a href="#!" className="btn btn-primary add">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={burger1} className="card-img-top a" alt="..." />
              <img src={star} className="card-img-top b" alt="..." />
              <div className="card-body">
                <h5 className="card-title v">Royel Cheeseburger</h5>
                <p className="card-text v">$16.00</p>
                <a href="#!" className="btn btn-primary add">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={item} className="card-img-top a" alt="..." />
              <img src={star} className="card-img-top b" alt="..." />
              <div className="card-body">
                <h5 className="card-title v">Beef Burger</h5>
                <p className="card-text v">$15.00</p>
                <a href="#!" className="btn btn-primary add">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={item1} className="card-img-top a" alt="..." />
              <img src={star} className="card-img-top b" alt="..." />
              <div className="card-body">
                <h5 className="card-title v">Black Gambugrer </h5>
                <p className="card-text v">$14.00</p>
                <a href="#!" className="btn btn-primary add">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src={man} alt="" className="man" />
          </div>
          <div className="col-6">
           <div className="add1">
           <h1 className="stay">
              <span>Stay</span> at home, We will Provide <span>Good food</span>
            </h1>
            <br />
            <p className="home">
              We provide tasty food and superfast delivery at <br /> your home.
              Let’s use our services right now and <br /> get discounts of up to
              50%.
            </p>

            <h1 className="fast">fasted delivery in 30 Minutes</h1>
            <br />
            <h1 className="fast">300+ delivery men</h1>
            <br />
            <h1 className="fast">500+ restaurant & cafe shop</h1> 
            <button className="shop">See more</button>
           </div>
          </div>
        </div>
      </div>

      <h1 className="one">Top Food <span>Restaurant </span></h1>


      <div className="container">
        <div className="row">
          <div className="col-4">
              <img src={chese} alt="" />
              <h3 className="blaze">Blaze Pizza</h3>
          <div className="live">
          <p className="time">11.00 AM - 10.00 PM</p>
          <button className="next">next  </button>
          </div>
          </div>
          <div className="col-4">
              <img src={chese} alt="" />
              <h3 className="blaze">Blaze Pizza</h3>
          <div className="live">
          <p className="time">11.00 AM - 10.00 PM</p>
          <button className="next">next  </button>
          </div>
          </div>
          <div className="col-4">
              <img src={chese} alt="" />
              <h3 className="blaze">Blaze Pizza</h3>
          <div className="live">
          <p className="time">11.00 AM - 10.00 PM</p>
          <button className="next">next  </button>
          </div>
          </div>
          <div className="col-4">
              <img src={chese} alt="" />
              <h3 className="blaze">Blaze Pizza</h3>
          <div className="live">
          <p className="time">11.00 AM - 10.00 PM</p>
          <button className="next">next  </button>
          </div>
          </div>
          <div className="col-4">
              <img src={chese} alt="" />
              <h3 className="blaze">Blaze Pizza</h3>
          <div className="live">
          <p className="time">11.00 AM - 10.00 PM</p>
          <button className="next">next  </button>
          </div>
          </div>
          <div className="col-4">
              <img src={chese} alt="" />
              <h3 className="blaze">Blaze Pizza</h3>
          <div className="live">
          <p className="time">11.00 AM - 10.00 PM</p>
          <button className="next">next  </button>
          </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1 className="mobile">Download  Our <span>Mobile App</span></h1>
            <br />
            <p className="nature">It's all at your fingertips -- the restaurants you love. Find <br /> the right food to suit your mood, and make the first bite <br /> last. Go ahead, download app and get 50% discount</p>
            <img className="apple" src={apple} alt="" />
            <img className="play" src={play} alt="" />
          </div>
          <div className="col-5">
     <img src={cart} alt="" className="cart" />
          </div>
        </div>
      </div>
      <h1 className="client">What Our Client Are <span>Saying</span> </h1>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src={jole} alt="" />
          </div>
          <div className="col-5">
    <p className="easy"> EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
    <br /><br /><br />
    <h3 className="and">Anglina Jole</h3>
    <br />
    <h3 className="and1">Food lover</h3>
    
          </div>
        </div>
      </div>
    </>
  );
}
