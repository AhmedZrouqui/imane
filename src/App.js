import "./assets/css/global.css";
import Index from "./pages/Index";
import Cursor from "./components/utils/custom/Cursor";
import { useEffect, useRef, useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";

import { TweenMax } from "gsap";
import Header from "./pages/partials/Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const header_props = { isOpen, setIsOpen };
  let appRef = useRef(null);

  useEffect(() => {
    TweenMax.to(appRef, 1, { css: { opacity: 1 } });
  });

  return (
    <div className="App" ref={(el) => (appRef = el)}>
      <Cursor />
      <Header props={header_props} />
      <Index props={header_props} />
      <About />
      <Projects />
    </div>
  );
}

export default App;
