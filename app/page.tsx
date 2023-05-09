"use client";
import Typewriter from "@/components/Typewriter";
import { useEffect, useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);

    const lines = [
        "THE VOIVE : Officer KD6 -3.7, let's begin. Ready?",
        "THE VOIVE : Recite your baseline.",
        "YOU : And blood-black nothingness began to spin",
        "YOU : A system of cells interlinked within cells interlinked within cells interlinked within one stem",
        "YOU : And dreadfully distinct against the dark, a tall white fountain played.",
    ];

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            setCount((prevCount) => prevCount + 1);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div>
            <h1>Press Enter to continue</h1>
            {lines.slice(0, count).map((line, index) => (
                <p key={index}><Typewriter text={line} /></p>
            ))}
        </div>
    );
}
