import React, { createContext, useContext, useState, ReactNode } from 'react';

type TransitionState = 'idle' | 'entering' | 'exiting';

interface NavContextType {
    currentPage: string;
    navigate: (page: string) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (val: boolean) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home');
    const [transState, setTransState] = useState<TransitionState>('idle');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = (page: string) => {
        if (page === currentPage || transState !== 'idle') return;
        
        setIsMenuOpen(false);
        setTransState('entering');
        
        setTimeout(() => {
            setCurrentPage(page);
            window.scrollTo(0, 0);
            setTransState('exiting');
            
            setTimeout(() => {
                setTransState('idle');
            }, 1500);
        }, 1200);
    };

    return (
        <NavContext.Provider value={{ currentPage, navigate, isMenuOpen, setIsMenuOpen }}>
            {/* Cinematic Multi-Stripe Wipe Overlay */}
            <div className={`fixed inset-0 z-[100] flex pointer-events-none ${transState === 'idle' ? 'hidden' : ''}`}>
                {[0, 1, 2, 3, 4].map((i) => (
                    <div 
                        key={i}
                        className="flex-1 h-full bg-obsidian border-r border-white/5 relative overflow-hidden transition-transform duration-1000 ease-webflow"
                        style={{
                            transformOrigin: transState === 'entering' ? 'bottom' : 'top',
                            transform: transState === 'entering' ? 'scaleY(1)' : 'scaleY(0)',
                            transitionDelay: transState === 'entering' ? `${i * 100}ms` : `${(4 - i) * 100}ms`
                        }}
                    >
                        <div className="absolute inset-0 bg-metallic animate-metallic opacity-20" />
                        <div className="absolute inset-0 bg-noise opacity-10" />
                    </div>
                ))}
                
                {/* Global Transition Overlay Text */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${transState === 'entering' ? 'opacity-100 delay-500' : 'opacity-0'}`}>
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-[1px] bg-copper" />
                        <span className="font-sans text-xs uppercase tracking-[0.5em] text-white animate-pulse">Establishing Link</span>
                        <div className="w-12 h-[1px] bg-copper" />
                    </div>
                </div>
            </div>
            {children}
        </NavContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavContext);
    if (!context) throw new Error("useNavigation must be used within NavigationProvider");
    return context;
};