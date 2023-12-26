import './Carousel.css';

export default function Carousel ({ 
    title, 
    text, 
    site, 
    slide 
  }) {
    return (
        <div>
          <div className="carousel__block">
            <img src={site} alt={slide} />
            <div className="carousel__flex">
              <h3 className="carousel__title">
                {title}
              </h3>
              <p className="carousel__caption">
                {text} 
              </p>
            </div>
          </div>
        </div>
    );
};