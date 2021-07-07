import "./assets/css/global.css";
import Index from "./pages/Index";
import Cursor from "./components/utils/custom/Cursor";
import { useEffect, useRef, useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { TweenMax } from "gsap";
import Header from "./pages/partials/Header";
import Footer from "./pages/partials/Footer";
import useLocoScroll from "./data/hooks/useLocoScroll";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);

  const header_props = { isOpen, setIsOpen };

  let appRef = useRef(null);
  let id = useRef(null);

  useLocoScroll(!preloader);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) clear();
  }, [timer]);

  return (
    <>
      <Cursor />
      {preloader ? (
        <div className="preloader">
          <h2>Imane Sihi</h2>
          <h4>Interior Designer</h4>
          <span>loading...</span>
        </div>
      ) : (
        <div
          className="App"
          id="main-container"
          ref={(el) => (appRef = el)}
          data-scroll-container
        >
          <Header props={header_props} />
          <Index props={header_props} />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
