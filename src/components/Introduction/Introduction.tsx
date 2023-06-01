import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
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
					<h1>
						<span>Hello, I'm Mislav.</span> <br /> Front-End React{" "}
						<span className="gradient">Developer.</span>
					</h1>
					<p className="small-about">
						With a keen eye for detail and a passion for clean code, I focus on
						developing rich web applications and seamless web experiences.
					</p>
					<div className="socials">
						<a href="https://github.com/MDBossss" target="_blank">
							<FaGithub className="icon" />
						</a>
						<a href="https://www.linkedin.com/in/mislav-dobrinic/" target="_blank">
							<FaLinkedin className="icon" />
						</a>
					</div>
				</div>
				<div className="right">
					<img src="/me.jpg" alt="me" />
				</div>
			</div>
			<div className="resume">
				<Button
					className="button"
					text="Download CV"
					icon={<AiOutlineDownload style={{ fontSize: "22px" }} />}
				/>
			</div>
		</div>
	);
};

export default Introduction;
