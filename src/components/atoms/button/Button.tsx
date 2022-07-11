import { FC } from 'react';
import './Button.scss';
import arrowicon from '../../../assets/images/arrowicon.png';

type ButtonProps = {
  onClick: () => void;
  label: string;
  size: 'small' | 'medium' | 'large';
  backgroundColor: '#5454D4';
};

const Button: FC<ButtonProps> = ({ label, size, backgroundColor, onClick }) => {
  let scale = 1;
  if (size === 'small') scale = 0.75;
  if (size === 'large') scale = 1.5;
  const style = {
    padding: `${scale * 0.7}rem ${scale * 1.5}rem`,
    backgroundColor,
    border: 'none',
  };

  return (
    <button className="button" style={style} onClick={onClick}>
      {label}{' '}
      <span>
        <img src={arrowicon} alt="arrowicon" />
      </span>
    </button>
  );
};

export default Button;
