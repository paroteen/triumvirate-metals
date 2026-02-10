import React from 'react';
import { FadeIn } from './shared/FadeIn';

export const Thesis: React.FC = () => {
    return (
        <section className="py-32 md:py-48 bg-obsidian relative">
            <div className="absolute top-0 left-12 md:left-24 w-[1px] h-full bg-white/5" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <FadeIn delay={100}>
                    <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-copper mb-24">01. The Thesis</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
                    
                    {/* Left Column - Large Statement (EastCreaxions artistic layout) */}
                    <div className="md:col-span-6 lg:col-span-5 relative">
                        <FadeIn delay={200}>
                            <p className="font-grotesk text-3xl md:text-4xl lg:text-5xl leading-tight font-light text-offwhite">
                                Fundamentally, global conditions demand <span className="text-white">new moral sources</span> of metals and minerals.
                            </p>
                        </FadeIn>
                        
                        {/* Abstract technical decoration */}
                        <FadeIn delay={400} className="mt-16 hidden md:block">
                            <div className="w-24 h-24 border border-white/10 relative">
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-copper -translate-x-1 -translate-y-1" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-copper translate-x-1 translate-y-1" />
                                <div className="w-full h-[1px] bg-white/5 absolute top-1/2" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column - Editorial Copy (Rainmaker narrative clarity) */}
                    <div className="md:col-start-8 md:col-span-5 flex flex-col gap-12 pt-4 md:pt-0">
                        <FadeIn delay={300}>
                            <div className="pl-6 border-l border-white/10">
                                <h3 className="font-grotesk text-lg tracking-wide mb-4 text-white">Global Dependency</h3>
                                <p className="font-sans text-muted leading-relaxed font-light text-sm md:text-base">
                                    The current geopolitical landscape exposes a critical vulnerability. Reliance on volatile regions and adversarial states for essential resources creates an unacceptable strategic deficit. To combat American foreign dependency requires a total restructuring of the supply chain.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="pl-6 border-l border-white/10">
                                <h3 className="font-grotesk text-lg tracking-wide mb-4 text-white">The Moral Failure</h3>
                                <p className="font-sans text-muted leading-relaxed font-light text-sm md:text-base">
                                    Legacy extraction operates in the shadows. It is built on systemic exploitation, ignoring the human cost of modern technological advancement. This model is not just ethically bankrupt; it is a profound operational liability.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={500}>
                            <div className="pl-6 border-l border-copper/30">
                                <h3 className="font-grotesk text-lg tracking-wide mb-4 text-white">A Controlled Paradigm</h3>
                                <p className="font-sans text-offwhite leading-relaxed font-light text-sm md:text-base">
                                    Triumvirate Metals is establishing a closed-loop ecosystem. We secure ethical extraction zones, implement privatized safety systems in volatile environments, and guarantee an untainted origin for strategic materials.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};