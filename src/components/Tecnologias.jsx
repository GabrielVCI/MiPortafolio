import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaJava, FaPaperPlane, FaProjectDiagram } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

import '../styles/global.css'
export default function Tecnologias() {
  return (
    <section id="tech" className="tech">
      <h2>Tecnologías</h2>
      <ul className="tech-list">
        <li><FaReact size={30} /> React</li>
        <li><FaNodeJs size={30} /> Node.js</li>
        <li><FaDatabase size={30} /> SQL Server</li>
        <li><FaGithub size={30} /> GitHub</li>
        <li><FaJava size={30} /> Java</li>
        <li><SiDotnet size={30} /> .NET Core</li>
        <li><FaPaperPlane size={30} /> Azure DevOps</li>
        <li><FaProjectDiagram size={30} /> Scrum</li>
      </ul>
    </section>
  );
}
