import { SiDjango, SiExpress, SiJavascript, SiNextdotjs, SiPostgresql, SiPrisma, SiSass, SiTypescript } from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import styles from "./style.module.scss";

interface TechProps {
    tech: string;
}

export const TechCard = ({tech}: TechProps) => {

    const icon = (techName: string) => {
        switch(tech.toLowerCase()) {
        case "html5":
            return <FaHtml5 />;
        case "css3":
            return <FaCss3 />;
        case "es6":
            return <SiJavascript />;
        case "typescript":
            return <SiTypescript />;
        case "react":
            return <FaReact />;
        case "nodejs":
            return <FaNodeJs />;
        case "nextjs":
            return <SiNextdotjs />;
        case "sass":
            return <SiSass />;
        case "prisma":
            return <SiPrisma />;
        case "postgresql":
            return <SiPostgresql />;
        case "express":
            return <SiExpress />;
        case "python":
            return <FaPython />;
        case "django":
            return <SiDjango />;
        }
    }

    return (
        <li className={`${styles.techCard} tech-card`}>
            {icon(tech)}
            <span>{tech}</span>
        </li>
    )
};