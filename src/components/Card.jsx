export default function Card({ item }) {
    const date = new Date(item.date);

    return (
        <article className="card">
            <img
                className="card__media"
                src={item.img}
                alt={item.title}
                loading="lazy"
            />

            <div className="card__body">
                <h3 className="card__title">
                    {item.title}
                </h3>

                <p className="card__excerpt">
                    {item.excerpt}
                </p>

                <div className="card__meta">
                    <span>
                        {date.toLocaleDateString("uk-UA")}
                    </span>

                    <a href="#">
                        Читати далі
                    </a>
                </div>
            </div>
        </article>
    );
}