import React from "react";
import SiteOne from '../../images/Sites/OSNO.png';
import SiteTwo from '../../images/Sites/how-to-learn.png';
import SiteThree from '../../images/Sites/mesto.png';
import SiteFour from '../../images/Sites/travel.png';
import SiteFive from '../../images/Sites/movies.png';
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
        <div>
          <img src={SiteFour} alt='slide-4' />
        </div>
        <div>
          <img src={SiteFive} alt='slide-5' />
        </div>
      </Slider>
    );
  };

export default Gallery;