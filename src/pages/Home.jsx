import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/lib/theme-context';
import MeshBackground from '@/components/MeshBackground';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ThemeCustomizer from '@/components/ThemeCustomizer';
import Chatbot from '@/components/Chatbot';
import CommandPalette from '@/components/CommandPalette';
import ContextMenu from '@/components/ui/ContextMenu';
import AboutSection from '@/components/About';
import Services from '@/components/Services';
import Terminal from '@/components/Terminal';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <Toaster position="bottom-right" toastOptions={{ style: { background: '#333', color: '#fff', borderRadius: '10px' } }} />
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <ThemeCustomizer />
      <CommandPalette />
      <Chatbot />
      <ContextMenu />
      <MeshBackground />
      <Navbar />
      <main className="relative">
        <Hero />
      </main>
      <main className="relative pt-20">
        <AboutSection />
      </main>
      <main className="relative pt-20">
        <Services />
      </main>
      <main className="relative pt-20">
        <Terminal />
      </main>
      <main className="relative pt-20">
        <Footer />
      </main>
    </ThemeProvider>
  );
}
