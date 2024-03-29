import Project from "../Project/Project"


const projects = [
    {
        id: 1,
        title: "Examium",
        description: "A collaborative and customizable quiz platform that allows users to create and take tests, incorporating the OpenAI API for coding question evaluation. Built using React + Vite, Tailwind, Clerk, Supabase, Node.js, Prisma and MySQL.",
        githubLink: "https://github.com/MDBossss/examium",
        demoLink: "",
        techStack: ["React + Vite","Tailwind","TypeScript","Node.js","Express.js","Clerk","Supabase","Prisma","MySQL"],
        image: "/examium.png"
    },
    {
        id: 2,
        title: "HotelHub",
        description: "HotelHub is a fullstack hotel room reservation app which allows users to browse, filter and book a variety of hotel rooms across multiple locations, as well as look at other people's reviews and posts. Built using React + Vite, TypeScript, SASS, Node.js, Express.js and Supabase.",
        githubLink: "https://github.com/MDBossss/HotelHub",
        demoLink: "https://hotel-hub-client.vercel.app/",
        techStack: ["React + Vite","SASS", "TypeScript", "Node.js", "Express.js","Supabase"],
        image: "/hotelhub.png"
    },
    {
        id: 3,
        title: "Hotcoin",
        description: "Hotcoin is a React project focused on cryptocurrency data. Using multiple api's it displays latest crypto-related news as well as top 100 cryptocurrencies along with their price data. The app utilizes Firebase for user auth and data storage.",
        githubLink: "https://github.com/MDBossss/hotcoin",
        demoLink: "https://hotcoin.vercel.app/",
        techStack: ["React","SASS","Firebase"],
        image: "/hotcoin.png"
    },
    {
        id: 4,
        title: "xoOnline",
        description: "xoOnline is a simple tic-tac-toe game with online multiplayer support where players can create new rooms and seamlessly connect to existing ones with a quick-join feature. Built using React + Vite, SASS, Node.js, Express.js and socket.io",
        githubLink: "https://github.com/MDBossss/xoOnline",
        demoLink: "https://xo-online.vercel.app/",
        techStack: ["React + Vite","SASS", "Node.js", "Express.js","socket.io"],
        image: "/xoonline.png"
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