import './IconButton.css';

export default function IconButton({ children, icon, mode="light" }) {
    return (
        <button className={`icon-btn btn-${mode}`}>
            <span className='icon-btn-icon material-symbols-rounded'>{icon}</span>
            <span className="icon-btn-text">{children}</span>
        </button>
    );
}