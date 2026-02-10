import React from 'react';
import { FadeIn } from '../components/shared/FadeIn';
import { TextReveal } from '../components/shared/TextReveal';
import { BackgroundMedia } from '../components/shared/BackgroundMedia';

export const Vision: React.FC = () => {
    return (
        <div className="w-full bg-charcoal min-h-screen flex flex-col justify-center items-center py-48 relative overflow-hidden">
            <BackgroundMedia 
                videoSrc="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4"
                overlayOpacity="opacity-80"
                parallaxSpeed={0.15}
            />
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-copper/[0.05] via-transparent to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <FadeIn direction="down">
                    <h1 className="font-sans text-xs tracking-[0.4em] text-copper uppercase mb-24">05. The Founder's Vision</h1>
                </FadeIn>

                <div className="mb-32">
                    <TextReveal 
                        text={[
                            "\"A civilization is only as secure",
                            "as the raw materials that build it,",
                            "and only as moral as the methods",
                            "used to extract them.\""
                        ]}
                        className="font-grotesk text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light text-white italic"
                        duration="duration-2000"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left mt-32">
                    <FadeIn delay={300} direction="up" className="border-t border-white/20 pt-8">
                        <h4 className="font-sans text-xs tracking-[0.2em] text-white uppercase mb-6">I. Infrastructure</h4>
                        <p className="font-sans text-lg text-muted font-light leading-relaxed">
                            Parallel efforts to rebuild the Bureau of Mines, establishing a domestic anchor for global material strategy.
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={500} direction="up" className="border-t border-white/20 pt-8">
                        <h4 className="font-sans text-xs tracking-[0.2em] text-white uppercase mb-6">II. Education</h4>
                        <p className="font-sans text-lg text-muted font-light leading-relaxed">
                            Reshaping classical education to ensure future generations inherit the intellectual rigor required for free societies.
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={700} direction="up" className="border-t border-white/20 pt-8">
                        <h4 className="font-sans text-xs tracking-[0.2em] text-white uppercase mb-6">III. Aid Structures</h4>
                        <p className="font-sans text-lg text-muted font-light leading-relaxed">
                            Designing sustainable aid architectures that favor permanent stability over temporary relief.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};