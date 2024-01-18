import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import githubOnHover from "../images/github_original.png";
import linkedinOnHover from "../images/linkedin_original.png";
import whatsappOnHover from "../images/whatsapp_original.png";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ classicHeader, darkTheme }) => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const [githubIcon, setGithubIcon] = useState(github);
  const [linkedinIcon, setLinkedinIcon] = useState(linkedin);
  const [whatsappIcon, setWhatsappIcon] = useState(whatsapp);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        "service_i86k3ms",
        "template_si6cin9",
        form.current,
        "c9HsDgGF0tvWyVnAL"
      )
      .then(
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
      className={"section " + (darkTheme ? "bg-dark-1" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Contact ME
          </h2>
          {/* <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p> */}
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
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
              <span className="text-primary text-4 me-2">
                <i className="fas fa-phone" />
              </span>
              +972 52 797 9366
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
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
                      width={"42px"}
                      onMouseOver={() => setLinkedinIcon(linkedinOnHover)}
                      onMouseOut={() => setLinkedinIcon(linkedin)}
                    />
                  </a>
                </Tooltip>
              </div>
              <div className="social-icons-github ms-2 me-2">
                <Tooltip text="Github" placement="bottom">
                  <a
                    href="https://github.com/Lena-Kalmikov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubIcon}
                      alt="github"
                      width={"42px"}
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
                      width={"42px"}
                      onMouseOver={() => setWhatsappIcon(whatsappOnHover)}
                      onMouseOut={() => setWhatsappIcon(whatsapp)}
                    />
                  </a>
                </Tooltip>
              </div>
            </ul>
          </div>

          {/* contact form */}
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
                    placeholder="Write your message here."
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        class="spinner-border spinner-border-sm align-self-center me-2"
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
