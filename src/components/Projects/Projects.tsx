import Project from "../Project/Project"


const projects = [
    {
        id: 1,
        title: "Obrub",
        description: "A curb planner for yards and driveways. Import a Photoshop outline or draw the shapes, mark where the concrete curbs go, and get every piece, cut and mitre worked out, with the cost and an A4 printout. Built with React, TypeScript and an SVG canvas.",
        githubLink: "https://github.com/MDBossss/obrub",
        demoLink: "",
        techStack: ["React + Vite","TypeScript","SVG","Zustand","Playwright"],
        image: "/obrub.png"
    },
    {
        id: 2,
        title: "Trasa",
        description: "A wiring planner for a house. Draw conduits over the floor plan, lay out junction boxes with WAGO connectors to scale, plan Shelly and Sonoff smart switches, and get a full parts list. Built with React, TypeScript and Konva, hosted on Cloudflare.",
        githubLink: "https://github.com/MDBossss/trasa",
        demoLink: "https://trasa.trasa-auth.workers.dev/",
        techStack: ["React + Vite","TypeScript","Konva","Zustand","Cloudflare Workers"],
        image: "/trasa.png"
    },
    {
        id: 3,
        title: "Sentio",
        description: "Describe your mood and Sentio builds a playlist for it with GPT-4o, finds every song on YouTube and plays it in the app. The frontend is four micro-frontends in React, Vue and Solid, joined at runtime with Module Federation.",
        githubLink: "https://github.com/MDBossss/sentio",
        demoLink: "",
        techStack: ["React","Vue.js","Solid.js","Module Federation","Node.js","Express.js","Prisma","OpenAI","Clerk"],
        image: "/sentio.png"
    },
    {
        id: 4,
        title: "Examium",
        description: "A collaborative and customizable quiz platform that allows users to create and take tests, incorporating the OpenAI API for coding question evaluation. Built using React + Vite, Tailwind, Clerk, Supabase, Node.js, Prisma and MySQL.",
        githubLink: "https://github.com/MDBossss/examium",
        demoLink: "",
        techStack: ["React + Vite","Tailwind","TypeScript","Node.js","Express.js","Clerk","Supabase","Prisma","MySQL"],
        image: "/examium.png"
    },
    {
        id: 5,
        title: "Span Hackathon 2023 app",
        description: "This is a full stack cyber security dashboard app made by a team of 5 during Span's 24h Hackathon, which got awarded 3rd place. Built with React + Vite, SASS, Firebase, Node.js, Express.js, MySQL. ",
        githubLink: "https://github.com/Lovakovic/spanHackathon",
        demoLink: "https://shiny-duckanoo-86358f.netlify.app/",
        techStack: ["React + Vite","SASS", "Firebase", "Node.js","Express.js","MySQL"],
        image: "/hackathon.png"
    },
]


const Projects = () => {
  return (
    <div id="projects" className="container projects">
        {projects.map((project) => (
            <Project key={project.id} project={project}/>
        ))}
    </div>
  )
}

export default Projects