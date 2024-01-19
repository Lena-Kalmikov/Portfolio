import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2021 - 2022",
      title: "Full-Stack Development Bootcamp",
      place: "Sela College",
      desc: "A year long program that covered essential concepts such as Object-Oriented Programming, Data Structures, Algorithms, Complexity, and Design Patterns. This was practiced using various programming languages (c#, js), frameworks (.net framework, asp.net core, angular), and databases (mssql, sqlite).",
    },
    {
      yearRange: "2023",
      title:
        "React - The Complete Guide (including Hooks, React Router, Redux)",
      place: "Udemy",
      desc: "Teaches React in-depth, from core basics to advanced topics, using all the latest patterns and best practices.",
    },
    {
      yearRange: "2023",
      title: "React, NodeJS, Express & MongoDB - The MERN FullStack Guide",
      place: "Udemy",
      desc: "Teaches how to build and deploy fullstack web apps with React, Node, Express, and MongoDB. Starting from the basics of each technology, and moving on to advanced concepts.",
    },
    {
      yearRange: "2023",
      title: "Design Rules: Principles + Practices for Great UI Design",
      place: "Udemy",
      desc: "Teaches essential skills for creating user-friendly interfaces that are not only aesthetically pleasing but also effective in guiding user interactions.",
    },
    {
      yearRange: "2021",
      title: "Basic Python",
      place: "SheCodes",
      desc: "My first encounter with programming. I learned basic concepts such as variables, loops, conditions, functions, classes, objects, inheritance and more.",
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-2" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-22  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Resume
          </h2>
          {/* <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p> */}
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Experience
            </h2>
            <div
              className={
                "bg-white  rounded p-4 mb-4 " +
                (darkTheme ? "bg-dark" : "bg-white border")
              }
            >
              <p className="badge bg-primary text-2 fw-400">2016 - Present</p>
              <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                Project Manager
              </h3>
              <p className={darkTheme ? "text-primary" : "text-danger"}>
                Baguette Translations
              </p>
              <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul>
                  <li>
                    International work environment, interacting with clients
                    mainly from Europe and USA.
                  </li>
                  <li>Managing the full cycle and all aspects of a project.</li>
                  <li>
                    Processing client requests and preparing a detailed work
                    plan accordingly.
                  </li>
                  <li>
                    Researching and finding appropriate resources for each
                    project.
                  </li>
                  <li>
                    Working under tight schedules to meet clients’ deadlines.
                  </li>
                  <li>
                    Managing finances, cost control, and budgeting for each
                    project.
                  </li>
                  <li>
                    Closely monitoring the progress and workflow of each
                    project.
                  </li>
                  <li>
                    Tackling problems and quickly finding suitable solutions to
                    ensure the best possible results.
                  </li>
                  <li>
                    Close communication and negotiation with the client to fully
                    meet their expectations.
                  </li>
                  <li>
                    Performing internal checks before delivery to ensure the
                    best possible results.
                  </li>
                  <li>
                    Skills: Teamwork, Communication, Deadline Oriented,
                    International Environment, Foreign Languages, Project
                    Management, CAT tools, Budgeting, Customer Service,
                    Proofreading.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* My Skills */}
        {/* <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Tech Stack
        </h2> */}
        <div className="row gx-5">
          {/* {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))} */}
          {/* <div className="col-md-7">
            <ul
              className={
                "social-icons justify-content-center justify-content-md-start"
              }
            >
              <div className="social-icons">
                <Tooltip text="Java Script" placement="bottom">
                  <div>
                    <img src={js} alt="java script" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="React" placement="bottom">
                  <div>
                    <img src={reactjs} alt="reactjs" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="react router" placement="bottom">
                  <div>
                    <img src={reactrouter} alt="reactrouter" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="HTML" placement="bottom">
                  <div>
                    <img src={html5} alt="html5" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="CSS" placement="bottom">
                  <div>
                    <img src={css} alt="css" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Material UI" placement="bottom">
                  <div>
                    <img src={materialui} alt="material-ui" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="sass" placement="bottom">
                  <div>
                    <img src={sass} alt="sass" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Redux" placement="bottom">
                  <div>
                    <img src={redux} alt="redux" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Type Script" placement="bottom">
                  <div>
                    <img src={ts} alt="type script" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="C#" placement="bottom">
                  <div>
                    <img src={csharp} alt="c-sharp" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="git" placement="bottom">
                  <div>
                    <img src={git} alt="git" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="github" placement="bottom">
                  <div>
                    <img src={github} alt="github" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="NodeJS" placement="bottom">
                  <div>
                    <img src={nodejs} alt="nodejs" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Mongodb" placement="bottom">
                  <div>
                    <img src={mongodb} alt="mongodb" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="MySQL" placement="bottom">
                  <div>
                    <img src={mysql} alt="mysql" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Bootstrap" placement="bottom">
                  <div>
                    <img src={bootstrap5} alt="bootstrap5" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Firebase" placement="bottom">
                  <div>
                    <img src={firebase} alt="firebase" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Heroku" placement="bottom">
                  <div>
                    <img src={heroku} alt="heroku" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Postman" placement="bottom">
                  <div>
                    <img src={postman} alt="postman" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Figma" placement="bottom">
                  <div>
                    <img src={figma} alt="figma" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Azure" placement="bottom">
                  <div>
                    <img src={azure} alt="azure" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Angular" placement="bottom">
                  <div>
                    <img src={angular} alt="angular" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
              <div className="social-icons">
                <Tooltip text="Visual Studio" placement="bottom">
                  <div>
                    <img src={vs} alt="vs" width={"90px"} />
                  </div>
                </Tooltip>
              </div>
            </ul>
          </div>*/}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
