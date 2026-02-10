import React from 'react';
import { FadeIn } from './shared/FadeIn';

const pillars = [
    {
        num: "01",
        title: "Critical Metals & Minerals",
        desc: "Securing sovereign supply chains for the materials that power advanced technology, defense systems, and clean energy infrastructure. We extract with precision, untethered from adversarial geopolitics."
    },
    {
        num: "02",
        title: "Private Defense & Security Systems",
        desc: "Operating in the world's most volatile regions requires absolute control. We deploy next-generation defense technology and specialized forces to secure operations, assets, and personnel."
    },
    {
        num: "03",
        title: "Humanitarian & Anti-Trafficking",
        desc: "Sustainable revenue funds specialized operative forces tasked with eradicating human trafficking in extraction zones, alongside building physical safety networks and first-world educational facilities."
    }
];

export const Pillars: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-charcoal border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                
                <FadeIn>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                        <h2 className="font-grotesk text-4xl md:text-6xl font-light">The Intersection</h2>
                        <p className="font-sans text-sm tracking-[0.2em] text-muted uppercase max-w-xs text-left md:text-right">
                            Where Markets, Governments,<br/>and Ethics Collide
                        </p>
                    </div>
                </FadeIn>

                <div className="flex flex-col border-t border-white/10">
                    {pillars.map((pillar, idx) => (
                        <FadeIn key={idx} delay={idx * 150} direction="up">
                            <div className="group flex flex-col lg:flex-row items-start lg:items-center py-12 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4">
                                
                                <div className="font-sans text-muted text-sm tracking-widest w-24 mb-6 lg:mb-0 group-hover:text-copper transition-colors">
                                    {pillar.num}
                                </div>
                                
                                <div className="flex-1 lg:pr-12 mb-4 lg:mb-0">
                                    <h3 className="font-grotesk text-2xl md:text-3xl text-offwhite font-light group-hover:translate-x-2 transition-transform duration-500">
                                        {pillar.title}
                                    </h3>
                                </div>
                                
                                <div className="w-full lg:w-5/12">
                                    <p className="font-sans text-muted text-sm md:text-base leading-relaxed font-light">
                                        {pillar.desc}
                                    </p>
                                </div>

                            </div>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
};