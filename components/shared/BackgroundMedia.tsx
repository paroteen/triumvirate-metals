import React from 'react';
import { useScroll } from '../../hooks/useScroll';

interface BackgroundMediaProps {
    videoSrc: string;
    overlayOpacity?: string;
    overlayColor?: string;
    parallaxSpeed?: number;
    className?: string;
}

export const BackgroundMedia: React.FC<BackgroundMediaProps> = ({
    videoSrc,
    overlayOpacity = 'opacity-60',
    overlayColor = 'bg-obsidian',
    parallaxSpeed = 0.4,
    className = ''
}) => {
    const scrollY = useScroll();

    return (
        <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
            <div 
                className="w-full h-full relative"
                style={{ transform: `translateY(${scrollY * parallaxSpeed}px) scale(1.15)` }}
            >
                {videoSrc ? (
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    <div className="w-full h-full bg-charcoal bg-topo" />
                )}
                <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity} mix-blend-multiply transition-colors duration-1000`} />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian opacity-80" />
            </div>
        </div>
    );
};