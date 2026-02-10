import React from 'react';
import { NavigationProvider, useNavigation } from './components/Router';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Operations } from './pages/Operations';
import { Education } from './pages/Education';
import { Impact } from './pages/Impact';
import { Vision } from './pages/Vision';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';

const PageRenderer: React.FC = () => {
    const { currentPage } = useNavigation();
    
    switch (currentPage) {
        case 'home': return <Home />;
        case 'about': return <About />;
        case 'operations': return <Operations />;
        case 'education': return <Education />;
        case 'impact': return <Impact />;
        case 'vision': return <Vision />;
        case 'portfolio': return <Portfolio />;
        case 'contact': return <Contact />;
        default: return <Home />;
    }
};

const App: React.FC = () => {
    return (
        <NavigationProvider>
            <main className="flex flex-col w-full min-h-screen relative bg-obsidian text-offwhite">
                {/* Fixed Border Framing for Studio/Editorial feel */}
                <div className="fixed top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-copper/20 to-transparent z-[70] pointer-events-none" />
                <div className="fixed bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-steelblue/20 to-transparent z-[70] pointer-events-none" />
                
                <Navigation />
                <PageRenderer />
                <Footer />
            </main>
        </NavigationProvider>
    );
};

export default App;