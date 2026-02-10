import React from 'react';
import { FadeIn } from '../components/shared/FadeIn';
import { TextReveal } from '../components/shared/TextReveal';
import { BackgroundMedia } from '../components/shared/BackgroundMedia';
import { useScroll } from '../hooks/useScroll';

export const About: React.FC = () => {
    const scrollY = useScroll();

    return (
        <div className="w-full bg-obsidian min-h-screen">
            
            {/* Cinematic Intro */}
            <section className="relative h-screen w-full flex items-center justify-center border-b border-white/5">
                <BackgroundMedia 
                    videoSrc="https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-background-with-flowing-lines-and-light-9742-large.mp4" 
                    overlayOpacity="opacity-80"
                />
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <FadeIn>
                        <h1 className="font-sans text-xs uppercase tracking-[0.3em] text-copper mb-8">01. The Thesis</h1>
                    </FadeIn>
                    <TextReveal 
                        text={["The Moral Imperative", "of Supply."]}
                        className="font-grotesk text-6xl md:text-8xl font-light tracking-tight text-white"
                    />
                </div>
            </section>

            {/* Sticky Scrolling Manifesto Sequence */}
            <section className="relative h-[300vh] bg-charcoal text-offwhite">
                <div className="sticky top-0 h-screen flex items-center">
                    <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 lg:px-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                        {/* Static Left Side */}
                        <div className="flex flex-col justify-center">
                            <h2 className="font-grotesk text-4xl md:text-6xl font-light mb-8 text-white">
                                Global dependency is an unacceptable deficit.
                            </h2>
                            <div className="w-24 h-[1px] bg-copper" />
                        </div>

                        {/* Scrolling Right Side (driven by absolute positioning and native scroll) */}
                        <div className="relative h-[50vh] overflow-hidden flex flex-col justify-center">
                            
                            {/* Panel 1 */}
                            <div 
                                className="absolute w-full transition-all duration-700 ease-out"
                                style={{ 
                                    opacity: scrollY < window.innerHeight * 1.5 ? 1 : 0,
                                    transform: `translateY(${(window.innerHeight - scrollY) * 0.2}px)`
                                }}
                            >
                                <h3 className="font-sans tracking-widest text-xs text-copper uppercase mb-4">01. The Vulnerability</h3>
                                <p className="font-sans text-xl font-light leading-relaxed text-muted">
                                    Reliance on volatile regions and adversarial states for essential resources exposes critical technological and defense systems. This model is fundamentally broken.
                                </p>
                            </div>

                            {/* Panel 2 */}
                            <div 
                                className="absolute w-full transition-all duration-700 ease-out"
                                style={{ 
                                    opacity: scrollY >= window.innerHeight * 1.5 && scrollY < window.innerHeight * 2.5 ? 1 : 0,
                                    transform: `translateY(${(window.innerHeight * 2 - scrollY) * 0.2}px)`
                                }}
                            >
                                <h3 className="font-sans tracking-widest text-xs text-copper uppercase mb-4">02. Moral Failure</h3>
                                <p className="font-sans text-xl font-light leading-relaxed text-muted">
                                    Legacy extraction operates in the shadows. Built on systemic exploitation, it ignores the human cost. Ethically bankrupt and operationally disastrous.
                                </p>
                            </div>

                            {/* Panel 3 */}
                            <div 
                                className="absolute w-full transition-all duration-700 ease-out"
                                style={{ 
                                    opacity: scrollY >= window.innerHeight * 2.5 ? 1 : 0,
                                    transform: `translateY(${(window.innerHeight * 3 - scrollY) * 0.2}px)`
                                }}
                            >
                                <h3 className="font-sans tracking-widest text-xs text-copper uppercase mb-4">03. The New Paradigm</h3>
                                <p className="font-sans text-xl font-light leading-relaxed text-white">
                                    Triumvirate Metals establishes a closed-loop ecosystem. Secure zones. Ethical extraction. Absolute control. We guarantee untainted origins.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};