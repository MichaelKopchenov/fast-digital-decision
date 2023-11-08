import './App.css';
import Hello from '../Hello/Hello';
import Header from '../Header/Header';
import BannerFirst from '../Banner-First/Banner-First';
import BannerSecond from '../Banner-Second/Banner-Second';
import BannerThird from '../Banner-Third/Banner-Third';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hello />
      <BannerFirst />
      <Welcome />
      <BannerSecond />
      <About />
      <BannerThird />
      <Team />
      <Footer />
    </>
  );
};

export default App;
