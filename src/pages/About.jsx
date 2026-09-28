import { lazy, Suspense, useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/lib/theme-context';

const MeshBackground = lazy(() => import('@/components/MeshBackground'));
const Preloader = lazy(() => import('@/components/Preloader'));
const Navbar = lazy(() => import('@/components/Navbar'));
const CustomCursor = lazy(() => import('@/components/ui/CustomCursor'));
const ScrollProgress = lazy(() => import('@/components/ui/ScrollProgress'));
const ThemeCustomizer = lazy(() => import('@/components/ThemeCustomizer'));
const Chatbot = lazy(() => import('@/components/Chatbot'));
const CommandPalette = lazy(() => import('@/components/CommandPalette'));
const ContextMenu = lazy(() => import('@/components/ui/ContextMenu'));
const Scene3D = lazy(() => import('@/components/Scene3D'));

import Personal from '@/components/Personal';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

export default function About() {
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

      <Suspense fallback={null}>
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <ThemeCustomizer />
        <CommandPalette />
        <Chatbot />
        <ContextMenu />
        <MeshBackground />
        <Navbar />
      </Suspense>

      <main className="relative pt-20">
        <Personal />
      </main>
      <main className="relative pt-20">
        <Experience />
      </main>
      <main className="relative pt-20">
        <Education />
      </main>
      <main className="relative pt-20">
        <TechStack />
      </main>
      <main className="relative pt-20">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </main>
      <main className="relative pt-20">
        <Footer />
      </main>
    </ThemeProvider>
  );
}
