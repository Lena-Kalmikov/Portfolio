import React from "react";
import resumeFile from "../documents/Lena_Kalmikov_CV.pdf";
const AboutUs = ({ darkTheme }) => {
  return (
    <section
      id="about"
      className={"section " + (darkTheme ? "bg-dark-1 min-vh-100" : "")}
    >
      <div className={"container px-lg-5"}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-19 text-uppercase fw-600 w-100 mb-lg-5 " +
              (darkTheme ? "text-muted opacity-5" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 mt-4 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto mt-5" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 ">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Lena Kalmikov,</span> a
              Full-Stack Developer
            </h2>
            <p className={darkTheme ? "text-4 text-white-50" : ""}>
              I'm reliable and organized with a keen eye for detail. As a team
              player, I have strong communication skills and am adept at working
              under pressure. I see challenges as opportunities to solve
              problems and am strongly motivated to achieve success in any task
              at hand.
            </p>
            <p className={darkTheme ? "text-4 text-white-50" : ""}>
              For the past 7 years, I've worked as a Project Manager in a global
              company, acquiring a vast experience that will be an asset to any
              team I'll be a part of. I've managed a variety of projects, and
              have gained a lot of experience in working with clients from all
              over the world.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Lena Kalmikov
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:elenakalmikov@gmail.com">
                    elenakalmikov@gmail.com
                  </a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Ramat-Gan, Israel
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill mt-2"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
