import Project from "../Project/Project"


const projects = [
    {
        id: 1,
        title: "HotelHub",
        description: "HotelHub is a fullstack hotel room reservation app which allows users to browse, filter and book a variety of hotel rooms across multiple locations.",
        githubLink: "https://github.com/MDBossss/HotelHub",
        demoLink: "https://hotel-hub-client.vercel.app/",
        techStack: ["React + Vite","SASS", "TypeScript", "Node.js", "Express.js","Supabase"],
        image: "/hotelhub-showcase.png"
    }
]


const Projects = () => {
  return (
    <div className="container projects">
        {projects.map((project) => (
            <Project project={project}/>
        ))}
    </div>
  )
}

export default Projects