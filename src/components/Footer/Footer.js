import "../Sections/Section.css";
import './Footer.css';

import ContactForm from "../ContactForm/ContactForm";

export default function Footer() {
    return (
        <footer id="contact-section" className="section-neon">
            <h2>Contact Me.</h2>
            <div id="contact-links" className="flex-column align-center justify-center">
                <a href="mailto:jacobmedina1618@gmail.com" className="contact-link"><span>Email</span></a>
                <a href="https://linkedin.com/in/jacob-medina-78b709268" className="contact-link" target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
                <a href="https://github.com/Jacob-Medina" className="contact-link" target="_blank" rel="noreferrer"><span>Github</span></a>
            </div>
            {/* <ContactForm /> */}
            <div className="footer-copyright justify-center">
                <p>©<time dateTime="2023">2023</time> Jacob Medina</p>
            </div>
        </footer>
    )
}