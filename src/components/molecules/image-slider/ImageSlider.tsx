import './ImageSlider.scss';
import image1 from '../../../assets/images/slideimages/image1.png';
import image2 from '../../../assets/images/slideimages/image2.png';
import image3 from '../../../assets/images/slideimages/image3.png';
import Slider from '../../atoms/slider/Slider';

const ImageSlider = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="image__slider">
            <img className="slide__image1" src={image1} alt="image1" />
            <img className="slide__image2" src={image2} alt="image2" />
            <img className="slide__image3" src={image3} alt="image3" />
          </div>
        </div>
      </div>
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="slider">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
