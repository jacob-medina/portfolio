import './Skill.css';
import ToolLogo from '../../../Project/ToolLogo/ToolLogo';
import Tag from "../../../common/Tag/Tag.js";

export default function Skill({ skill }) {
    return (
        <div className='skill'>
            {/* <Tag> */}
                <ToolLogo logo={skill} className='skill-logo' />
                <p className='skill-text'>{skill}</p>

            {/* </Tag> */}
        </div>
    )
}