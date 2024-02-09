import React from "react";
import resumeFile from "../documents/Lena_Kalmikov_CV.pdf";

const AboutUs = ({ darkTheme }) => {
  return (
    <section
      id="about"
      className={"section " + (darkTheme ? "bg-dark-1 min-vh-100" : "")}
    >
      <div className={"container px-lg-5"}>
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
        <div className="row gy-2 justify-content-center justify-content-lg-start">
          <div className="col-lg-4 order-lg-2 ">
            <div className="ps-lg-4 mt-lg-5 mb-3 text-center text-lg-start">
              <span className="bg-dark-2 rounded-pill p-2 d-inline-block">
                <img
                  className="img-fluid rounded-pill d-block "
                  src="images/profile.jpg"
                  title="I'm Lena"
                  alt="profile"
                  width="220"
                />
              </span>
            </div>
          </div>
          <div className="col-lg-8 order-lg-1 ">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Lena Kalmikov,</span> a
              Full-Stack Developer
            </h2>
            <p className={darkTheme ? "text-4 text-white-50" : ""}>
              I'm reliable and organized with a keen eye for detail. I love
              learning new things and am always on the lookout for ways to grow
              and improve. Working with others comes naturally to me, thanks to
              my strong communication skills and ability to keep calm under
              pressure. I see challenges as opportunities to solve problems and
              am strongly motivated to achieve success in any task at hand.
            </p>
            <p className={darkTheme ? "text-4 text-white-50" : ""}>
              For the past 7 years, I've been working as a Project Manager in a
              global company, acquiring a vast experience that will be an asset
              to any team I'll be a part of. I've managed a variety of projects,
              and have gained a lot of experience in working with clients from
              all over the world.
            </p>
            <a
              href={resumeFile}
              download
              className="btn btn-outline-primary rounded-pill mt-2 mb-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
