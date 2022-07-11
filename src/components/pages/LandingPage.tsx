import Footer from '../molecules/footer/Footer';
import Header from '../molecules/header/Header';
import ContactSection from '../organisms/contact-section/ContactSection';
import Hero from '../organisms/hero-section/Hero';
import PortofolioSection from '../organisms/portfolio-section/PortofolioSection';
import ServiceSection from '../organisms/service-section/ServiceSection';
import VideoSection from '../organisms/video-section/VideoSection';

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <VideoSection/>
      <ServiceSection/>
      <PortofolioSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};

export default LandingPage;
