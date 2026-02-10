import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface TextRevealProps {
    text: string | string[];
    delay?: number;
    className?: string;
    duration?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
    text, 
    delay = 0, 
    className = '',
    duration = 'duration-1500'
}) => {
    const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const lines = Array.isArray(text) ? text : [text];

    return (
        <div ref={targetRef} className={`flex flex-col ${className}`}>
            {lines.map((line, i) => (
                <div key={i} className="clip-text-mask overflow-hidden pb-2 pt-2 -mt-2">
                    <div
                        className={`transition-all ${duration} ease-expo transform origin-bottom-left
                            ${isIntersecting ? 'translate-y-0 skew-y-0 opacity-100' : 'translate-y-[150%] skew-y-[10deg] opacity-0'}`}
                        style={{ transitionDelay: `${delay + (i * 150)}ms` }}
                    >
                        {line}
                    </div>
                </div>
            ))}
        </div>
    );
};