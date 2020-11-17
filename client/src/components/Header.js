import React,{useState, useEffect } from "react";
import '../App.css';
import imac from '../images/imac.svg'
import anonymous from '../images/ano.png'
import chatAppSS from '../images/chat-app-ss.png'
import Features from './Features';
// import { Link, Route } from 'react-router-dom';
// import logo from '/public/logo192.png';
/*
<Link to="/">
                        <img src="/public/logo192.png" alt="AnoChat" />
                        </Link>
                        <Route path="/">Hero</Route>
*/

const Hero = () => {
    const [scrolled, setScrolled] = useState("navbar nav-center");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          setScrolled("navbar nav-center nav-styling" );
      } else {
          setScrolled("navbar nav-center ");
          // console.log(scrolled)
      }
    }
    useEffect( _ => {
        console.log(scrolled)
    })
    // {scrolled}

    return (
      <React.Fragment>
        <div className={scrolled}>AnoChat</div>
        <header className="header">
          <div className="banner-position">
            <div className="banner-title">
              <h1>Talk Anonymous</h1>
              <h1>With Anyone</h1>
              <h1>Anytime</h1>
              <p>
                  A space where you can meet people,talk your heart out,
                  without any commitments or revealing yourself.
              </p>
              <button className="chat-button">Chat Now</button>
            </div>
            <img src={anonymous}
              alt="anonymous"
              className="banner-anonymous-img"/>
            <div id="banner-image-div">
              <img 
                src={chatAppSS}
                alt="chatAppSS"
                className="banner-chatApp-img"
              />
              <img
                  src={imac}
                  alt="imac"
                  className="banner-mac-img"
              />
            </div>
          </div>
          <Features />
          <div>
            <button className="chat-button bottom-chat-button">Chat Now</button>
          </div>
        </header>
      </React.Fragment >
    )
};

export default Hero;
