import React from 'react';
import { FadeIn } from '../components/shared/FadeIn';
import { TextReveal } from '../components/shared/TextReveal';

const projects = [
    {
        id: "PRJ-AEGIS",
        title: "Aegis Extraction Protocol",
        type: "Volatile Region Security",
        color: "border-amber",
        bg: "bg-gradient-to-br from-amber/20 to-transparent",
        desc: "Autonomous, secure corridors established independent of local governmental infrastructure. Complete perimeter dominance."
    },
    {
        id: "PRJ-BUREAU",
        title: "The Bureau Framework",
        type: "Strategic Infrastructure",
        color: "border-steelblue",
        bg: "bg-gradient-to-br from-steelblue/20 to-transparent",
        desc: "Hard-asset reinvestment. Construction of physical safety networks and operational fortresses replacing temporary extraction camps."
    },
    {
        id: "PRJ-AURA",
        title: "Aura Network",
        type: "Anti-Trafficking Ops",
        color: "border-copper",
        bg: "bg-gradient-to-br from-copper/20 to-transparent",
        desc: "Deployment of specialized task forces neutralizing illicit networks. Transforming systemic exploitation into systemic opportunity."
    }
];

export const Portfolio: React.FC = () => {
    return (
        <div className="w-full bg-charcoal min-h-screen pt-32 pb-48 relative overflow-hidden">
            {/* Floating Orbs in background */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper/5 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-steelblue/5 rounded-full blur-[120px] animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <FadeIn direction="up">
                    <h1 className="font-sans text-xs uppercase tracking-[0.4em] text-copper mb-12">03. Portfolio</h1>
                </FadeIn>

                <div className="mb-32">
                    <TextReveal 
                        text={["Initiatives &", "Case Studies."]}
                        className="font-grotesk text-6xl md:text-8xl font-light text-white"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {projects.map((proj, idx) => (
                        <FadeIn key={proj.id} delay={idx * 300} revealOverlayColor="bg-obsidian" duration="duration-2000" className="h-[600px]">
                            <div className={`group relative h-full border border-white/5 bg-obsidian flex flex-col justify-between p-10 hover:border-white/30 transition-all duration-1000 overflow-hidden`}>
                                
                                {/* Background Gradient that scales up on hover */}
                                <div className={`absolute inset-0 ${proj.bg} opacity-20 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none transform scale-110 group-hover:scale-100 ease-webflow`} />
                                
                                <div className="relative z-10 flex justify-between items-start">
                                    <span className="font-sans text-xs tracking-[0.2em] text-muted group-hover:text-white transition-colors">{proj.id}</span>
                                    <div className={`w-4 h-4 border border-white/20 group-hover:${proj.color} transition-colors duration-500 rounded-sm group-hover:rotate-45`} />
                                </div>

                                <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-webflow">
                                    <span className="block font-sans text-xs uppercase tracking-widest text-muted mb-6 group-hover:text-offwhite transition-colors">
                                        {proj.type}
                                    </span>
                                    <h3 className="font-grotesk text-3xl text-white mb-6">
                                        {proj.title}
                                    </h3>
                                    <p className="font-sans text-base text-muted/80 font-light leading-relaxed group-hover:text-white transition-colors">
                                        {proj.desc}
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