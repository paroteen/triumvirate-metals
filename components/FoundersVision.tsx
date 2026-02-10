import React from 'react';
import { FadeIn } from './shared/FadeIn';

export const FoundersVision: React.FC = () => {
    return (
        <section className="py-32 md:py-48 bg-charcoal text-center relative border-y border-white/5">
            {/* Cinematic subtle spotlight effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-steelblue/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <h2 className="font-sans text-xs tracking-[0.3em] text-copper uppercase mb-16">The Founder's Vision</h2>
                </FadeIn>

                <FadeIn delay={200}>
                    <blockquote className="font-grotesk text-2xl md:text-4xl leading-[1.4] md:leading-[1.5] font-light text-white mb-16">
                        "A civilization is only as secure as the raw materials that build it, and only as moral as the methods used to extract them."
                    </blockquote>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-left">
                    <FadeIn delay={300} className="border-t border-white/10 pt-6">
                        <h4 className="font-sans text-xs tracking-widest text-white uppercase mb-4">I. Infrastructure</h4>
                        <p className="font-sans text-sm text-muted font-light leading-relaxed">
                            Parallel efforts are underway to rebuild the Bureau of Mines, establishing a domestic anchor for global material strategy and industrial capability.
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={400} className="border-t border-white/10 pt-6">
                        <h4 className="font-sans text-xs tracking-widest text-white uppercase mb-4">II. Education</h4>
                        <p className="font-sans text-sm text-muted font-light leading-relaxed">
                            A commitment to reshaping classical education, ensuring future generations inherit the intellectual rigor required to maintain free societies.
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={500} className="border-t border-white/10 pt-6">
                        <h4 className="font-sans text-xs tracking-widest text-white uppercase mb-4">III. Aid Structures</h4>
                        <p className="font-sans text-sm text-muted font-light leading-relaxed">
                            Designing sustainable, cross-border aid architectures that favor permanent stability over temporary relief, funded by industrial yield.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};