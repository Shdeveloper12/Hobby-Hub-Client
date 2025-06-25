import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../src/assets/book-club.jpg';
import img2 from '../../src/assets/gaming.jpg';
import img3 from '../../src/assets/painting.jpg';
import img4 from '../../src/assets/hiking-friends.jpg';

const slides = [
    {
        image: img1,
        title: "Escape Into Stories, Together.",
        description:
            "Join fellow readers in discovering new worlds, sharing insights, and bonding over your favorite books.",
    },
    {
        image: img2,
        title: "Level Up with Friends.",
        description:
            "Connect with local gamers who share your passion for strategy, storylines, and co-op wins.",
    },
    {
        image: img3,
        title: "Paint. Sip. Share.",
        description:
            "Unleash your creativity in a relaxing group of like-minded artists. Sketch sunsets or abstract dreams.",
    },
    {
        image: img4,
        title: "Explore Trails Together.",
        description:
            "Join fellow nature lovers for scenic hikes, shared adventures, and memories made on every trail.",
    },
];

const Banner = () => {
    const [current, setCurrent] = useState(0);
    const slideIntervalRef = useRef(null);

    // Auto-slide logic
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    const startAutoSlide = () => {
        slideIntervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const stopAutoSlide = () => {
        clearInterval(slideIntervalRef.current);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    return (
        <div
            className="relative w-full h-[400px] primary overflow-hidden hover:cursor-pointer"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="absolute w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .3 }}
                >
                    <img
                        src={slides[current].image}
                        alt={`Slide ${current}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                            {slides[current].title}
                        </h1>
                        <p className="max-w-2xl text-sm md:text-lg">{slides[current].description}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-20">
                <button
                    onClick={prevSlide}
                    className="btn btn-circle bg-white/70 text-black hover:bg-white"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="btn btn-circle bg-white/70 text-black hover:bg-white"
                >
                    ❯
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === current ? 'bg-white scale-110' : 'bg-white/40'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
