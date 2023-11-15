import React from "react";
import {
  WORK_TITLE_ONE,
  WORK_TITLE_TWO,
  WORK_TITLE_THREE,
  WORK_TITLE_FOUR,
  WORK_TITLE_FIVE,
  WORK_TEXT_ONE,
  WORK_TEXT_TWO,
  WORK_TEXT_THREE,
  WORK_TEXT_FOUR,
  WORK_TEXT_FIVE,
} from '../../utils/constants';
import SiteOne from '../../images/Sites/OSNO.png';
import SiteTwo from '../../images/Sites/how-to-learn.png';
import SiteThree from '../../images/Sites/mesto.png';
import SiteFour from '../../images/Sites/travel.png';
import SiteFive from '../../images/Sites/movies.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';

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
          <div className="gallery__block">
            <img src={SiteOne} alt='slide-1' />
            <div className="gallery__flex">
              <h3 className="gallery__title">
                {WORK_TITLE_ONE}
              </h3>
              <p className="gallery__caption">
                {WORK_TEXT_ONE} 
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery__block">
            <img src={SiteTwo} alt='slide-2' />
            <div className="gallery__flex">
              <h3 className="gallery__title">
                {WORK_TITLE_TWO}
              </h3>
              <p className="gallery__caption">
                {WORK_TEXT_TWO}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery__block">
            <img src={SiteThree} alt='slide-3' />
            <div className="gallery__flex">
              <h3 className="gallery__title">
                {WORK_TITLE_THREE}
              </h3>
              <p className="gallery__caption">
                {WORK_TEXT_THREE}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery__block">
            <img src={SiteFour} alt='slide-4' />
            <div className="gallery__flex">
              <h3 className="gallery__title">
                {WORK_TITLE_FOUR}
              </h3>
              <p className="gallery__caption">
                {WORK_TEXT_FOUR}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="gallery__block">
            <img src={SiteFive} alt='slide-5' />
            <div className="gallery__flex">
              <h3 className="gallery__title">
                {WORK_TITLE_FIVE}
              </h3>
              <p className="gallery__caption">
                {WORK_TEXT_FIVE}
              </p>
            </div>
          </div>
        </div>
      </Slider>
    );
  };

export default Gallery;