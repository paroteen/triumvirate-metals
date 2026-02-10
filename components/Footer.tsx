import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-obsidian py-12 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-copper" />
                    <span className="font-grotesk text-lg font-medium text-white tracking-wide">Triumvirate Metals</span>
                </div>

                <div className="font-sans text-[10px] tracking-[0.3em] text-muted uppercase">
                    Built for stability. Designed for impact.
                </div>

                <div className="font-sans text-xs text-muted/40">
                    &copy; {new Date().getFullYear()} Triumvirate Metals. Restricted.
                </div>

            </div>
        </footer>
    );
};