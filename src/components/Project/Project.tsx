import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

interface Props {
	project: {
		id: number;
		title: string;
		description: string;
		githubLink: string;
		demoLink: string;
		techStack: string[];
		image: string;
	};
}

const Project = ({ project }: Props) => {
	return (
		<div className="project">
			<div className="project-number">
				<h3>{`PROJECT_0${project.id}`}</h3>
				<div className="tech-wrapper">
					{project.techStack.map((tech, index) => (
						<p className="tech" key={index}>
							{tech}
						</p>
					))}
				</div>
			</div>
			<div className="top">
				<div className="left">
					<a href={project.demoLink} target="_blank">
						<img src={project.image} alt="showcase" />
					</a>
				</div>
				<div className="right">
					<div className="title">
						<h2>{project.title}</h2>
					</div>
					<div className="description">
						<p>{project.description}</p>
					</div>
					<div className="links">
						<a className="link" href={project.githubLink} target="_blank">
							<p>Code</p>
							<AiFillGithub className="icon" />
						</a>
						{project.demoLink !== "" && (
							<a className="link" href={project.demoLink} target="_blank">
								<p>Live Demo</p>
								<FiExternalLink className="icon" />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
