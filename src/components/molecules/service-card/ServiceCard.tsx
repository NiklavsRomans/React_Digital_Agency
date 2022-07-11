import { FC } from 'react';
import './ServiceCard.scss';

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="service__card-box">
      <div className="service__card-wrapper">
        <img className="service__card-icon" src={icon} alt="icon" />
        <h3 className="service__card-title">{title}</h3>
        <p className="service__card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
