import { motion } from 'framer-motion';

export default function GlitchText({ text }) {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-70 animate-glitch-1">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-70 animate-glitch-2">
                {text}
            </span>
        </div>
    );
}
