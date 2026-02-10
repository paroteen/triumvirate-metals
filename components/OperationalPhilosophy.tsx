import React from 'react';
import { FadeIn } from './shared/FadeIn';

export const OperationalPhilosophy: React.FC = () => {
    return (
        <section className="py-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                
                <FadeIn>
                    <div className="mb-24">
                        <h2 className="font-grotesk text-3xl md:text-5xl font-light mb-6">Operational Philosophy</h2>
                        <p className="font-sans text-muted max-w-2xl font-light">
                            We do not participate in optics-driven philanthropy. Our methodology relies on hard systems, structured reinvestment, and actionable power.
                        </p>
                    </div>
                </FadeIn>

                <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-16 pb-12 space-y-24">
                    
                    {/* Timeline Node 1 */}
                    <FadeIn direction="left">
                        <div className="relative">
                            <div className="absolute w-3 h-3 bg-obsidian border border-copper rounded-full -left-[38px] md:-left-[70px] top-2" />
                            <h3 className="font-sans tracking-widest text-sm text-copper uppercase mb-4">Phase One</h3>
                            <h4 className="font-grotesk text-2xl text-white mb-4">Sustainable Revenue Generation</h4>
                            <p className="font-sans text-muted font-light max-w-xl text-sm md:text-base leading-relaxed">
                                Elite extraction operations are established utilizing advanced technologies. Yield is maximized while adhering to strict environmental containment protocols. The profit engine is ignited.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Timeline Node 2 */}
                    <FadeIn direction="left" delay={200}>
                        <div className="relative">
                            <div className="absolute w-3 h-3 bg-obsidian border border-steelblue rounded-full -left-[38px] md:-left-[70px] top-2" />
                            <h3 className="font-sans tracking-widest text-sm text-steelblue uppercase mb-4">Phase Two</h3>
                            <h4 className="font-grotesk text-2xl text-white mb-4">Infrastructure Over Optics</h4>
                            <p className="font-sans text-muted font-light max-w-xl text-sm md:text-base leading-relaxed">
                                Revenue is immediately converted into hard assets in the operational theater. Physical safety networks are constructed. Private security perimeters are fortified. We build fortresses of stability, not temporary camps.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Timeline Node 3 */}
                    <FadeIn direction="left" delay={400}>
                        <div className="relative">
                            <div className="absolute w-3 h-3 bg-obsidian border border-white rounded-full -left-[38px] md:-left-[70px] top-2" />
                            <h3 className="font-sans tracking-widest text-sm text-white uppercase mb-4">Phase Three</h3>
                            <h4 className="font-grotesk text-2xl text-white mb-4">Systems Over Charity</h4>
                            <p className="font-sans text-muted font-light max-w-xl text-sm md:text-base leading-relaxed">
                                Deployment of specialized anti-trafficking task forces within the secure zone. Construction of first-world educational facilities. We replace systemic exploitation with systemic opportunity, enforced by capability.
                            </p>
                        </div>
                    </FadeIn>

                </div>

                {/* Abstract Diagram / Loop */}
                <FadeIn delay={600}>
                    <div className="mt-16 border border-white/5 bg-charcoal/30 p-8 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
                        <div className="text-center flex-1">
                            <span className="font-sans text-xs tracking-widest text-muted uppercase block mb-2">Input</span>
                            <span className="font-grotesk text-lg text-white">Ethical Extraction</span>
                        </div>
                        <div className="text-copper/50">→</div>
                        <div className="text-center flex-1">
                            <span className="font-sans text-xs tracking-widest text-muted uppercase block mb-2">Mechanism</span>
                            <span className="font-grotesk text-lg text-white">Defense Protocol</span>
                        </div>
                        <div className="text-copper/50">→</div>
                        <div className="text-center flex-1">
                            <span className="font-sans text-xs tracking-widest text-muted uppercase block mb-2">Output</span>
                            <span className="font-grotesk text-lg text-white">Humanitarian Reality</span>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};