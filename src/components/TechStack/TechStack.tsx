import TechIcon from "../TechIcon/TechIcon"
import {FaHtml5,FaCss3Alt,FaSass,FaReact} from "react-icons/fa";
import {SiTailwindcss,SiJavascript,SiTypescript,SiMysql,SiFirebase,SiSupabase} from "react-icons/si";

const TechStack = () => {
  return (
    <div className="tech-stack-wrapper">
        <div className="container tech-stack">
            <TechIcon text="HTML" icon={<FaHtml5/>}/>
            <TechIcon text="CSS" icon={<FaCss3Alt/>}/>
            <TechIcon text="Sass" icon={<FaSass/>}/>
            <TechIcon text="Tailwind" icon={<SiTailwindcss/>}/>
            <TechIcon text="Javascript" icon={<SiJavascript/>}/>
            <TechIcon text="Typescript" icon={<SiTypescript/>}/>
            <TechIcon text="React" icon={<FaReact/>}/>
            <TechIcon text="MySQL" icon={<SiMysql/>}/>
            <TechIcon text="Firebase" icon={<SiFirebase/>}/>
            <TechIcon text="Supabase" icon={<SiSupabase/>}/>
        </div>
    </div>
  )
}

export default TechStack