import React from "react";
import Wave from "../../assets/wave.svg";
import ReactTypingEffect from "react-typing-effect";
import "./home.css";
import Resume from "../../assets/VarshithResume.pdf";
import GitHub from "../../assets/github.svg";
import Insta from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="homePage" id="home">
      <div className="details">
        <div className="container xfg1">
          <div className="contacticons">
            <a target="_blank" href="https://github.com/varshithreddy28">
              <img src={GitHub} alt="Link To git hub" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/varshith-reddy-3967131bb/"
            >
              <img src={LinkedIn} alt="Link to Linked In" />
            </a>
            <a target="_blank" href="https://www.instagram.com/codenddevs/">
              <img src={Insta} alt="Link To instagram" />
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
              A project might have. I am passionate about programming that's why
              I am always excited to learn new things.
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
        </div>
        {/* <div className="bottomHome">
          <img src={Wave} alt="" />
        </div> */}
      </div>
    </div>
  );
}
