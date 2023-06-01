import {AiFillGithub} from "react-icons/ai";
import {FiExternalLink} from "react-icons/fi";

interface Props{
    project: {
        id: number,
        title: string,
        description: string,
        githubLink: string,
        demoLink: string,
        techStack: string[],
        image:string
    }
}


const Project = ({project}:Props) => {
  return (
    <div className="project">
        <div className="top">
            <div className="left">
                <img src={project.image} alt="showcase" />
            </div>
            <div className="right">
                <div className="title">{project.title}</div>
                <div className="description">{project.description}</div>
                <div className="links">
                    <a className="github" href={project.githubLink} target="_blank">
                        <p>Code</p>
                        <AiFillGithub/>
                    </a>
                    <a className="demo" href={project.demoLink} target="_blank">
                        <p>Live Demo</p>
                        <FiExternalLink/>
                    </a>
                </div>
            </div>
        </div>
        <div className="bottom">
            {project.techStack.map((tech) => (
                <p className="tech">{tech}</p>
            ))}
        </div>
    </div>
  )
}

export default Project