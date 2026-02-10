import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let requestId: number;

        const handleScroll = () => {
            requestId = requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial setup
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(requestId);
        };
    }, []);

    return scrollY;
};