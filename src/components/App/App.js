import React, {
  useState,
  useEffect,
} from "react";
import Preloader from "../Preloader/Preloader";
import RevealOnScroll from "../RevealOnScroll/RevealOnScroll";
import Header from "../Header/Header";
import Hello from "../Hello/Hello";
import Banner from "../Banner/Banner";
import Welcome from "../Welcome/Welcome";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import ButtonUp from "../ButtonUp/ButtonUp";
// import Feedback from '../Feedback/Feedback';
import { bannerText } from "../../utils/constants";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("main");
  const [showButton, setShowButton] =
    useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 1000
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {showButton && (
            <ButtonUp onClick={scrollToTop} />
          )}
          <Header
            active={tab}
            onChange={(current) =>
              setTab(current)
            }
          />

          {tab === "main" && (
            <>
              <Hello />
              <RevealOnScroll>
                <Banner {...bannerText[0]} />
                <Welcome />
              </RevealOnScroll>
              <RevealOnScroll>
                <Banner {...bannerText[1]} />
                <About />
              </RevealOnScroll>
              <RevealOnScroll>
                <Footer />
              </RevealOnScroll>
            </>
          )}

          {tab === "staff" && (
            <>
              <Banner {...bannerText[2]} />
              <Team />
              <RevealOnScroll>
                <Footer />
              </RevealOnScroll>
            </>
          )}

          {tab === "works" && (
            <>
              <Banner {...bannerText[3]} />
              <Gallery />
              <RevealOnScroll>
                <Footer />
              </RevealOnScroll>
            </>
          )}
          {/* 
          {tab === 'feedback' && (
            <>
              <Banner {...bannerText[4]} />
              <Feedback />
              <RevealOnScroll>
                <Footer />
              </RevealOnScroll>
            </>
          )} */}
        </>
      )}
    </>
  );
}
