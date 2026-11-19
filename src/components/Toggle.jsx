export default function Toggle({
    compact,
    onToggle,
}) {
    return (
        <button
            type="button"
            onClick={onToggle}
        >
            {compact
                ? "Звичайний режим"
                : "Компактний режим"}
        </button>
    );
}