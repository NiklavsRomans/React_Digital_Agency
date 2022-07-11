import buttonicon from '../../../assets/images/buttonicon.png';
import plusicon from '../../../assets/images/plus.png';
import ServiceCard from '../../molecules/service-card/ServiceCard';
import development from '../../../assets/icons/development.png';
import UX from '../../../assets/icons/ux.png';
import graphik from '../../../assets/icons/graphik.png';
import motion from '../../../assets/icons/motion.png';
import photo from '../../../assets/icons/photo.png';
import video from '../../../assets/icons/video.png';
import './ServiceSection.scss';

const ServiceSection = () => {
  const serviceCards = [
    {
      icon: development,
      title: 'Development',
      description:
        'Create a platform with the best and coolest quality from us.',
    },
    {
      icon: UX,
      title: 'UI/UX Designer',
      description:
        'We provide UI/UX Design services, and of course with the best quality',
    },
    {
      icon: graphik,
      title: 'Graphic Designer',
      description:
        'We provide Graphic Design services, with the best designers',
    },
    {
      icon: motion,
      title: 'Motion Graphik',
      description:
        'Create a platform with the best and coolest quality from us.',
    },
    {
      icon: photo,
      title: 'Photography',
      description:
        'We provide Photography services, and of course with the best quality',
    },
    {
      icon: video,
      title: 'Videography',
      description:
        'Create a platform with the best and coolest quality from us.',
    },
  ];

  return (
    <section className="service__section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="service__content">
              <img className="play__icon" src={buttonicon} alt="buttonicon" />
              <h2 className="service__title">The Service We Provide For You</h2>
              <img className="plus__icon" src={plusicon} alt="plusicon" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="service__cards">
              {serviceCards.map((card) => (
                <ServiceCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </div>
            <div className="row">
              <div className="col-xs-4">
                <img className="plus__icon" src={plusicon} alt="plusicon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
