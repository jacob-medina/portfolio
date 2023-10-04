import ToolLogos from "./ToolLogos/ToolLogos";

export default function Project({ projectName, description, deployLink, repoLink, previewImg, toolsUsed }) {
    return (
        <div className="project">
            <h3>Rateit</h3>
            <div className="flex-column justify-center align-center">
                {/* Image */}
                <a className="project-img-link" href={deployLink} target="_blank" rel="noreferrer">
                    <img src={previewImg} alt={`${projectName} Preview`} />
                </a>

                <div className="spacer"></div>

                {/* Description */}
                <div className="project-description">
                    <p>{description}</p>
                    <br />
                    <div className="justify-center-then-start flex-column align-center">
                        <a href={deployLink} target="_blank" rel="noreferrer">
                            <button className="button-light"><span className="button-live-site">Live Site</span></button>
                        </a>
                        <a href={repoLink} target="_blank" rel="noreferrer">
                            <button className="button-dark"><span className="button-code">See Code</span></button>
                        </a>
                    </div>

                    <br />
                    
                    <div className="justify-center-then-start flex-column align-center">
                        <h4>What I Used</h4>
                    </div>
                    <div className="justify-center-then-start">
                        <ToolLogos tools={toolsUsed} />
                    </div>
                </div>
            </div>
        </div>

    )
}
