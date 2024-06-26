import React from "react";
import "./Cards.css";
import lamp from "../Assets/phil-desforges-KP7p0-DRGbg-unsplash.jpg";
import oatmeal from "../Assets/margarita-zueva-CY-OkOICA9o-unsplash.jpg";
import caffeine from "../Assets/namnso-ukpanah-BG-z6cD8WCg-unsplash.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  return (
    <>
    <div className="card">
      <div className="blogCards">
        <div className="post1">
          <a href="/">
            <img src={lamp} alt="" />
          </a>
          <h4 style={{color:'#858585', fontWeight:'bold'}}>December 17, 2069</h4>
          <a href=""><h2>Just a Standard Format Post.</h2></a>
          <h4 style={{color:'#656565', fontWeight:'400'}}>Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia </h4>
           <div className="niche">
              <a href="">Design</a>
              <a href="">Photography</a>
           </div>
        </div>
        <div className="post2">
          <a href="/">
            <img src={oatmeal} alt="" />
          </a>
          <h4 style={{color:'#858585', fontWeight:'bold'}}>December 17, 2069</h4>
          <a href=""><h2>Just a Standard Format Post.</h2></a>
          <h4 style={{color:'#656565', fontWeight:'400'}}>Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia </h4>
           <div className="niche">
              <a href="">Design</a>
              <a href="">Photography</a>
           </div>
        </div>
        <div className="post3">
          <a href="/">
            <img src={caffeine} alt="" />
          </a>
          <h4 style={{color:'#858585', fontWeight:'bold'}}>December 17, 2069</h4>
          <a href=""><h2>Just a Standard Format Post.</h2></a>
          <h4 style={{color:'#656565', fontWeight:'400'}}>Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia </h4>
           <div className="niche">
              <a href="">Design</a>
              <a href="">Photography</a>
           </div>
        </div>
      </div>

    </div>
      <div className="pageNumber">
        <ul>
          <li className="arrows"><FontAwesomeIcon icon={faArrowLeft} /></li>
          <li><a href="" style={{background:'black', color:'white', borderRadius:'10%'}}>1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
          <li><a href="">6</a></li>
          <li className="arrows"><FontAwesomeIcon icon={faArrowRight}/></li>
        </ul>
      </div>
    </>
  );
};

export default Cards;
