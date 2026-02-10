import React from 'react';
import { useNavigation } from './Router';

const LINKS = [
    { id: 'home', label: 'Home', num: '00' },
    { id: 'about', label: 'The Thesis', num: '01' },
    { id: 'operations', label: 'Operations', num: '02' },
    { id: 'education', label: 'Education', num: '03' },
    { id: 'impact', label: 'Impact', num: '04' },
    { id: 'vision', label: 'Vision', num: '05' },
    { id: 'portfolio', label: 'Portfolio', num: '06' },
    { id: 'contact', label: 'Alignment', num: '07' }
];

export const Navigation: React.FC = () => {
    const { isMenuOpen, setIsMenuOpen, navigate, currentPage } = useNavigation();

    return (
        <>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed top-8 right-8 z-[90] mix-blend-difference text-offwhite font-sans text-xs tracking-[0.2em] uppercase hover:text-copper transition-colors"
            >
                {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            <div className={`fixed inset-0 z-[80] bg-obsidian/95 backdrop-blur-xl transition-opacity duration-1000 ease-editorial flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Abstract grid background inside menu */}
                <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none" />
                
                <nav className="flex flex-col space-y-4 md:space-y-6 text-center relative z-10">
                    {LINKS.map((link, idx) => (
                        <div key={link.id} className="clip-text-mask overflow-hidden py-1">
                            <button 
                                onClick={() => navigate(link.id)}
                                className={`group flex items-center justify-center space-x-6 transition-all duration-1000 ease-expo transform origin-bottom-left
                                    ${isMenuOpen ? 'translate-y-0 skew-y-0 opacity-100' : 'translate-y-[150%] skew-y-[5deg] opacity-0'}
                                `}
                                style={{ transitionDelay: `${idx * 80}ms` }}
                            >
                                <span className={`font-sans text-xs transition-colors duration-500 ${currentPage === link.id ? 'text-copper' : 'text-muted/30 group-hover:text-amber'}`}>
                                    {link.num}
                                </span>
                                <span className={`font-grotesk text-4xl md:text-6xl lg:text-7xl font-light tracking-tight transition-colors duration-500
                                    ${currentPage === link.id ? 'text-copper' : 'text-offwhite group-hover:text-white'}
                                `}>
                                    {link.label}
                                </span>
                            </button>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
};