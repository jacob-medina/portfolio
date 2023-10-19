import "../Section.css";
import "./AboutSection.css";

import { jacobPhoto } from "../../../images";

import LinkButton from "../../common/LinkButton/LinkButton";
import Skill from "./Skill/Skill";

export default function AboutSection() {
    return (
        <section id="about-section">
            <div className="about-flex-column align-center">
                <div id="jacob-photo-wrapper">
                    <img id="jacob-photo" src={jacobPhoto} alt="Jacob Medina" />
                </div>
                <div className="section-light">
                    <div className="container">
                        <h2>Hi!</h2>
                        <div className="flex-column">
                            <div id="jacob-description-container">
                            <h3>I like <span className="highlight">problems</span>.</h3>
                            <p>
                                I solve them every day with <strong>clean, organized code</strong>. I've got a knack for detail, consistency, and getting the job done.
                            </p>
                            <p>
                                When I'm not doing web development, I build video games, create YouTube videos, and cook homemade recipes.
                            </p>
                            {/* <button class="button-centered button-light"><span class="button-resume">Resume</span></button> */}
                            <br />
                            </div>
                            
                        </div>
                        <div className="justify-start">
                            <LinkButton
                                href="https://drive.google.com/file/d/1NDCBzt-h-ClN9vPTnMICYr87FJE9XF9m/view"
                                icon="description"
                                mode="light"
                                className="btn-centered"
                            >
                                Resume
                            </LinkButton>
                        </div>
                    </div>

                </div>

            </div>

            <div className="section-light">
                <div className="container skills-container">
                    <h2>Skills</h2>
                    <div className="skills-languages-container">
                        <h4>Languages</h4>
                        <div className="skills-languages">
                            <Skill skill="JavaScript" />
                            <Skill skill="HTML" />
                            <Skill skill="CSS" />
                            <Skill skill="Python" />
                            <Skill skill="SQL" />
                        </div>
                    </div>

                    <h4 className="skill-frameworks-heading">Frameworks</h4>
                    <div className="skills-frameworks">
                        <Skill skill="MongoDB" />
                        <Skill skill="Express" />
                        <Skill skill="React" />
                        <Skill skill="Bootstrap" />
                        <Skill skill="jQuery" />
                        <Skill skill="Git" />
                    </div>
                </div>
            </div>
        </section>

    )
}