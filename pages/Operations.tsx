import React from 'react';
import { FadeIn } from '../components/shared/FadeIn';
import { TextReveal } from '../components/shared/TextReveal';
import { BackgroundMedia } from '../components/shared/BackgroundMedia';

const pillars = [
    {
        num: "01",
        title: "Critical Metals & Minerals",
        desc: "Securing sovereign supply chains for the materials that power advanced technology, defense systems, and clean energy infrastructure. We extract with precision, untethered from adversarial geopolitics."
    },
    {
        num: "02",
        title: "Private Defense & Security",
        desc: "Operating in the world's most volatile regions requires absolute control. We deploy next-generation defense technology and specialized forces to secure operations, assets, and personnel."
    },
    {
        num: "03",
        title: "Humanitarian Infrastructure",
        desc: "Sustainable revenue funds specialized operative forces tasked with eradicating human trafficking in extraction zones, alongside building physical safety networks and first-world educational facilities."
    }
];

export const Operations: React.FC = () => {
    return (
        <div className="w-full bg-mineralgreen min-h-screen pt-32 pb-32 relative overflow-hidden">
            {/* Moving Grid Background (CSS Animation) */}
            <div className="absolute inset-0 z-0 bg-topo opacity-10 animate-float-slow pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <FadeIn direction="left">
                    <h1 className="font-sans text-xs uppercase tracking-[0.4em] text-copper mb-16">02. Operations</h1>
                </FadeIn>

                <div className="mb-32">
                    <TextReveal 
                        text={["The Intersection of", "Markets, Governments,", "and Ethics."]}
                        className="font-grotesk text-6xl md:text-8xl font-light text-offwhite"
                    />
                </div>

                <div className="flex flex-col border-t border-white/10">
                    {pillars.map((pillar, idx) => (
                        <FadeIn key={idx} delay={idx * 200} direction="right" duration="duration-2000">
                            <div className="group relative flex flex-col lg:flex-row items-start lg:items-center py-16 md:py-24 border-b border-white/10 px-8 -mx-8 cursor-default overflow-hidden transition-all duration-700 hover:bg-white/[0.02]">
                                
                                {/* Hover Reveal Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

                                <div className="font-sans text-muted text-sm tracking-widest w-32 mb-8 lg:mb-0 group-hover:text-amber transition-colors duration-500">
                                    {pillar.num}
                                </div>
                                
                                <div className="flex-1 lg:pr-16 mb-6 lg:mb-0 relative z-10">
                                    <h3 className="font-grotesk text-4xl md:text-5xl text-white font-light group-hover:translate-x-6 transition-transform duration-700 ease-webflow">
                                        {pillar.title}
                                    </h3>
                                </div>
                                
                                <div className="w-full lg:w-5/12 relative z-10">
                                    <p className="font-sans text-muted/80 text-lg leading-relaxed font-light group-hover:text-offwhite transition-colors duration-700">
                                        {pillar.desc}
                                    </p>
                                </div>

                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
};