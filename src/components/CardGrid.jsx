import Card from "./Card.jsx";

export default function CardGrid({
    items,
    compact = false,
}) {
    const gridClass = compact
        ? "cards cards--compact"
        : "cards";

    return (
        <section>
            <h2 className="main__title">
                Останні новини
            </h2>

            <div className={gridClass}>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </section>
    );
}