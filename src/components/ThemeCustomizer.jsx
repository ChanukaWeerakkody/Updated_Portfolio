import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Palette, Volume2, VolumeX, RotateCcw, Sun, Moon, Type } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

const colors = [
  { name: 'Blue', accent: '#64D2FF', glow: 'rgba(100, 210, 255, 0.4)' },
  { name: 'Emerald', accent: '#34d399', glow: 'rgba(52, 211, 153, 0.4)' },
  { name: 'Violet', accent: '#a78bfa', glow: 'rgba(167, 139, 250, 0.4)' },
  { name: 'Rose', accent: '#fb7185', glow: 'rgba(251, 113, 133, 0.4)' },
  { name: 'Amber', accent: '#fbbf24', glow: 'rgba(251, 191, 36, 0.4)' },
];

const fonts = [
  { id: 'sans', name: 'Sans', family: 'ui-sans-serif, system-ui, -apple-system, sans-serif' },
  { id: 'serif', name: 'Serif', family: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' },
  { id: 'mono', name: 'Mono', family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' },
];

const DEFAULT_COLOR = colors[0];
const DEFAULT_FONT = fonts[0];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeColor, setActiveColor] = useState(DEFAULT_COLOR.name);
  const [activeFont, setActiveFont] = useState(DEFAULT_FONT.id);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Apply CSS Custom Variables for Accent Color
  const applyColor = useCallback((colorObj) => {
    setActiveColor(colorObj.name);
    document.documentElement.style.setProperty('--accent', colorObj.accent);
    document.documentElement.style.setProperty('--glow', colorObj.glow);
    localStorage.setItem('portfolio-color', colorObj.name);
  }, []);

  // Apply Font Family
  const applyFont = useCallback((fontObj) => {
    setActiveFont(fontObj.id);
    document.documentElement.style.setProperty('--font-custom', fontObj.family);
    document.body.style.fontFamily = fontObj.family;
    localStorage.setItem('portfolio-font', fontObj.id);
  }, []);

  // Listen for custom open event
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-theme-customizer', handleOpen);
    return () => window.removeEventListener('open-theme-customizer', handleOpen);
  }, []);

  // Load initial settings
  useEffect(() => {
    const savedColor = localStorage.getItem('portfolio-color');
    const savedFont = localStorage.getItem('portfolio-font');
    const savedSound = localStorage.getItem('portfolio-sound');

    if (savedColor) {
      const colorObj = colors.find((c) => c.name === savedColor);
      if (colorObj) applyColor(colorObj);
    } else {
      applyColor(DEFAULT_COLOR);
    }

    if (savedFont) {
      const fontObj = fonts.find((f) => f.id === savedFont);
      if (fontObj) applyFont(fontObj);
    } else {
      applyFont(DEFAULT_FONT);
    }

    if (savedSound !== null) {
      setSoundEnabled(savedSound === 'true');
    }
  }, [applyColor, applyFont]);

  // Sound preference toggle
  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    localStorage.setItem('portfolio-sound', String(newState));
    window.dispatchEvent(
      new CustomEvent('sound-preference-changed', { detail: { enabled: newState } })
    );
  };

  // Reset all customization to default
  const resetToDefault = () => {
    applyColor(DEFAULT_COLOR);
    applyFont(DEFAULT_FONT);
    setSoundEnabled(true);
    localStorage.setItem('portfolio-sound', 'true');
    window.dispatchEvent(
      new CustomEvent('sound-preference-changed', { detail: { enabled: true } })
    );
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow text-foreground"
        aria-label="Open Theme Customizer"
      >
        <Settings size={20} className="text-[var(--accent)]" />
      </motion.button>

      {/* Modal / Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[101] bg-black/40 backdrop-blur-sm"
            />

            {/* Floating Customizer Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-20 right-6 z-[102] w-80 p-6 rounded-3xl shadow-2xl border border-white/20 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl text-foreground"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-base flex items-center gap-2">
                  <Palette size={18} className="text-[var(--accent)]" /> Customizer
                </h3>
                <div className="flex items-center gap-1">
                  <button
                    onClick={resetToDefault}
                    title="Reset to default"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    aria-label="Close customizer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Accent Color Palette */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 block">
                    Accent Color
                  </label>
                  <div className="flex gap-2.5 items-center justify-between">
                    {colors.map((c) => {
                      const isActive = activeColor === c.name;
                      return (
                        <button
                          key={c.name}
                          onClick={() => applyColor(c)}
                          className={`w-9 h-9 rounded-full relative transition-transform duration-200 flex items-center justify-center ${
                            isActive ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'
                          }`}
                          style={{
                            backgroundColor: c.accent,
                            boxShadow: isActive ? `0 0 12px ${c.glow}` : 'none',
                          }}
                          title={c.name}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="activeColorRing"
                              className="absolute -inset-1 rounded-full border-2 border-[var(--accent)]"
                              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Font Family Selector */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 block flex items-center gap-1.5">
                    <Type size={14} /> Typography
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    {fonts.map((f) => {
                      const isActive = activeFont === f.id;
                      return (
                        <button
                          key={f.id}
                          onClick={() => applyFont(f)}
                          style={{ fontFamily: f.family }}
                          className={`py-2 text-xs font-medium rounded-lg transition-all text-center ${
                            isActive
                              ? 'bg-white dark:bg-zinc-800 text-foreground shadow-sm border border-black/5 dark:border-white/10'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {f.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Appearance Mode */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 block">
                    Appearance
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <button
                      onClick={() => theme !== 'light' && toggleTheme()}
                      className={`flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-lg transition-all ${
                        theme === 'light'
                          ? 'bg-white dark:bg-zinc-800 text-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Sun size={14} /> Light
                    </button>
                    <button
                      onClick={() => theme !== 'dark' && toggleTheme()}
                      className={`flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-lg transition-all ${
                        theme === 'dark'
                          ? 'bg-white dark:bg-zinc-800 text-foreground shadow-sm'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Moon size={14} /> Dark
                    </button>
                  </div>
                </div>

                {/* Audio Effects Toggle */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 block">
                    Audio Effects
                  </label>
                  <button
                    onClick={toggleSound}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[var(--accent)]/40 transition-all"
                  >
                    <span className="text-xs font-medium">UI Micro-interactions</span>
                    {soundEnabled ? (
                      <Volume2 size={16} className="text-[var(--accent)]" />
                    ) : (
                      <VolumeX size={16} className="text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}