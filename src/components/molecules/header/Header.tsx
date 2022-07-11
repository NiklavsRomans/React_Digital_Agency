import Logo from '../../atoms/logo/Logo';
import Navigation from '../../atoms/header-navigation/Navigation';
import ContactButton from '../../atoms/contact-button/ContactButton';
import './Header.scss';

const Header = () => {
  return (
    <div className="header__box">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <header className="header">
              <Logo />
              <Navigation />
              <ContactButton />
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
