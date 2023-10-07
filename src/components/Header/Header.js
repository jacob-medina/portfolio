import "./Header.css";

import Navigation from "./Navigation/Navigation";

export default function Header() {
    return (
        <header>
            <div id="hero-shot">
                <h1>Jacob Medina</h1>
                <p>Full Stack Web Developer</p>

                <Navigation />
            </div>
        </header>
    );
}