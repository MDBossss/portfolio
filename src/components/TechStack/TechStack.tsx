import TechIcon from "../TechIcon/TechIcon";
import { FaSass, FaReact } from "react-icons/fa";
import {
	SiJavascript,
	SiTailwindcss,
	SiTypescript,
	SiMysql,
	SiFirebase,
	SiSupabase,
	SiPrisma,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const TechStack = () => {
	return (
		<div className="tech-stack-wrapper">
			<div className="container tech-stack">
				<TechIcon text="Sass" icon={<FaSass />} />
				<TechIcon text="Tailwind" icon={<SiTailwindcss />} />
				<TechIcon text="Javascript" icon={<SiJavascript />} />
				<TechIcon text="Typescript" icon={<SiTypescript />} />
				<TechIcon text="React" icon={<FaReact />} />
				<TechIcon text="Node.js" icon={<FaNode />} />
				<TechIcon text="Prisma" icon={<SiPrisma />} />
				<TechIcon text="MySQL" icon={<SiMysql />} />
				<TechIcon text="Firebase" icon={<SiFirebase />} />
				<TechIcon text="Supabase" icon={<SiSupabase />} />
			</div>
		</div>
	);
};

export default TechStack;
