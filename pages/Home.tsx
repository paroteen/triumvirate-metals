import React from 'react';
import { useNavigation } from '../components/Router';
import { TextReveal } from '../components/shared/TextReveal';
import { FadeIn } from '../components/shared/FadeIn';
import { BackgroundMedia } from '../components/shared/BackgroundMedia';
import { useScroll } from '../hooks/useScroll';

export const Home: React.FC = () => {
    const { navigate } = useNavigation();
    const scrollY = useScroll();

    return (
        <div className="w-full bg-obsidian text-offwhite">
            
            {/* SECTION 1: Cinematic Hero with Abstract Video & Light Leaks */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <BackgroundMedia 
                    videoSrc="https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-background-with-flowing-lines-and-light-9742-large.mp4" 
                    overlayOpacity="opacity-70"
                />
                
                {/* Cinematic Overlays: Enhanced Grain & Abstract Light Leaks */}
                <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none z-0" />
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-copper/10 blur-[120px] rounded-full mix-blend-screen animate-float-slow pointer-events-none z-0" />
                <div className="absolute bottom-[10%] -right-[10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-steelblue/10 blur-[150px] rounded-full mix-blend-screen animate-float-slow pointer-events-none z-0" style={{ animationDelay: '2s' }} />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                    <FadeIn delay={800} duration="duration-2000">
                        <div className="mb-12 flex items-center space-x-6">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-copper/80" />
                            <span className="font-sans text-xs uppercase tracking-[0.5em] text-muted/80">A Statement of Intent</span>
                            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-copper/80" />
                        </div>
                    </FadeIn>

                    <TextReveal 
                        text={["Securing the Materials", "That Shape the Future."]} 
                        className="font-grotesk text-6xl md:text-8xl lg:text-[8rem] font-light leading-[1.05] tracking-tight text-white mb-16"
                        delay={1200}
                    />

                    <FadeIn delay={2200} duration="duration-2000">
                        <button 
                            onClick={() => navigate('about')}
                            className="group relative px-12 py-5 overflow-hidden border border-white/20 font-sans text-xs uppercase tracking-[0.3em] text-white transition-all duration-700 hover:border-copper/80"
                        >
                            <span className="relative z-10">Enter Briefing</span>
                            <div className="absolute inset-0 bg-copper/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-webflow" />
                        </button>
                    </FadeIn>
                </div>

                {/* Subtle Scroll Hint */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white mb-4 rotate-90 origin-left translate-x-3">Scroll</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent animate-pulse" />
                </div>
            </section>

            {/* SECTION 2: Overlapping Sticky Thesis */}
            <section className="relative h-[250vh] bg-charcoal">
                <BackgroundMedia 
                    videoSrc="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-background-1311-large.mp4"
                    overlayOpacity="opacity-95"
                    parallaxSpeed={0.2}
                />
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                        <h2 
                            className="font-grotesk text-5xl md:text-7xl lg:text-[7rem] font-light leading-[1.1] transition-all duration-1000 ease-webflow"
                            style={{ 
                                opacity: Math.max(0, 1 - Math.abs(scrollY - window.innerHeight * 1.5) / 600),
                                transform: `scale(${1 + (scrollY - window.innerHeight) * 0.0005})`
                            }}
                        >
                            Global conditions demand <br/>
                            <span className="text-copper italic font-serif">new moral sources.</span>
                        </h2>
                    </div>
                </div>
            </section>

            {/* SECTION 3: The Intersection - Masked Reveal Blocks & Deep Parallax */}
            <section className="py-32 md:py-48 bg-obsidian relative z-30">
                <div className="max-w-7xl mx-auto px-6 lg:px-24">
                    <FadeIn direction="right">
                        <div className="flex items-center gap-6 mb-32">
                            <span className="font-sans text-xs tracking-[0.4em] uppercase text-copper">01.</span>
                            <div className="w-full h-[1px] bg-white/10" />
                            <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-muted whitespace-nowrap">The Intersection</h3>
                        </div>
                    </FadeIn>

                    <div className="space-y-48">
                        {/* Pillar 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <span className="absolute -top-24 -left-12 font-grotesk text-[12rem] text-white/[0.02] font-bold pointer-events-none select-none">01</span>
                                <FadeIn direction="up" delay={200}>
                                    <h4 className="font-grotesk text-5xl md:text-6xl mb-8 leading-tight">Strategic<br/>Extraction</h4>
                                    <p className="font-sans text-muted leading-relaxed font-light text-xl">
                                        Securing sovereign supply chains for materials that power advanced technology and clean energy. Extracted with precision, untethered from adversarial geopolitics.
                                    </p>
                                </FadeIn>
                            </div>
                            <div className="order-1 lg:order-2 h-[500px] md:h-[700px] relative overflow-hidden">
                                <FadeIn revealOverlayColor="bg-copper" duration="duration-2000" className="w-full h-full">
                                    <BackgroundMedia 
                                        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-rocky-mountain-range-4277-large.mp4" 
                                        parallaxSpeed={0.15}
                                        overlayOpacity="opacity-50"
                                    />
                                </FadeIn>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="h-[500px] md:h-[700px] relative overflow-hidden">
                                <FadeIn revealOverlayColor="bg-steelblue" duration="duration-2000" className="w-full h-full">
                                    <BackgroundMedia 
                                        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-technological-environment-with-a-map-31835-large.mp4" 
                                        parallaxSpeed={0.15}
                                        overlayOpacity="opacity-60"
                                    />
                                </FadeIn>
                            </div>
                            <div className="relative">
                                <span className="absolute -top-24 -right-12 font-grotesk text-[12rem] text-white/[0.02] font-bold pointer-events-none select-none text-right w-full">02</span>
                                <FadeIn direction="up" delay={200}>
                                    <h4 className="font-grotesk text-5xl md:text-6xl mb-8 leading-tight">Defense<br/>Infrastructure</h4>
                                    <p className="font-sans text-muted leading-relaxed font-light text-xl">
                                        Absolute control in volatile regions. Deploying next-generation defense technology to secure operations, assets, and personnel globally.
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Education Slide-up with warm gradient overlay */}
            <section className="relative py-48 bg-sand text-obsidian overflow-hidden">
                <BackgroundMedia 
                    videoSrc="https://assets.mixkit.co/videos/preview/mixkit-modern-architectural-building-with-a-lot-of-glass-and-4054-large.mp4"
                    overlayColor="bg-sand"
                    overlayOpacity="opacity-95"
                    parallaxSpeed={0.25}
                />
                <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10 flex flex-col items-center text-center">
                    <FadeIn direction="up" scale={true}>
                        <div className="w-24 h-[1px] bg-rust mx-auto mb-16" />
                        <h3 className="font-sans text-xs tracking-[0.4em] uppercase text-rust mb-16">02. The Core Pillar</h3>
                    </FadeIn>
                    <TextReveal 
                        text={["Knowledge as Security.", "Institutions Rebuilt."]}
                        className="font-grotesk text-6xl md:text-8xl font-light mb-16 text-charcoal"
                    />
                    <FadeIn delay={400} direction="up">
                        <p className="font-sans max-w-3xl mx-auto text-xl font-light leading-relaxed text-charcoal/80 mb-16">
                            Education is not a footnote; it is the foundation. Sustainable revenue dictates the construction of first-world educational facilities, reshaping classical and modern intellect to ensure future generations maintain free societies.
                        </p>
                        <button 
                            onClick={() => navigate('education')}
                            className="group px-12 py-5 bg-charcoal text-sand overflow-hidden relative font-sans text-xs uppercase tracking-[0.3em] transition-transform duration-500 hover:scale-105"
                        >
                            <span className="relative z-10">Explore Education</span>
                        </button>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION 5: Scaled Background Vision Quote */}
            <section className="py-64 bg-obsidian text-center relative overflow-hidden">
                <BackgroundMedia 
                    videoSrc="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4"
                    overlayOpacity="opacity-80"
                    parallaxSpeed={0.1}
                />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <FadeIn scale={true} duration="duration-3000">
                        <blockquote className="font-grotesk text-4xl md:text-6xl lg:text-7xl leading-[1.2] font-light italic text-white mb-16">
                            "A civilization is only as secure as the raw materials that build it, and only as moral as the methods used to extract them."
                        </blockquote>
                        <p className="font-sans text-xs tracking-[0.5em] text-copper uppercase">The Founder</p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};