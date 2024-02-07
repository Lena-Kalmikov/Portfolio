import React from "react";
// import Typewriter from "typewriter-effect";
import videoBackground from "../videos/home.mp4";
// import imageBackground from "../videos/home.gif";

const Home = ({ handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-7 bg-dark" />

        {/* ---------------image background------------------ */}

        {/* <div
          className="hero-bg parallax image-bg"
          // style={{
          //   backgroundImage: 'url("images/home.gif")',
          // }}
        >
          <img
            src={imageBackground}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div> */}

        {/* -------------------video background---------------------- */}

        <div
          className="player hero-bg parallax video-bg"
          style={{position: "fixed"}}
        >
          <video
            src={videoBackground}
            playsInline
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            preload="yes"
            type="video/mp4"
            backgroundColor="black"
          ></video>
        </div>

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-8 fw-500 text-white">Hey there,</p>
                <h2
                  className="text-11 fw-600 text-white"
                  style={{ marginTop: "-20px" }}
                >
                  {/* <Typewriter
                    options={{
                      strings: [
                        "I'm Lena Kalmikov.",
                        "I'm a Full-Stack developer.",
                        "I'm a Front-End developer.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  /> */}
                  I'm Lena Kalmikov, <br />a Full-Stack developer
                </h2>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
