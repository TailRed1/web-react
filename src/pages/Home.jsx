import { useState } from "react";

import CardGrid from "../components/CardGrid.jsx";
import Toggle from "../components/Toggle.jsx";

import { news } from "../data/news.js";

export default function Home() {
    const [compact, setCompact] =
        useState(false);

    function handleToggle() {
        setCompact((current) => !current);
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent:
                        "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                }}
            >
                <h2>
                    Головна
                </h2>

                <Toggle
                    compact={compact}
                    onToggle={handleToggle}
                />
            </div>

            <CardGrid
                items={news}
                compact={compact}
            />
        </>
    );
}