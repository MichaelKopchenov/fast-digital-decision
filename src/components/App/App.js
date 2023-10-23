import Header from '../Header/Header';
import Hello from '../Hello/Hello';
import BannerFirst from '../Banner-First/Banner-First';
import BannerSecond from '../Banner-Second/Banner-Second';
import BannerThird from '../Banner-Third/Banner-Third';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
import './App.css';

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
      {/* <Footer /> */}
    </>
  );
}

export default App;
