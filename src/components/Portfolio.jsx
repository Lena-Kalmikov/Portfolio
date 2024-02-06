import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    JAVASCRIPT: "JavaScript",
    CSHARP: "C-sharp",
  };

  const projectsData = [
    {
      title: "Board Games Website",
      projectInfo:
        "As someone who loves board games and organizing events but couldn't find the right platform, my favorite project became creating such a platform myself. PlayDate is a board games website where people can browse board games and events. Registering to the website allows users to create their own events and delete them, add, edit and delete comments, join existing events, browse event participants, search games, switch modes from dark to light and much more.",
      technologies:
        "ReactJS, CSS, Material UI, react-router-dom, react-hook-form, Firestore Database, Firebase for Authentication, Storage, and Hosting",
      url: {
        name: "PlayDate",
        link: "https://play-date-board-games-website.web.app/",
      },
      github: {
        name: "Board Games Website",
        link: "https://github.com/Lena-Kalmikov/Board-Games-Website",
      },
      thumbImage: "images/projects/playdate/playdate0.PNG",
      sliderImages: [
        "images/projects/playdate/playdate1.PNG",
        "images/projects/playdate/playdate2.PNG",
        "images/projects/playdate/playdate3.PNG",
        "images/projects/playdate/playdate4.PNG",
        "images/projects/playdate/playdate5.PNG",
        "images/projects/playdate/playdate6.PNG",
        "images/projects/playdate/playdate8.PNG",
        "images/projects/playdate/playdate9.PNG",
        "images/projects/playdate/playdate10.PNG",
        "images/projects/playdate/playdate11.PNG",
        "images/projects/playdate/playdate12.PNG",
        "images/projects/playdate/playdate14.PNG",
        "images/projects/playdate/playdate15.PNG",
      ],
      categories: [filters.JAVASCRIPT],
    },
    {
      title: "Book Catalogue Website ",
      projectInfo:
        "On this site, people can browse books, search by genre and add comments on a book's page. Admins can preform CRUD operations - create, review, update and delete books.",
      technologies: "C#, ASP.Net Core, JavaScript, HTML, CSS, Bootstrap, MSSQL",
      github: {
        name: "Bookstore Catalogue Website",
        link: "https://github.com/Lena-Kalmikov/Bookstore-Catalogue-Website",
      },
      thumbImage: "images/projects/bookstore.PNG",
      sliderImages: [
        "images/projects/bookstore2.PNG",
        "images/projects/bookstore3.PNG",
        "images/projects/bookstore4.PNG",
        "images/projects/bookstore5.PNG",
        "images/projects/bookstore6.PNG",
        "images/projects/bookstore7.PNG",
      ],
      categories: [filters.CSHARP],
    },
    {
      title: "Airport Simulation",
      projectInfo:
        "The goal of this project was to create an App that manages plane traffic in an airport, routing arriving and departing planes to different stations, managing variable loads and preventing deadlocks.",
      technologies: "ReactJS, NodeJS, ExpressJS and Socket.IO",
      github: {
        name: "Airport Simulation",
        link: "https://github.com/Lena-Kalmikov/Airport-Simulation",
      },
      thumbImage: "images/projects/airport.PNG",
      sliderImages: ["images/projects/airport_activity.gif"],
      categories: [filters.JAVASCRIPT],
    },
    {
      title: "Chat And Play",
      projectInfo:
        "The goal of this project was to create a real-time chat app with an option to play an online game with another person. People can register/login, choose another player from an online list which updates in realtime, enter a chat room with them and there they can chat and play.",
      technologies:
        "ReactJS, CSS, HTML, NodeJS, ExpressJS, Socket.IO and Azure cloud.",
      github: {
        name: "Chat And Play",
        link: "https://github.com/Lena-Kalmikov/Chat-And-Play",
      },
      thumbImage: "images/projects/chatandplay2.PNG",
      sliderImages: ["images/projects/ChatAndPlay1.gif"],
      categories: [filters.JAVASCRIPT],
    },
    {
      title: "Dodge Game",
      projectInfo:
        "My take on the classic dodge game, where you're playing a dinosaur trying to run away from the meteorites trying to extinct you. You can collect some dino coins while at it.",
      technologies: "C#, Xaml",
      github: {
        name: "Dodge Game",
        link: "https://github.com/Lena-Kalmikov/Dodge-Game",
      },
      thumbImage: "images/projects/dodge.PNG",
      sliderImages: ["images/projects/dodge.gif"],
      categories: [filters.CSHARP],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-1" : "bg-light")}
      >
        <div className={"container px-lg-5"}>
          {/* Heading */}
          <div className="position-relative d-flex text-center">
            <h2
              className={
                "text-22  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            {/* <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p> */}
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">
                              {project.categories}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
