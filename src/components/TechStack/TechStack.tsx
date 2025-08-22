import TechIcon from "../TechIcon/TechIcon";
import { FaSass, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiGraphql,
  SiStrapi,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="tech-stack-wrapper">
      <div className="container tech-stack">
        <TechIcon text="Sass" icon={<FaSass />} />
        <TechIcon text="Tailwind" icon={<SiTailwindcss />} />
        <TechIcon text="Typescript" icon={<SiTypescript />} />
        <TechIcon text="React" icon={<FaReact />} />
        <TechIcon text="Figma" icon={<SiFigma />} />
        <TechIcon text="NextJS" icon={<TbBrandNextjs />} />
        <TechIcon text="Node.js" icon={<FaNode />} />
        <TechIcon text="Prisma" icon={<SiPrisma />} />
        <TechIcon text="GraphQL" icon={<SiGraphql />} />
        <TechIcon text="Strapi" icon={<SiStrapi />} />
      </div>
    </div>
  );
};

export default TechStack;
