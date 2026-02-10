import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    scale?: boolean;
    revealOverlayColor?: string; // e.g., 'bg-copper' or 'bg-obsidian'
    className?: string;
    duration?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
    children, 
    delay = 0, 
    direction = 'up', 
    scale = false,
    revealOverlayColor,
    className = '',
    duration = 'duration-1500'
}) => {
    const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

    const getDirectionClass = () => {
        switch (direction) {
            case 'up': return 'translate-y-24';
            case 'down': return '-translate-y-24';
            case 'left': return 'translate-x-24';
            case 'right': return '-translate-x-24';
            case 'none': return '';
            default: return 'translate-y-24';
        }
    };

    const baseClasses = `transition-all ease-webflow ${duration}`;
    const scaleClass = scale ? (isIntersecting ? 'scale-100' : 'scale-90') : '';
    const stateClasses = isIntersecting 
        ? 'opacity-100 translate-y-0 translate-x-0' 
        : `opacity-0 ${getDirectionClass()}`;

    return (
        <div 
            ref={targetRef} 
            className={`relative overflow-hidden ${className}`}
        >
            {/* Reveal Mask Layer (Slides away) */}
            {revealOverlayColor && (
                <div 
                    className={`absolute inset-0 z-20 ${revealOverlayColor} transition-transform duration-1200 ease-webflow origin-right`}
                    style={{ 
                        transform: isIntersecting ? 'scaleX(0)' : 'scaleX(1)',
                        transitionDelay: `${delay}ms`
                    }}
                />
            )}

            {/* Actual Content */}
            <div
                className={`${baseClasses} ${stateClasses} ${scaleClass} w-full h-full`}
                style={{ transitionDelay: `${delay + (revealOverlayColor ? 200 : 0)}ms` }}
            >
                {children}
            </div>
        </div>
    );
};