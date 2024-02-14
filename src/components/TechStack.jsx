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
import sql from "../images/techStack/sql.png";
import csharp from "../images/techStack/csharp.png";
import ts from "../images/techStack/typescript.png";
import postman from "../images/techStack/postman.png";
import express from "../images/techStack/express.png";
import net from "../images/techStack/net.png";

const TechStack = ({ darkTheme }) => {
  return (
    <section
      id="techStack"
      className={"section " + (darkTheme ? "bg-dark-2 min-vh-100" : "")}
    >
      <div className={"container px-lg-5"}>
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-19  text-uppercase fw-600 w-100 mb-lg-5 " +
              (darkTheme ? "text-muted opacity-5" : "text-light opacity-4")
            }
          >
            Tech Stack
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
          <div className="col-md-6">
            <div
              className={
                "bg-white  rounded p-4 mb-4 " +
                (darkTheme ? "bg-dark" : "bg-white border")
              }
            >
              <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                Front-End
              </h3>
              <div className={"mb-0" + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Java Script" placement="bottom">
                      <img src={js} alt="java script" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="React" placement="bottom">
                      <img src={reactjs} alt="reactjs" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-1rem", marginBottom: "-1rem" }}>
                    <Tooltip text="React Router" placement="bottom">
                      <img src={reactrouter} alt="reactrouter" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="HTML" placement="bottom">
                      <img src={html5} alt="html5" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="CSS" placement="bottom">
                      <img src={css} alt="css" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Material UI" placement="bottom">
                      <img src={materialui} alt="material-ui" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Bootstrap" placement="bottom">
                      <img src={bootstrap5} alt="bootstrap5" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Sass" placement="bottom">
                      <img src={sass} alt="sass" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Type Script" placement="bottom">
                      <img src={ts} alt="type script" width={"80px"} />
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={
                "bg-white  rounded p-4 mb-4 " +
                (darkTheme ? "bg-dark" : "bg-white border")
              }
            >
              <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                Back-End
              </h3>

              <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Node JS" placement="bottom">
                      <img src={nodejs} alt="nodejs" width={"80"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Express JS" placement="bottom">
                      <img src={express} alt="express" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="C#" placement="bottom">
                      <img src={csharp} alt="c-sharp" width={"80px"} />
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={
                "bg-white  rounded p-4 mb-4 " +
                (darkTheme ? "bg-dark" : "bg-white border")
              }
            >
              <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                DBs and Cloud
              </h3>
              <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Firebase" placement="bottom">
                      <img src={firebase} alt="firebase" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="MongoDB" placement="bottom">
                      <img src={mongodb} alt="mongodb" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="MSSQL" placement="bottom">
                      <img src={sql} alt="sql" width={"80px"} />
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={
                "bg-white  rounded p-4 mb-4 " +
                (darkTheme ? "bg-dark" : "bg-white border")
              }
            >
              <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                More Tools
              </h3>
              <div className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                <ul
                  className={
                    "social-icons justify-content-center justify-content-md-start"
                  }
                >
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="GitHub" placement="bottom">
                      <img src={github} alt="github" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Git" placement="bottom">
                      <img src={git} alt="git" width={"80px"} />
                    </Tooltip>
                  </li>
                  <li style={{ marginRight: "-0.7rem", marginBottom: "-1rem" }}>
                    <Tooltip text="Postman" placement="bottom">
                      <img src={postman} alt="postman" width={"80px"} />
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
