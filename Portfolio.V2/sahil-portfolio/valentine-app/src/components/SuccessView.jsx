import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

const SuccessView = () => {
    useEffect(() => {
        // Trigger confetti on mount
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Standard Confetti
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });

            // Emojis
            confetti({
                ...defaults,
                particleCount: 5,
                scalar: 2,
                shapes: ['text'],
                shapeOptions: {
                    text: {
                        value: ["❤️", "😘", "💖", "💕", "🌹"],
                    }
                },
                origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 }
            });

        }, 250);

        return () => clearInterval(interval);
    }, []);

    const handleEmail = () => {
        const email = "sahil.stha2003@gmail.com";
        const subject = "Valentine's Day Response ❤️";
        const body = "I said YES! When are you picking me up? 🥰";
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 font-sans text-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full border-4 border-red-200"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="mb-6"
                >
                    <Heart className="w-24 h-24 text-red-500 mx-auto" fill="currentColor" />
                </motion.div>

                <h1 className="text-4xl font-extrabold text-red-600 mb-6 drop-shadow-sm">Yay! I knew it! ❤️</h1>
                <p className="text-xl text-gray-700 mb-8 font-medium">
                    Best Valentine's Day ever!
                </p>

                <div className="flex flex-col gap-4 justify-center items-center">
                    <button
                        onClick={handleEmail}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                    >
                        <span>Send Email</span>
                        <span>💌</span>
                    </button>
                </div>

                <div className="text-6xl animate-bounce mt-8">
                    🥰
                </div>
            </motion.div>
        </div>
    );
};

export default SuccessView;
