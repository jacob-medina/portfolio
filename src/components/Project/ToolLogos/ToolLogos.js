import { logos } from '../../../images';
import './ToolLogos.css';

export default function ToolLogos({ tools }) {
    const toolLogos = tools.map((tool, i) => {
        const logo = logos[tool];
        if (!logo) return { id: i };

        return {
            id: i,
            name: tool,
            src: logo,
        }
    });

    return (
        <>
            {toolLogos.map(tool =>
                <img className="tool-logo" src={tool.src} alt={tool.name} key={tool.id} />
            )}
        </>
    );
}