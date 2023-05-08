"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string;
    delay?: number;
}

export default function Typewriter({ text, delay = 150 }: TypewriterProps) {
    const [typing, setTyping] = useState("");
    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex === text.length) {
                clearInterval(intervalId);
                return;
            }

            setTyping(text.slice(0, currentIndex + 1));
            currentIndex += 1;
        }, delay);

        return () => clearInterval(intervalId);
    }, [text, delay]);
    return <span className="text-lg font-bold bg-white text-black">{typing}</span>;
}
