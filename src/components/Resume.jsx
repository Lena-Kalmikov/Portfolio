import React from "react";
import resumeFile from "../documents/Lena_Kalmikov_Frontend_Developer_CV.pdf";

const Resume = ({ darkTheme }) => {
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
      <div className={"container px-lg-5"}>
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-19  text-uppercase fw-600 w-100 mb-lg-5 " +
              (darkTheme ? "text-muted opacity-5" : "text-light opacity-4")
            }
          >
            Resume
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
        <div className="row gx-5">
          <div className="col-md-7">
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
                    "bg-white rounded p-4 mb-2 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-4 " + (darkTheme ? "text-white" : "")}>
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
          <div className="col-md-5">
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
                  <li className="mb-3">
                    International work environment, interacting with clients
                    mainly from Europe and USA.
                  </li>
                  <li className="mb-3">
                    Managing the full cycle and all aspects of a project.
                  </li>
                  <li className="mb-3">
                    Processing client requests and preparing a detailed work
                    plan accordingly.
                  </li>
                  <li className="mb-3">
                    Researching and finding appropriate resources for each
                    project.
                  </li>
                  <li className="mb-3">
                    Working under tight schedules to meet clients’ deadlines.
                  </li>
                  <li className="mb-3">
                    Managing finances, cost control, and budgeting for each
                    project.
                  </li>
                  <li className="mb-3">
                    Closely monitoring the progress and workflow of each
                    project.
                  </li>
                  <li className="mb-3">
                    Tackling problems and quickly finding suitable solutions to
                    ensure the best possible results.
                  </li>
                  <li className="mb-3">
                    Close communication and negotiation with the client to fully
                    meet their expectations.
                  </li>
                  <li className="mb-3">
                    Performing internal checks before delivery to ensure the
                    best possible results.
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
