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
			</div>
			<div className="top">
				<div className="left">
					<img src={project.image} alt="showcase" />
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
						<a className="link" href={project.demoLink} target="_blank">
							<p>Live Demo</p>
							<FiExternalLink className="icon" />
						</a>
					</div>
				</div>
			</div>
			{/* <div className="bottom">
				{project.techStack.map((tech) => (
					<p className="tech">{tech}</p>
				))}
			</div> */}
		</div>
	);
};

export default Project;
