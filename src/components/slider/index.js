import React from "react";
import Slider from "react-slick";
import ImageGroup from '../../assets/img/image.jpg';
import './Slider.scss';
import Image from 'react-bootstrap/Image';

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [ {
         breakpoint: 1480,
          settings: {
              slidesToShow: 3,
              // slidesToScroll: 1,
            
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow:1,
              
          }
      }

]
  };
  return (
    <Slider {...settings} >
      <div className="slider_img ">
        <Image src={ImageGroup} alt='image'  className="rounded-4"/>
        <button className="btn-slider mt-3">Lorem Ipsum 1</button>
      </div>
      <div className="slider_img">
      <Image src={ImageGroup} alt='image'  className="rounded-4"/>
      <button className="btn-slider mt-3">Lorem Ipsum 2</button>
      </div>
      <div className="slider_img">
      <Image src={ImageGroup} alt='image'  className="rounded-4"/>
      <button className="btn-slider mt-3">Lorem Ipsum 3</button>
      </div>
      <div className="slider_img">
      <Image src={ImageGroup} alt='image'  className="rounded-4"/>
      <button className="btn-slider mt-3">Lorem Ipsum 4</button>
      </div>
      <div className="slider_img">
      <Image src={ImageGroup} alt='image'  className="rounded-4"/>
      <button className="btn-slider mt-3">Lorem Ipsum 5</button>
      </div>
      <div className="slider_img">
      <Image src={ImageGroup} alt='image'  className="rounded-4"/>
      <button className="btn-slider mt-3">Lorem Ipsum 6</button>
      </div>
    </Slider>
  );
}