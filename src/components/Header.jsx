export default function Header() {
    return (
        <header className="header">
            <h1
                className="header__title"
                style={{
                    color: "var(--brand)",
                }}
            >
                Лабораторна робота №9
            </h1>

            <nav className="nav">
                <a href="#" className="nav__link">
                    Головна
                </a>

                <a href="#" className="nav__link">
                    Новини
                </a>

                <a href="#" className="nav__link">
                    Про нас
                </a>
            </nav>
        </header>
    );
}