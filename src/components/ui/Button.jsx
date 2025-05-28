export default function Button ({ handleClick, styleClass, children }) {
    return (
        <button
            onClick={handleClick}
            className={"btn " + styleClass}
        >
            {children}
        </button>
    );
}