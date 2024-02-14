import React from "react";

const Home = ({ handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-7 bg-dark" />
        <div
          className="player hero-bg parallax video-bg"
          style={{ position: "fixed" }}
        >
          <video
            src="https://firebasestorage.googleapis.com/v0/b/lena-kalmikov-portfolio.appspot.com/o/home.mp4?alt=media&token=8e5b16e7-771d-419c-b714-0f7cd6fafbcd"
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
                  I'm Lena Kalmikov, <br />a Front-End developer
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
