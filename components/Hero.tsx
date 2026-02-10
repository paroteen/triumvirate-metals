import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian border-b border-white/5">
            {/* Abstract Background Elements */}
            <div 
                className="absolute inset-0 z-0 bg-topo opacity-20"
                style={{ transform: `translateY(${scrolled * 0.2}px)` }}
            />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-steelblue/10 via-obsidian to-obsidian opacity-80" />
            
            {/* Energy field simulation / satellite lines */}
            <div className="absolute w-[200vw] h-[200vh] -top-[50vh] -left-[50vw] animate-[spin_120s_linear_infinite] opacity-5 pointer-events-none">
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
                <div className="mb-8 flex items-center space-x-4 opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
                    <div className="h-[1px] w-8 bg-copper/50" />
                    <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted">A Statement of Intent</span>
                    <div className="h-[1px] w-8 bg-copper/50" />
                </div>

                <h1 className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-offwhite max-w-5xl mb-12 opacity-0 animate-[fadeIn_1.5s_ease-out_1s_forwards]">
                    Securing the Materials<br />
                    <span className="text-white/40 italic font-serif">That Shape the Future.</span>
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 opacity-0 animate-[fadeIn_1.5s_ease-out_1.5s_forwards]">
                    <span className="font-sans text-sm tracking-[0.15em] text-muted uppercase border-b border-transparent hover:border-copper/30 transition-colors pb-1 cursor-default">
                        Strategic Metals
                    </span>
                    <span className="hidden sm:block text-copper/30 text-xs">◆</span>
                    <span className="font-sans text-sm tracking-[0.15em] text-muted uppercase border-b border-transparent hover:border-copper/30 transition-colors pb-1 cursor-default">
                        Defense Capability
                    </span>
                    <span className="hidden sm:block text-copper/30 text-xs">◆</span>
                    <span className="font-sans text-sm tracking-[0.15em] text-muted uppercase border-b border-transparent hover:border-copper/30 transition-colors pb-1 cursor-default">
                        Humanitarian Impact
                    </span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};