import "./Header.css";

import { mern } from "../../images";
import { useEffect, useState } from "react";

export default function Header() {
    const [mernSubject, setMernSubject] = useState("MERN");
    const [hasInteracted, setHasInteracted] = useState(false);

    const changeMernSubject = (event) => {
        setMernSubject(event.target.getAttribute('alt'));
        setHasInteracted(true);
        // event.target.classList.add('mern-icon-hover');
    }
    
    const leaveMernSubject = (event) => {
        event.target.classList.remove('mern-icon-hover');
    }
    
    const icons = ['MongoDB', 'Express', 'React', 'Node'];
    let i = 0;
    // const interval = setInterval(() => {
    //     console.log(hasInteracted)
    //         if (hasInteracted) {
    //             clearInterval(interval);
    //             return;
    //         };
    //         setMernSubject(icons[i]);
    //         i++;
    //         if (i >= icons.length) i = 0;
    //     }, 1000)

    useEffect(() => {
        document.querySelectorAll('.mern-icon').forEach(icon => icon.classList.remove('mern-icon-hover'));
        document.querySelector(`.mern-icon[alt=${mernSubject}]`)?.classList.add('mern-icon-hover');
    }, [mernSubject])

    return (
        <header>
            <div id="hero-shot">
                <div className="justify-center-then-start">
                    <h1>Jacob Medina</h1>
                </div>
                    {/* <p className="subtitle-1">Full Stack Web Developer</p> */}
                    {/* onMouseLeave={() => setMernSubject("MERN")} */}
                    <div className="justify-center-then-start mern-icons-container">
                        <img src={mern.mongoDb} alt="MongoDB" className="mern-icon" onMouseOver={changeMernSubject} onMouseLeave={leaveMernSubject}></img>
                        <img src={mern.express} alt="Express" className="mern-icon" onMouseOver={changeMernSubject} onMouseLeave={leaveMernSubject}></img>
                        <img src={mern.react} alt="React" className="mern-icon" onMouseOver={changeMernSubject} onMouseLeave={leaveMernSubject}></img>
                        <img src={mern.node} alt="Node" className="mern-icon" onMouseOver={changeMernSubject} onMouseLeave={leaveMernSubject}></img>
                    </div>
                    <div className="justify-center-then-start">
                        <span className="subtitle-1 code">Full Stack Developer using <span className="code highlight">{mernSubject}</span>.</span>
                    </div>
            </div>
        </header>
    );
}