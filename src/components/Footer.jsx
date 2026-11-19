export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <p>
                    © {year} Лабораторна робота №9
                </p>

                <p>
                    React + Vite
                </p>
            </div>
        </footer>
    );
}