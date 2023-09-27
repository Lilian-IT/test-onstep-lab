import React from "react";
import Slider from "react-slick";

import "./SliderInfo.scss";

export default function CenterMode() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="container">
      <div className="content-slider d-flex align-items-center justify-content-center ">
        <div className="info-slider">
          <p className="price pe-3">$ 00</p>
          <h2 className="ps-3 mb-3">3 MONTH</h2>
          <p className="ps-3 title-text">Lorem Ipsum is simply dummy text</p>
        </div>
      </div>
      <div className="content-slider d-flex align-items-center justify-content-center ">
        <div className="info-slider">
          <p className="price pe-3">$ 00</p>
          <h2 className="ps-3 mb-3">1 MONTH</h2>
          <p className="ps-3 title-text">Lorem Ipsum is simply dummy text</p>
        </div>
      </div>
      <div className="content-slider d-flex align-items-center justify-content-center ">
        <div className="info-slider">
          <p className="price pe-3">$ 00</p>
          <h2 className="ps-3 mb-3">3 MONTH</h2>
          <p className="ps-3 title-text">Lorem Ipsum is simply dummy text</p>
        </div>
      </div>
      <div className="content-slider d-flex align-items-center justify-content-center ">
        <div className="info-slider">
          <p className="price pe-3">$ 00</p>
          <h2 className="ps-3 mb-3">1 MONTH</h2>
          <p className="ps-3 title-text">Lorem Ipsum is simply dummy text</p>
        </div>
      </div>
      <div className="content-slider d-flex align-items-center justify-content-center ">
        <div className="info-slider">
          <p className="price pe-3">$ 00</p>
          <h2 className="ps-3 mb-3">3 MONTH</h2>
          <p className="ps-3 title-text">Lorem Ipsum is simply dummy text</p>
        </div>
      </div>
    </Slider>
  );
}
