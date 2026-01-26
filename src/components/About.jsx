import React from "react";

const AboutUs = ({ darkTheme }) => {
  const resumeFile = "/documents/Lena_Kalmikov_Project_Manager_CV.pdf";
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
              I'm <span className="text-primary">Lena Kalmikov,</span> a Project
              Manager
            </h2>
            <p className={darkTheme ? "text-4 text-white-50" : ""}>
              <span className="text-primary">🌍</span> I’m a Project Manager
              with 9 years of experience leading end-to-end projects in a global
              B2B localization company. I’ve owned full project lifecycles,
              including scheduling, capacity planning, budget oversight, risk
              management, issue resolution, cross-functional coordination, and
              clear client communication.
            </p>
            <p className={darkTheme ? "text-4 text-white-50" : ""}>
              <span className="text-primary">👩🏻‍💻</span> I've completed a
              full-stack development bootcamp, which gave me a solid technical
              foundation to understand how features are built, manage
              dependencies and trade-offs, and collaborate effectively with
              engineering teams. I bring hands-on ownership, strong execution,
              and the ability to keep teams aligned in fast-changing
              environments.
            </p>
            <p className={darkTheme ? "text-4 text-white-50" : ""}>
              <span className="text-primary">📚</span> In my free time I like
              playing board games, reading fantasy books, hiking, and serving my
              feline overlords to the best of meow ability.
            </p>
            <a
              href={resumeFile}
              download="Lena_Kalmikov_Project_Manager_CV.pdf"
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
