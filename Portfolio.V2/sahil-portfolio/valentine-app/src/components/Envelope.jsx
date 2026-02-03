import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Envelope = ({ onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(onOpen, 800); // Wait for animation before switching
    };

    return (
        <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative cursor-pointer group"
                onClick={!isOpen ? handleOpen : undefined}
            >
                {/* Envelope Body */}
                <div className="bg-red-500 w-64 h-48 md:w-80 md:h-60 relative z-10 shadow-2xl rounded-b-lg flex items-center justify-center">

                    {/* Flap (Top triangle) logic is complex with pure divs, using simpler graphic approach or CSS tricks */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] md:border-l-[160px] border-l-transparent border-t-[96px] md:border-t-[120px] border-t-red-600 border-r-[128px] md:border-r-[160px] border-r-transparent origin-top transition-transform duration-700 z-30"
                        style={{ transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)' }}>
                    </div>

                    {/* Simple message on outside */}
                    {!isOpen && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white font-serif text-lg font-bold z-40 mt-12"
                        >
                            For You ❤️
                        </motion.p>
                    )}

                    {/* Letter rising out */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: isOpen ? -100 : 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute w-[90%] h-[90%] bg-white bottom-2 shadow-sm rounded-sm p-4 text-center items-center flex flex-col justify-start z-20"
                    >
                        <p className="font-serif text-gray-800 text-sm md:text-base mt-2">
                            Start...
                        </p>
                        <p className="text-2xl mt-2">💌</p>
                    </motion.div>

                    {/* Bottom/Side folds to create envelope pocket look */}
                    <div className="absolute bottom-0 left-0 w-full h-full border-l-[128px] md:border-l-[160px] border-l-red-400 border-b-[96px] md:border-b-[120px] border-b-red-400 border-r-[128px] md:border-r-[160px] border-r-red-400 border-t-[96px] md:border-t-[120px] border-t-transparent rounded-b-lg pointer-events-none z-30"></div>
                </div>

                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-center text-red-400 mt-8 font-medium font-serif"
                >
                    {isOpen ? "Opening..." : "Click to open"}
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Envelope;
