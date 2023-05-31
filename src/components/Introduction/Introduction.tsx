import {FaLinkedin,FaGithub} from "react-icons/fa";
import {AiOutlineDownload} from "react-icons/ai";
import Button from "../Button/Button";

const Introduction = () => {
  return (
    <div className="container introduction">
        <div className="links">
                <p>About me</p>
                <p>Projects</p>
        </div>
        <div className="hero">
            <div className="left">
                <h1><span>Hello, I'm Mislav.</span> <br/> Front-End React <span className="gradient">Developer.</span></h1>
                <div className="socials">
                    <FaGithub className="icon"/>
                    <FaLinkedin className="icon"/>
                </div>
            </div>
            <div className="right">
                <img src="/me.jpg" alt="me" />
            </div>
        </div>
        <div className="resume">
            <Button text="Resume" icon={<AiOutlineDownload style={{fontSize:"22px"}}/>}/>
        </div>
    </div>
  )
}

export default Introduction