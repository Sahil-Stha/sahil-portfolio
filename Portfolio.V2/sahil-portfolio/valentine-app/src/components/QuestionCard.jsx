import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const QuestionCard = ({ onYes }) => {
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [yesBtnScale, setYesBtnScale] = useState(1);
    const [noBtnText, setNoBtnText] = useState("No");

    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;(",
    ];

    const handleNoHover = () => {
        // Generate random position between -150 and 150
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 300 - 150;
        setNoBtnPosition({ x, y });
        setYesBtnScale(prev => Math.min(prev + 0.2, 5)); // Grow up to 5x

        // Randomly select a new phrase
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setNoBtnText(phrases[randomIndex]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4 font-sans text-center overflow-hidden">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-2 border-red-100 z-10"
            >
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-bounce" fill="currentColor" />
                <h1 className="text-3xl font-bold text-red-600 mb-8">Will you be my Valentine?</h1>

                <div className="flex justify-center gap-8 items-center h-48">
                    <motion.button
                        onClick={onYes}
                        animate={{ scale: yesBtnScale }}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-transform text-lg shadow-md z-20"
                    >
                        Yes!
                    </motion.button>

                    <motion.div
                        animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <button
                            onMouseEnter={handleNoHover}
                            onTouchStart={handleNoHover} // For mobile
                            onClick={handleNoHover} // If clicked, it just moves again!
                            className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg text-lg shadow-md cursor-pointer whitespace-nowrap"
                        >
                            {noBtnText}
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Decorative floating hearts in background could go here */}
        </div>
    );
};

export default QuestionCard;
