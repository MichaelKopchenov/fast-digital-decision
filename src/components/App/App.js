import Header from '../Header/Header';
import Hello from '../Hello/Hello';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
import { bannerText } from '../../utils/constants';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Hello />
      <Banner {...bannerText[0]}/>
      <Welcome />
      <Banner {...bannerText[2]}/>
      <Team />
      <Banner {...bannerText[3]}/>
      <Gallery />
      <Banner {...bannerText[1]}/>
      <About />
      <Footer />
    </>
  );
};
