import React from 'react';
import { FadeIn } from '../components/shared/FadeIn';

export const Contact: React.FC = () => {
    return (
        <div className="w-full bg-obsidian min-h-screen flex flex-col justify-center items-center py-32 relative overflow-hidden">
            {/* Background animated gradient */}
            <div className="absolute inset-0 bg-metallic animate-metallic opacity-10 mix-blend-overlay pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                
                <FadeIn direction="down">
                    <div className="inline-flex items-center justify-center space-x-6 mb-16">
                        <div className="w-[1px] h-12 bg-copper/50" />
                        <span className="font-sans text-xs tracking-[0.4em] text-muted uppercase">06. Initiate</span>
                        <div className="w-[1px] h-12 bg-copper/50" />
                    </div>
                </FadeIn>

                <FadeIn delay={200} direction="up">
                    <h1 className="font-grotesk text-6xl md:text-8xl font-light text-white mb-16 tracking-tight">Strategic Alignment</h1>
                </FadeIn>

                <FadeIn delay={400} direction="up">
                    <p className="font-sans text-muted/80 font-light max-w-3xl mx-auto mb-24 text-xl leading-relaxed">
                        Triumvirate Metals engages strictly with institutional partners, sovereign entities, and strategic capital aligned with our thesis. We do not respond to general solicitations.
                    </p>
                </FadeIn>

                <FadeIn delay={600} direction="up">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="group relative w-full sm:w-auto px-12 py-6 bg-white overflow-hidden transition-all duration-700">
                            <div className="absolute inset-0 bg-offwhite translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-webflow" />
                            <span className="relative z-10 text-obsidian font-sans text-xs uppercase tracking-[0.3em] font-medium">
                                Institutional Dialogue
                            </span>
                        </button>
                        
                        <button className="group relative w-full sm:w-auto px-12 py-6 bg-transparent border border-white/20 overflow-hidden transition-all duration-700 hover:border-copper">
                            <div className="absolute inset-0 bg-copper/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-webflow" />
                            <span className="relative z-10 text-white font-sans text-xs uppercase tracking-[0.3em] transition-colors group-hover:text-copper">
                                Partnership Inquiry
                            </span>
                        </button>
                    </div>
                </FadeIn>

            </div>
        </div>
    );
};