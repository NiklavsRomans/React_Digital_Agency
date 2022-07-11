import Button from '../../atoms/button/Button';
import Pharagraph from '../../atoms/paragraph/Paragraph';
import Title from '../../atoms/title/Title';
import './TitleSection.scss';
import titleimage from '../../../assets/images/titleimage.png';

const TitleSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-6">
          <section className="main__section">
            <div className="main__section--content">
              <Title />
              <Pharagraph />
              <Button
                label="Our Services"
                onClick={() => {}}
                size="medium"
                backgroundColor="#5454D4"
              />
            </div>
          </section>
        </div>
        <div className="col-xs-6">
          <div className="title__image">
            <img src={titleimage} alt="titleimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
