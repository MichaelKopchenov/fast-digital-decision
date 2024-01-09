import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Carousel from '../Carousel/Carousel';
import { carouselText } from '../../utils/constants';

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {
        carouselText.map((slide) => (
          <Carousel key={slide.title} {...slide} />))
      }
    </Slider>
  );
};