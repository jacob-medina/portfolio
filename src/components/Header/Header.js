import "./Header.css";

import { useState } from "react";

import ToolLogo from "../Project/ToolLogo/ToolLogo";

export default function Header() {
    const [mernSubject, setMernSubject] = useState("MERN");

    const changeMernSubject = (event) => {
        const target = event.target.matches('svg') ? event.target : event.target.parentNode;
        const subject = target.getAttribute('logo') ?? "MERN";
        setMernSubject(subject);
    }

    return (
        <header>
            <div id="hero-shot">
                <div className="justify-center-then-start">
                    <h1>Jacob Medina</h1>
                </div>
                <div className="justify-center-then-start mern-icons-container">
                    {['MongoDB', 'Express', 'React', 'Node'].map((tool, key) => (
                        <ToolLogo key={key} logo={tool} className="mern-icon" onMouseEnter={changeMernSubject}  />
                    ))}
                    
                </div>
                <div className="justify-center-then-start">
                    {/* <span className="code highlight">{mernSubject}</span> */}
                    <span className="subtitle-1 code">Full Stack Developer using {mernSubject}.</span>
                </div>
            </div>
        </header>
    );
}