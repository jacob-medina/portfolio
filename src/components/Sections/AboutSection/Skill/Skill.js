import './Skill.css';
import { logos } from '../../../../images';

export default function Skill({ skill }) {
    return (
        <div className='skill'>
            {logos[skill]}
            <p className='skill-text'>{skill}</p>
        </div>
    )
}