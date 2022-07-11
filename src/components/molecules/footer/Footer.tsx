import './Footer.scss';
import FooterNavigation from '../../atoms/footer-navigation/FooterNavigation';
import Logo from '../../atoms/logo/Logo';

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <footer className="footer">
            <div className="footer__logo">
              <Logo />
            </div>
            <div className="footer__navigation">
              <FooterNavigation />
            </div>
            <div className="footer__issue">
              <span>© 2020 Enver, All Rights Reserved</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
