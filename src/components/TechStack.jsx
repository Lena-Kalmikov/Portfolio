import React from "react";
import { Tooltip } from "./Tooltip";

import js from "../images/techStack/js.png";
import reactjs from "../images/techStack/reactjs.png";
import reactrouter from "../images/techStack/react-router.png";
import redux from "../images/techStack/redux.png";
import css from "../images/techStack/css.png";
import html5 from "../images/techStack/html5.png";
import sass from "../images/techStack/sass.png";
import bootstrap5 from "../images/techStack/bootstrap5.png";
import materialui from "../images/techStack/material-ui.png";
import nodejs from "../images/techStack/nodejs.png";
import mongodb from "../images/techStack/mongodb.png";
import firebase from "../images/techStack/firebase.png";
import git from "../images/techStack/git.png";
import github from "../images/techStack/github.png";
import heroku from "../images/techStack/heroku.png";
import mysql from "../images/techStack/mysql.png";
import csharp from "../images/techStack/csharp.png";
import ts from "../images/techStack/typescript.png";
import postman from "../images/techStack/postman.png";
import figma from "../images/techStack/figma.png";
import azure from "../images/techStack/azure.png";
import angular from "../images/techStack/angular.png";
import vs from "../images/techStack/vs.png";
import express from "../images/techStack/express.png";

const TechStack = ({ classicHeader, darkTheme }) => {
  return (
    <section
      id="techStack"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Tech Stack
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Skills
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
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
              <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Java Script" placement="bottom">
                      <img src={js} alt="java script" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="React" placement="bottom">
                      <img src={reactjs} alt="reactjs" width={"80px"} />
                    </Tooltip>
                  </div>

                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="react router" placement="bottom">
                      <img src={reactrouter} alt="reactrouter" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="HTML" placement="bottom">
                      <img src={html5} alt="html5" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="CSS" placement="bottom">
                      <img src={css} alt="css" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Material UI" placement="bottom">
                      <img src={materialui} alt="material-ui" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Bootstrap" placement="bottom">
                      <img src={bootstrap5} alt="bootstrap5" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="sass" placement="bottom">
                      <img src={sass} alt="sass" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Redux" placement="bottom">
                      <img src={redux} alt="redux" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Type Script" placement="bottom">
                      <img src={ts} alt="type script" width={"80px"} />
                    </Tooltip>
                  </div>
                  <div style={{ marginRight: "-1rem" }}>
                    <Tooltip text="Angular" placement="bottom">
                      <img src={angular} alt="angular" width={"80px"} />
                    </Tooltip>
                  </div>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-md-6">
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
              <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <div className="social-icons">
                    <Tooltip text="Node JS" placement="bottom">
                      <div>
                        <img src={nodejs} alt="nodejs" width={"90px"} />
                      </div>
                    </Tooltip>
                  </div>
                  <div className="social-icons">
                    <Tooltip text="Express JS" placement="bottom">
                      <div>
                        <img src={express} alt="express" width={"90px"} />
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
                    <Tooltip text="Postman" placement="bottom">
                      <div>
                        <img src={postman} alt="postman" width={"90px"} />
                      </div>
                    </Tooltip>
                  </div>
                </ul>
              </p>
            </div>
          </div>

          <div className="col-md-6">
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
              <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <div className="social-icons">
                    <Tooltip text="Firebase" placement="bottom">
                      <div>
                        <img src={firebase} alt="firebase" width={"90px"} />
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
                    <Tooltip text="Heroku" placement="bottom">
                      <div>
                        <img src={heroku} alt="heroku" width={"90px"} />
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
                </ul>
              </p>
            </div>
          </div>

          <div className="col-md-6">
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
              <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <div className="social-icons">
                    <Tooltip text="github" placement="bottom">
                      <div>
                        <img src={github} alt="github" width={"90px"} />
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
                    <Tooltip text="Visual Studio" placement="bottom">
                      <div>
                        <img src={vs} alt="vs" width={"90px"} />
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
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
