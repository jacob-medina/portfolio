import "./Navigation.css";

export default function Nav({ visibleSections: { project: projectVisible=false, contact: contactVisible=false} }) {
    const onlyProjectVisible = projectVisible && (!contactVisible);

    return (
        <nav className={`nav-container ${projectVisible && "nav-container-border"}`}>
            <ul className="nav-items justify-center-then-end">
                <li className="nav-item">
                    <a className={`code ${onlyProjectVisible && "nav-item-hover"}`} href="#project-section">
                        {onlyProjectVisible && <span>⋅</span>}
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a className={`code ${contactVisible && "nav-item-hover"}`} href="#contact-section">
                        {contactVisible && <span>⋅</span>}
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a className="code" href="https://drive.google.com/file/d/1NDCBzt-h-ClN9vPTnMICYr87FJE9XF9m/view" target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    );
}