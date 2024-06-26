import React, { useState, useEffect } from 'react';
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import guitar from "../Assets/freestocks-Fx5rrxSaUtI-unsplash.jpg";
import pomodoro from '../Assets/age-barros-rBPOfVqROzY-unsplash.jpg';
import vintageCar from '../Assets/bradley-dunn-qijkjkJm63c-unsplash.jpg';
import doggo from '../Assets/IMG_9939.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Set visible on mount
  }, []);
  return (
    <div className="hero1">
      <div className="navbar2">
        <a href="#">Home</a>
        <div className="dropdown-container">
          <a href="#" className="dropdown-trigger a1">
            Categories <FontAwesomeIcon icon={faCaretDown} />
          </a>
          <div class="dropdown-content">
            <a href="#">Lifestyle</a>
            <a href="#">Health</a>
            <a href="#">Family</a>
            <a href="#">Management</a>
            <a href="#">Travel</a>
            <a href="#">Work</a>
          </div>
        </div>
        <a href="#">Styles</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

    <div className={isVisible ? 'frontImages visible' : 'frontImages'}>
      <div className="frontImages1">
        <a href="#">
          <img src={guitar} alt="" />
        <div className='music'>
          <h3>MUSIC</h3>
        </div>
        <h1 >
        What Your Music Preference <br />Says About You and Your Personality.
        </h1>
        <div className="doggo1">
        <img src={doggo} alt="" />
        <h3>Vidip Singh @ February 30</h3>
        </div>
        </a>
      </div>
      <div className="frontImages2">
        <a href="#" className="image2">
          <img src={pomodoro} alt=""/>
          <div className='management'>
          <h3>MANAGEMENT</h3>
        </div>
        <h1 >
        The Pomodoro Technique<br />Really Works.
        </h1>
        <div className="doggo2">
        {/* <img src={doggo} alt="" /> */}
        <h3>Vidip Singh @ February 30</h3>
        </div>
          </a>
        <a href="#" className="image3">
          <img src={vintageCar} alt=""/>
          <div className='lifestyle'>
          <h3>LIFESTYLE</h3>
        </div>
        <h1 >
        Throwback To The Good Old Days.
        </h1>
        <div className="doggo2">
        {/* <img src={doggo} alt="" />   */}
        <h3>Vidip Singh @ February 30</h3>
        </div>
          </a>
      </div>
    </div>
      
    </div>
  );
};

export default Hero;
