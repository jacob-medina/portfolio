import "./LinkButton.css";
import IconButton from "../IconButton/IconButton";

export default function LinkButton({ children, href, icon, mode="light" }) {
    return (
        <form className="link-btn" action={href} target="_blank" method="get">
            <IconButton icon={icon} mode={mode}>{children}</IconButton>
        </form>
    )
}