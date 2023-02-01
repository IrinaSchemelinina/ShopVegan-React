import React from "react"
import Slider from "react-slick"
import { NavLink } from "react-router-dom"

import slide1Image from "../images/banner.jpg"
import slide2Image from "../images/banner_popkorn.jpg"
import slide3Image from "../images/bionic.png"
import slide4Image from "../images/banner_bombar.png"
import slide5Image from "../images/fitforce.png"

export default function MainSlider() {
  const settings = {
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false
  }

  return (
    <main className="main">
      <div className="container">
        <div className="slider">
          <Slider {...settings}>
            <div className="slider_item">
              <a href="/">
                <img src={slide1Image} alt="banner" />
              </a>
            </div>
            <div className="slider_item">
              <NavLink to="/sweets">
                <img src={slide2Image} alt="banner" />
              </NavLink>
            </div>
            <div className="slider_item">
              <NavLink to="/sweets">
                <img src={slide3Image} alt="banner" />
              </NavLink>
            </div>
            <div className="slider_item">
              <NavLink to="/sweets">
                <img src={slide4Image} alt="banner" />
              </NavLink>
            </div>
            <div className="slider_item">
              <NavLink to="/sweets">
                <img src={slide5Image} alt="banner" />
              </NavLink>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  )
}
