import logos from '../../images/logos';
import './ToolLogos.css';

const allTools = Object.keys(logos).map((logo, i) => {
    return {
        id: i,
        name: logo,
        src: logos[logo],
    }
});

export default function ToolLogos({ tools }) {
    const usedTools = allTools.filter(t => tools.includes(t.name));

    return (
        <>
            {usedTools.map(tool =>
                <img className="tool-logo" src={tool.src} alt={tool.name} key={tool.id} />
            )}
        </>
    );
}