import React from 'react';
import { FadeIn } from '../components/shared/FadeIn';
import { TextReveal } from '../components/shared/TextReveal';
import { BackgroundMedia } from '../components/shared/BackgroundMedia';

export const Education: React.FC = () => {
    return (
        <div className="w-full bg-sand min-h-screen text-obsidian relative overflow-hidden">
            
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full flex items-end pb-24 border-b border-obsidian/10">
                <BackgroundMedia 
                    videoSrc="https://assets.mixkit.co/videos/preview/mixkit-modern-architectural-building-with-a-lot-of-glass-and-4054-large.mp4"
                    overlayColor="bg-sand"
                    overlayOpacity="opacity-80"
                    parallaxSpeed={0.2}
                />
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                    <FadeIn>
                        <h1 className="font-sans text-xs uppercase tracking-[0.2em] text-rust mb-8">03. Education</h1>
                    </FadeIn>
                    <TextReveal 
                        text={["Classical Rigor.", "Modern Capability."]}
                        className="font-grotesk text-6xl md:text-8xl lg:text-[8rem] font-light leading-[1.0] tracking-tight"
                    />
                </div>
            </section>

            {/* Deep Narrative Section */}
            <section className="py-32 md:py-48">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div>
                            <FadeIn>
                                <h2 className="font-grotesk text-4xl md:text-5xl font-light mb-12">The Intellectual Infrastructure.</h2>
                            </FadeIn>
                            <div className="space-y-12">
                                <FadeIn delay={200} direction="up">
                                    <h3 className="font-sans tracking-widest text-xs text-rust uppercase mb-4">First-World Facilities</h3>
                                    <p className="font-sans text-charcoal leading-relaxed font-light text-lg">
                                        We do not build temporary tents. We architect and construct permanent, highly advanced educational institutions within our secured zones. Knowledge requires an environment of permanence and absolute safety.
                                    </p>
                                </FadeIn>
                                <FadeIn delay={300} direction="up">
                                    <h3 className="font-sans tracking-widest text-xs text-rust uppercase mb-4">Curriculum Design</h3>
                                    <p className="font-sans text-charcoal leading-relaxed font-light text-lg">
                                        A commitment to reshaping education by fusing classical philosophical rigor with modern technological capability. Future generations must inherit the intellect required to maintain free, complex societies.
                                    </p>
                                </FadeIn>
                                <FadeIn delay={400} direction="up">
                                    <h3 className="font-sans tracking-widest text-xs text-rust uppercase mb-4">Bureau Rebuilding</h3>
                                    <p className="font-sans text-charcoal leading-relaxed font-light text-lg">
                                        Parallel efforts are engaged in rebuilding institutional frameworks like the Bureau of Mines, establishing a domestic anchor for long-term strategic material strategy and intellectual capital.
                                    </p>
                                </FadeIn>
                            </div>
                        </div>

                        {/* Visual Metaphor / Abstract Architectics */}
                        <div className="flex flex-col justify-center items-center">
                            <FadeIn delay={500} scale={true} className="w-full relative h-[600px] border border-obsidian/20 p-4">
                                <div className="absolute inset-0 m-4 border border-rust/30 p-4">
                                    <div className="w-full h-full bg-gradient-to-br from-rust/10 to-transparent flex flex-col justify-between p-8">
                                        <div className="font-sans text-xs tracking-widest uppercase text-rust">
                                            Institutional Anchor
                                        </div>
                                        <div className="w-full h-[1px] bg-obsidian/10 my-8" />
                                        <div className="font-grotesk text-3xl font-light text-obsidian">
                                            "A society's ultimate defense is the minds of its citizens."
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};