import "./App.scss";
import { useEffect, useState } from "react";
import { commonConfig } from "./config/commonConfig";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import PreLoader from "./components/Preloader";
import TechStack from "./components/TechStack";
import { Tooltip } from "./components/Tooltip";

function App() {
  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <>
      <div
        style={{
          position: "relative",
        }}
        className={classicHeader ? "" : "side-header"}
      >
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          <Header handleNavClick={handleNavClick}></Header>
          <div id="content" role="main">
            <Home darkTheme={darkTheme} handleNavClick={handleNavClick}></Home>
            <AboutUs darkTheme={darkTheme}></AboutUs>
            <Portfolio darkTheme={darkTheme}></Portfolio>
            <TechStack darkTheme={darkTheme}></TechStack>
            <Resume darkTheme={darkTheme}></Resume>
            <Contact darkTheme={darkTheme}></Contact>
          </div>
        </div>
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
      </div>
    </>
  );
}

export default App;
