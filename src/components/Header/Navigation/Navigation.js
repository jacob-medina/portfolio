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
                newPage={false}
                icon="person"
                mode="light" 
                className="btn-centered"  
            >
                Contact
            </LinkButton>
        </nav>
    );
}