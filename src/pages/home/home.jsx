import React from "react";
import Wave from "../../assets/wave.svg";
import ReactTypingEffect from "react-typing-effect";
import "./home.css";
import Resume from "../../assets/VarshithResume.pdf";
import GitHub from "../../assets/github.svg";
import GitHubDark from "../../assets/githubDark.svg";
import Insta from "../../assets/instagram.svg";
import InstaDark from "../../assets/instagramDark.svg";

import LinkedIn from "../../assets/linkedin.svg";
import LinkedInDark from "../../assets/linkedinDark.svg";

import { Link } from "react-scroll";
// import Blob from "../../assets/blob.svg";

export default function Home(props) {
  const { theme, setTheme } = props;
  const handelTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };
  return (
    <div className="" id="home">
      <div className={`details homePage`}>
        <div className="container xfg1">
          <div className="contacticons">
            <a target="_blank" href="https://github.com/varshithreddy28">
              <img src={theme ? GitHub : GitHubDark} alt="Link To git hub" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/varshith-reddy-3967131bb/"
            >
              <img
                src={theme ? LinkedIn : LinkedInDark}
                alt="Link to Linked In"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/codenddevs/">
              <img src={theme ? Insta : InstaDark} alt="Link To instagram" />
            </a>
          </div>
          <div className="details">
            <span className="intro">
              Hello, {`I'm  `}
              <span id="name">
                {" "}
                <span
                  style={{ marginLeft: "10px" }}
                  className="highlightletter"
                >
                  V
                </span>
                arshith <span className="highlightletter">R</span>eddy
              </span>
            </span>
          </div>
          <div className="typeeffect">
            <ReactTypingEffect
              text={[
                "Enthusiastic Dev",
                "Full Stack Developer",
                "React Developer",
              ]}
              speed={200}
              eraseDelay={400}
              typingDelay={200}
            />
          </div>
          <div className="discription">
            <span>
              I am a self-taught programmer, so I can adapt to the problem that
              A project might have. I'm passionate about programming, so I'm
              always enthusiastic about learning new things.
            </span>
          </div>
          <div className="contactme">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              id="hireme"
            >
              Hire Me
            </Link>
            <a href={Resume} download>
              <button id="getresume">Get Resume</button>
            </a>
          </div>

          <div className="blob">
            <div className="orderUpdate">
              <label className="switch">
                <input
                  type="checkbox"
                  // value={check}
                  onClick={() => handelTheme()}
                  checked={theme ? null : true}
                />
                <span className="slider round"></span>
                {/* <div style={{ marginTop: "10px" }}>
              <span className="mode">Delivered</span>
            </div> */}
              </label>
            </div>
          </div>
        </div>
        {/* <div className="bottomHome">
          <img src={Wave} alt="" />
        </div> */}
      </div>
    </div>
  );
}
