import React from 'react';
import { FadeIn } from './shared/FadeIn';

export const StrategicAlignment: React.FC = () => {
    return (
        <section className="py-32 bg-charcoal border-y border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                
                <FadeIn>
                    <div className="inline-flex items-center justify-center space-x-3 mb-8">
                        <div className="w-[1px] h-4 bg-copper/50" />
                        <span className="font-sans text-xs tracking-[0.25em] text-muted uppercase">Initiate</span>
                        <div className="w-[1px] h-4 bg-copper/50" />
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <h2 className="font-grotesk text-4xl md:text-6xl font-light text-white mb-8">Strategic Alignment</h2>
                </FadeIn>

                <FadeIn delay={200}>
                    <p className="font-sans text-muted font-light max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
                        Triumvirate Metals engages strictly with institutional partners, sovereign entities, and strategic capital aligned with our thesis. We do not respond to general solicitations.
                    </p>
                </FadeIn>

                <FadeIn delay={300}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans text-xs uppercase tracking-widest transition-all duration-300">
                            Institutional Dialogue
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-copper/30 text-copper hover:bg-copper/5 font-sans text-xs uppercase tracking-widest transition-all duration-300">
                            Partnership Inquiry
                        </button>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};