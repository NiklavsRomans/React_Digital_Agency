import './FooterNavigation.scss';

const FooterNavigation = () => {
  return (
    <div className="footer__navigation">
      <nav>
        <a className="footer__links" href="_">
          Support
        </a>
        <a className="footer__links" href="_">
          Privacy Policy
        </a>
        <a className="footer__links" href="_">
          Terms and Conditions
        </a>
      </nav>
    </div>
  );
};

export default FooterNavigation;
