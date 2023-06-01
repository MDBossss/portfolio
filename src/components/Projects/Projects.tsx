import Project from "../Project/Project"


const projects = [
    {
        id: 1,
        title: "HotelHub",
        description: "HotelHub is a fullstack hotel room reservation app which allows users to browse, filter and book a variety of hotel rooms across multiple locations, as well as look at other people's reviews and posts. Built using React + Vite, TypeScript, SASS, Node.js, Express.js and Supabase.",
        githubLink: "https://github.com/MDBossss/HotelHub",
        demoLink: "https://hotel-hub-client.vercel.app/",
        techStack: ["React + Vite","SASS", "TypeScript", "Node.js", "Express.js","Supabase"],
        image: "/hotelhub.png"
    },
    {
        id: 2,
        title: "Hotcoin",
        description: "Hotcoin is a React project focused on cryptocurrency data. Using multiple api's it displays latest crypto-related news as well as top 100 cryptocurrencies along with their price data. The app utilizes Firebase for user auth and data storage.",
        githubLink: "https://github.com/MDBossss/hotcoin",
        demoLink: "https://hotcoin.vercel.app/",
        techStack: ["React","Firebase"],
        image: "/hotcoin.png"
    },
    {
        id: 3,
        title: "xoOnline",
        description: "xoOnline is a simple tic-tac-toe game with online multiplayer support where players can create new rooms and seamlessly connect to existing ones with a quick-join feature. Built using React + Vite, SASS, Node.js, Express.js and socket.io",
        githubLink: "https://github.com/MDBossss/xoOnline",
        demoLink: "https://hotel-hub-client.vercel.app/",
        techStack: ["React + Vite","SASS", "Node.js", "Express.js","socket.io"],
        image: "/xoonline.png"
    },
    
    {
        id: 4,
        title: "Span Hackathon 2023",
        description: "This is an unfinished full stack cyber security app made by a team of 5 during Span's 24h Hackathon, which got awarded 3rd place. Built with React + Vite, SASS, Firebase, Node.js, Express.js, MySQL. ",
        githubLink: "https://github.com/Lovakovic/spanHackathon",
        demoLink: "https://hotcoin.vercel.app/",
        techStack: ["React + Vite","SASS", "Firebase", "Node.js","Express.js","MySQL"],
        image: "/hackathon.png"
    },
]


const Projects = () => {
  return (
    <div className="container projects">
        {projects.map((project) => (
            <Project key={project.id} project={project}/>
        ))}
    </div>
  )
}

export default Projects