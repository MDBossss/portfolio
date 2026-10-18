import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "../Button/Button";

const Introduction = () => {
  return (
    <div className="container introduction">
      <div className="links">
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="hero">
        <div className="left">
          <h1>
            <span>Hello, I'm Mislav.</span> <br /> Software{" "}
            <span className="gradient">Engineer.</span>
          </h1>
          <p className="small-about">
            I build software end to end, from the database to the interface,
            and tools that solve real problems, like planning my own house.
          </p>
          <div className="socials">
            <a href="https://github.com/MDBossss" target="_blank">
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/mislavdobrinic/"
              target="_blank"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <img src="/me.jpeg" alt="me" />
        </div>
      </div>
      <div className="resume">
        <a href="/MislavDobrinicCV_eng.pdf" download="MislavDobrinicCV_eng.pdf">
          <Button
            className="button"
            text="Download CV"
            icon={<AiOutlineDownload style={{ fontSize: "22px" }} />}
          />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
