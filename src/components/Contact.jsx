import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import githubOnHover from "../images/github_original.png";
import linkedinOnHover from "../images/linkedin_original.png";
import whatsappOnHover from "../images/whatsapp_original.png";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ darkTheme }) => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const [githubIcon, setGithubIcon] = useState(github);
  const [linkedinIcon, setLinkedinIcon] = useState(linkedin);
  const [whatsappIcon, setWhatsappIcon] = useState(whatsapp);

  emailjs.init("9qY2oYYMPPXgebIUK");

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs.sendForm("service_604zdy6", "template_zv5e1v5", form.current).then(
      (result) => {
        document.getElementById("contact-form").reset();
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: darkTheme ? "dark" : "light",
        });
        console.log(result.text);
        setSendingMail(false);
      },
      (error) => {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: darkTheme ? "dark" : "light",
        });
        console.log(error.text);
        setSendingMail(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-1 min-vh-100" : "bg-light")}
    >
      <div className={"container px-lg-5"}>
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-19  text-uppercase fw-600 w-100 mb-lg-5 " +
              (darkTheme ? "text-muted opacity-5" : "text-light opacity-4")
            }
          >
            Contact Me
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
        <div className="row gy-5">
          <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start">
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Get in Touch
            </h2>
            <p
              className={"text-3 mt-2 mb-1 " + (darkTheme ? "text-light" : "")}
            >
              <span className="text-primary text-5 me-2">
                <i className="fas fa-phone" />
              </span>
              052-7979366
            </p>
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-5 me-2">
                <i className="fas fa-location-dot" />
              </span>
              Ramat-Gan, Israel
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-5 me-2">
                <i className="fas fa-envelope" />
              </span>
              elenakalmikov@gmail.com
            </p>

            <ul
              className={
                "social-icons justify-content-center justify-content-md-start " +
                (darkTheme ? "social-icons-muted" : "")
              }
            >
              <div className="social-icons-linkedin">
                <Tooltip text="Linkedin" placement="bottom">
                  <a
                    href="https://www.linkedin.com/in/lena-kalmikov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="linkedin"
                      width={"45px"}
                      onMouseOver={() => setLinkedinIcon(linkedinOnHover)}
                      onMouseOut={() => setLinkedinIcon(linkedin)}
                    />
                  </a>
                </Tooltip>
              </div>
              <div className="social-icons-github ms-3 me-3">
                <Tooltip text="Github" placement="bottom">
                  <a
                    href="https://github.com/Lena-Kalmikov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubIcon}
                      alt="github"
                      width={"45px"}
                      onMouseOver={() => setGithubIcon(githubOnHover)}
                      onMouseOut={() => setGithubIcon(github)}
                    />
                  </a>
                </Tooltip>
              </div>
              <div className="social-icons-whatsapp">
                <Tooltip text="Whatsapp" placement="bottom">
                  <a
                    href="https://wa.me/972527979366"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={whatsappIcon}
                      alt="whatsapp"
                      width={"45px"}
                      onMouseOver={() => setWhatsappIcon(whatsappOnHover)}
                      onMouseOut={() => setWhatsappIcon(whatsapp)}
                    />
                  </a>
                </Tooltip>
              </div>
            </ul>
          </div>
          <div className="col-md-8 col-xl-9 order-0 order-md-1">
            <h2
              className={
                "mb-3 text-5 text-uppercase text-center text-md-start " +
                (darkTheme ? "text-white" : "")
              }
            >
              Send me an email
            </h2>
            <form
              className={darkTheme ? "form-dark" : ""}
              id="contact-form"
              action="php/mail.php"
              method="post"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="user_name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    name="user_email"
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Write your message here"
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-outline-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        className="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
