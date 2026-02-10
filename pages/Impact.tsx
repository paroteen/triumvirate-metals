import React from 'react';
import { FadeIn } from '../components/shared/FadeIn';
import { TextReveal } from '../components/shared/TextReveal';
import { BackgroundMedia } from '../components/shared/BackgroundMedia';

export const Impact: React.FC = () => {
    return (
        <div className="w-full bg-deepblue min-h-screen pt-32 pb-48 relative overflow-hidden">
            
            <BackgroundMedia 
                videoSrc="https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-background-with-flowing-lines-and-light-9742-large.mp4"
                overlayColor="bg-deepblue"
                overlayOpacity="opacity-90"
                parallaxSpeed={0.1}
            />

            {/* Radar / Deep Water Visual Rings */}
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-steelblue/20 opacity-50 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full border border-steelblue/10 opacity-30 pointer-events-none animate-[pulse_12s_ease-in-out_infinite_delay-2s]" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <FadeIn direction="down">
                    <h1 className="font-sans text-xs uppercase tracking-[0.4em] text-steelblue mb-12">04. Impact</h1>
                </FadeIn>

                <div className="mb-32">
                    <TextReveal 
                        text={["Redefining", "Strategic Terrain."]}
                        className="font-grotesk text-6xl md:text-8xl font-light text-offwhite"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div>
                        <FadeIn delay={200} direction="right">
                            <p className="font-sans text-2xl text-white font-light leading-relaxed mb-12 border-l-2 border-steelblue pl-8">
                                We do not participate in optics-driven philanthropy. Our methodology relies on hard systems, structured reinvestment, and actionable power.
                            </p>
                        </FadeIn>
                        
                        <div className="space-y-20 pl-8 border-l border-white/5 mt-24">
                            <FadeIn delay={300} direction="right">
                                <h3 className="font-sans tracking-widest text-xs text-steelblue uppercase mb-4">Phase One</h3>
                                <h4 className="font-grotesk text-3xl text-white mb-6">Sustainable Revenue</h4>
                                <p className="font-sans text-muted font-light text-lg leading-relaxed">
                                    Elite extraction operations generate maximized yield. Environmental containment is absolute. The profit engine is ignited.
                                </p>
                            </FadeIn>
                            
                            <FadeIn delay={400} direction="right">
                                <h3 className="font-sans tracking-widest text-xs text-steelblue uppercase mb-4">Phase Two</h3>
                                <h4 className="font-grotesk text-3xl text-white mb-6">Infrastructure Over Optics</h4>
                                <p className="font-sans text-muted font-light text-lg leading-relaxed">
                                    Revenue is converted into hard assets. Private security perimeters are fortified. We build fortresses of stability.
                                </p>
                            </FadeIn>

                            <FadeIn delay={500} direction="right">
                                <h3 className="font-sans tracking-widest text-xs text-steelblue uppercase mb-4">Phase Three</h3>
                                <h4 className="font-grotesk text-3xl text-white mb-6">Systems Over Charity</h4>
                                <p className="font-sans text-muted font-light text-lg leading-relaxed">
                                    Deployment of anti-trafficking forces and first-world educational facilities. Systemic opportunity enforced by capability.
                                </p>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Data Visualization Block */}
                    <div className="flex items-center justify-center">
                        <FadeIn delay={600} revealOverlayColor="bg-steelblue" className="w-full h-full min-h-[600px]">
                            <div className="border border-steelblue/20 bg-black/40 backdrop-blur-xl p-16 text-center flex flex-col items-center justify-center gap-12 h-full w-full relative overflow-hidden group">
                                <div className="absolute inset-0 bg-metallic animate-metallic opacity-10 pointer-events-none" />
                                
                                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
                                    <span className="font-sans text-xs tracking-widest text-steelblue uppercase block mb-4">Input</span>
                                    <span className="font-grotesk text-3xl text-white">Ethical Extraction</span>
                                </div>
                                
                                <div className="w-[1px] h-16 bg-gradient-to-b from-steelblue to-transparent relative z-10" />
                                
                                <div className="relative z-10 transform transition-transform duration-700">
                                    <span className="font-sans text-xs tracking-widest text-steelblue uppercase block mb-4">Mechanism</span>
                                    <span className="font-grotesk text-3xl text-white">Defense Protocol</span>
                                </div>
                                
                                <div className="w-[1px] h-16 bg-gradient-to-b from-steelblue to-transparent relative z-10" />
                                
                                <div className="relative z-10 transform group-hover:translate-y-2 transition-transform duration-700">
                                    <span className="font-sans text-xs tracking-widest text-steelblue uppercase block mb-4">Output</span>
                                    <span className="font-grotesk text-3xl text-white">Humanitarian Reality</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};