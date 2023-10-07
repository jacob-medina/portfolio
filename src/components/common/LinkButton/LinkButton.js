import "./LinkButton.css";
import IconButton from "../IconButton/IconButton";

export default function LinkButton({ children, href, newPage=true, icon, mode="light" }) {
    const target = newPage ? "_blank" : "_self";
    const rel = newPage ? "noreferrer" : "";

    // if (newPage) return (
    //     <form className="link-btn" action={href} target="_blank" method="get">
    //         <IconButton icon={icon} mode={mode}>{children}</IconButton>
    //     </form>
    // );

    return (
        <a className="link-btn" href={href} target={target} rel={rel}>
            <IconButton icon={icon} mode={mode}>{children}</IconButton>
        </a>
    )
}