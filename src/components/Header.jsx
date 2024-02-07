import React, { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link } from "react-scroll";

import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import githubOnHover from "../images/github_original.png";
import linkedinOnHover from "../images/linkedin_original.png";
import whatsappOnHover from "../images/whatsapp_original.png";

const Header = ({ darkTheme, homeRef, handleNavClick }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const [githubIcon, setGithubIcon] = useState(github);
  const [linkedinIcon, setLinkedinIcon] = useState(linkedin);
  const [whatsappIcon, setWhatsappIcon] = useState(whatsapp);

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{ cursor: "pointer" }}
            to="home"
            className="mb-lg-auto mt-lg-4"
            onClick={(e) => {
              e.preventDefault();
              setIsNavModalClose(true);
            }}
          >
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img
                className="img-fluid rounded-pill d-block"
                src="images/profile.jpg"
                title="I'm Lena"
                alt="profile"
              />
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              Lena Kalmikov
            </h1>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto "
                : "show navbar-collapse w-100 my-lg-auto"
            }
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
                <Link
                  target={homeRef}
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="home"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="about"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="techStack"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Tech Stack
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="resume"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto mb-lg-4 ms-auto me-sm-4 ms-lg-0 d-flex">
            <li className="social-icons-linkedin">
              <Tooltip text="Linkedin" placement="bottom">
                <a
                  href="https://www.linkedin.com/in/lena-kalmikov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin"
                    width={"30px"}
                    onMouseOver={() => setLinkedinIcon(linkedinOnHover)}
                    onMouseOut={() => setLinkedinIcon(linkedin)}
                  />
                </a>
              </Tooltip>
            </li>
            <li className="social-icons-github me-2 ms-2">
              <Tooltip text="Github" placement="bottom">
                <a
                  href="https://github.com/Lena-Kalmikov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={githubIcon}
                    alt="github"
                    width={"30px"}
                    onMouseOver={() => setGithubIcon(githubOnHover)}
                    onMouseOut={() => setGithubIcon(github)}
                  />
                </a>
              </Tooltip>
            </li>
            <li className="social-icons-github">
              <Tooltip text="Whatsapp" placement="bottom">
                <a
                  href="https://wa.me/972527979366"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={whatsappIcon}
                    alt="whatsapp"
                    width={"30px"}
                    onMouseOver={() => setWhatsappIcon(whatsappOnHover)}
                    onMouseOut={() => setWhatsappIcon(whatsapp)}
                  />
                </a>
              </Tooltip>
            </li>
          </ul>
          <button
            onClick={(e) => {
              setIsNavModalClose(!isNavModalClose);
            }}
            className={
              isNavModalClose ? "navbar-toggler" : "navbar-toggler show"
            }
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default Header;
