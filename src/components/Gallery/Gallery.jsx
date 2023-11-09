import React from "react";
import SiteOne from '../../images/Sites/img_woods.jpeg';
import SiteTwo from '../../images/Sites/img_mountains.jpeg';
import SiteThree from '../../images/Sites/img_5terre.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src={SiteOne} alt='slide-1' />
        </div>
        <div>
          <img src={SiteTwo} alt='slide-2' />
        </div>
        <div>
          <img src={SiteThree} alt='slide-3' />
        </div>
      </Slider>
    );
  };

export default Gallery;