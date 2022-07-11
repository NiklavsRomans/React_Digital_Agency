import './PortofolioSection.scss';
import circles from '../../../assets/images/circles.png';
import zigzag from '../../../assets/images/zigzag.png';
import ImageSlider from '../../molecules/image-slider/ImageSlider';

const PortofolioSection = () => {
  return (
    <section className="portofolio__section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="portofolio__content">
              <h2 className="portofolio__title">Our Awesome Portofolio</h2>
              <img src={circles} alt="circles" />
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="slideshow">
              <ImageSlider />
            </div>
          </div>
        </div>
        <img src={zigzag} alt="zigzag" />
      </div>
    </section>
  );
};

export default PortofolioSection;
