import plusicon from '../../../assets/images/plus.png';
import circleicon from '../../../assets/images/circles.png';
import './ContactSection.scss';

const ContactSection = () => {
  return (
    <section className="contact__section">
      <div className="container">
        <div className="row end-xs">
          <div className="col-xs-12">
            <div className="contact__section-icon">
              <img src={plusicon} alt="plusicon" />
            </div>
          </div>
        </div>
        <div className="row end-xs">
          <div className="col-xs-12">
            <div className="contact-btn">
              <button className="contact-button">Contact us</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="contact__section-icon">
              <img src={circleicon} alt="circleicon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
