import React from 'react'
import Slider from "react-slick";
import './nav.css'

const Nav = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500
  };

  return (
    
    <div className="carousel-1">
      <Slider {...settings}>
      <div className="box">
        <h3>1</h3>
      </div>
      <div className="box">
        <h3>2</h3>
      </div>
      <div className="box">
        <h3>3</h3>
      </div>
      <div className="box">
        <h3>4</h3>
      </div>
      <div className="box">
        <h3>5</h3>
      </div>
      <div className="box">
        <h3>6</h3>
      </div>
      </Slider>
    </div>
  )
}

export default Nav