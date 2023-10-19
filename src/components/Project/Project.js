import "./Project.css";

import Tag from "../common/Tag/Tag";

import { projectPreviews } from "../../images";

import LinkButton from '../common/LinkButton/LinkButton';

export default function Project({ projectId, projectName, description, deployLink, repoLink, previewImg, toolsUsed }) {
    return (
        <div className="project" id={`project-${projectId}`}>
            <h3>{projectName}</h3>
            <div className="flex-column justify-center align-center">
                {/* Image */}
                <a className="project-img-link" href={deployLink} target="_blank" rel="noreferrer">
                    <img src={projectPreviews[previewImg]} alt={`${projectName} Preview`} />
                </a>

                <div className="spacer"></div>

                {/* Description */}
                <div className="project-description">
                    <p>{description}</p>
                    <br />
                    <div className="justify-center-then-start flex-column align-center">
                        <LinkButton href={deployLink} icon="language" mode="light">Live Site</LinkButton>
                        <LinkButton href={repoLink} icon="code" mode="dark">See Code</LinkButton>
                    </div>

                    <br />
                    
                    <div className="justify-center-then-start flex-column align-center">
                        <h4>What I Used</h4>
                    </div>
                    <div className="justify-center-then-start flex-wrap">
                        {toolsUsed.map((tool, i) => (
                            <Tag key={i}>{tool}</Tag>
                        ))}
                        {/* <ToolLogos tools={toolsUsed} /> */}
                    </div>
                </div>
            </div>
        </div>

    )
}
