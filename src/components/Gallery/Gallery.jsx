import { carouselText } from '../../utils/constants';
import Carousel from '../Carousel/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        <Carousel {...carouselText[0]} />
        <Carousel {...carouselText[1]} />
        <Carousel {...carouselText[2]} />
        <Carousel {...carouselText[3]} />
        <Carousel {...carouselText[4]} />
      </Slider>
    );
  };