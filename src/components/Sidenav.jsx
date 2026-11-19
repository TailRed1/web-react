export default function Sidenav() {
    return (
        <aside className="sidenav">
            <section className="sidebar">
                <h3 className="sidebar__title">
                    Меню
                </h3>

                <ul className="sidebar__list">
                    <li>
                        <a href="#">
                            Головна
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Новини
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Про нас
                        </a>
                    </li>
                </ul>
            </section>
        </aside>
    );
}