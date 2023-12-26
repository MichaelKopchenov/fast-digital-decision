import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import Header from '../Header/Header';
import Hello from '../Hello/Hello';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
import ButtonUp from '../ButtonUp/ButtonUp';
import { bannerText } from '../../utils/constants';
import './App.css';

export default function App () {
  return (
    <>
      <ButtonUp />   
      <Header />
      <Hello />
      <RevealOnScroll>
        <Banner {...bannerText[0]}/>
        <Welcome />
      </RevealOnScroll>
      <RevealOnScroll>
        <Banner {...bannerText[2]}/>
        <Team />
      </RevealOnScroll>
      <RevealOnScroll>
        <Banner {...bannerText[3]}/>
        <Gallery />
      </RevealOnScroll>
      <RevealOnScroll>
        <Banner {...bannerText[1]}/>
        <About />
      </RevealOnScroll>
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
};
