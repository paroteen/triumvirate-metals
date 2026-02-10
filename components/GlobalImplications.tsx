import React from 'react';
import { FadeIn } from './shared/FadeIn';

export const GlobalImplications: React.FC = () => {
    return (
        <section className="py-32 md:py-48 bg-obsidian relative overflow-hidden">
            {/* Abstract World Map / Geopolitical Visuals (Valar Atomics style) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Abstract radar/targeting circles */}
                    <circle cx="70%" cy="30%" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" className="animate-[pulse_4s_ease-in-out_infinite]" />
                    <circle cx="70%" cy="30%" r="300" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.05" />
                    
                    {/* Connecting lines indicating supply chains */}
                    <path d="M 20% 70% Q 50% 20% 70% 30%" fill="none" stroke="#b87333" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div>
                        <FadeIn>
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="h-2 w-2 bg-copper rounded-full animate-pulse" />
                                <span className="font-sans text-xs tracking-[0.2em] text-muted uppercase">Global Implications</span>
                            </div>
                            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                                Redefining<br/>Strategic Terrain.
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="bg-charcoal/50 backdrop-blur-sm border border-white/5 p-8 md:p-12 relative">
                        {/* Corner markers */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />

                        <FadeIn delay={200}>
                            <p className="font-sans text-offwhite leading-relaxed mb-6 font-light">
                                Operating primarily in regions characterized by systemic instability, we do not rely on local governmental infrastructure for security or ethical compliance.
                            </p>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <p className="font-sans text-muted leading-relaxed font-light text-sm">
                                Triumvirate Metals establishes autonomous, secure corridors. This methodology ensures uninterrupted supply while actively neutralizing illicit networks that have historically weaponized resource wealth. We provide stability through presence, capability, and unyielding protocol.
                            </p>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};