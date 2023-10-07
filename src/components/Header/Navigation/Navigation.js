import "./Navigation.css";

import LinkButton from "../../common/LinkButton/LinkButton";

export default function Nav() {
    return (
        <nav>
            <LinkButton
                href="#project-section"
                newPage={false}
                icon="work"
                mode="light" 
                className="btn-centered"  
            >
                Projects
            </LinkButton>
            <LinkButton
                href="https://drive.google.com/file/d/1NDCBzt-h-ClN9vPTnMICYr87FJE9XF9m/view"
                icon="description"
                mode="light" 
                className="btn-centered"  
            >
                Resume
            </LinkButton>
            <LinkButton
                href="#contact-section"
                icon="person"
                mode="light" 
                className="btn-centered"  
            >
                Contact
            </LinkButton>
            {/* <a href="#project-section" className="button-centered"> <button className="button-light"><span className="button-projects">Projects</span></button> </a>
            <a href="https://drive.google.com/file/d/1NDCBzt-h-ClN9vPTnMICYr87FJE9XF9m/view" target="_blank" className="button-centered"> <button className="button-light"><span className="button-resume">Resume</span></button> </a>
            <a href="#contact-section" className="button-centered"><button className="button-light"> <span className="button-contact">Contact</span></button> </a> */}
        </nav>
    );
}