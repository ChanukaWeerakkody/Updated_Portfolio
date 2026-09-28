import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { Sun, Moon, Code2, Menu, X, Home, User, FolderKanban, BookOpen, Mail, Settings, MapPin } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import Magnetic from '@/components/ui/Magnetic';
import TimeDisplay from '@/components/ui/TimeDisplay';

const links = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: User },
  { label: 'Projects', href: '/projects', icon: FolderKanban },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: Mail },
];

const display = {
  location: true,
  time: true,
  themeSwitcher: true,
};

const person = {
  location: 'Asia/Colombo',
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const NavToggleButton = ({ link, isActive, showLabel = true }) => {
    const LinkIcon = link.icon;
    return (
      <Link
        to={link.href}
        onClick={() => setMobileOpen(false)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
          isActive 
            ? 'bg-accent/10 text-accent' 
            : 'text-muted-foreground hover:bg-neutral-500/10 hover:text-foreground'
        }`}
      >
        <LinkIcon size={18} />
        {showLabel && <span>{link.label}</span>}
      </Link>
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-20 pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="pointer-events-auto"
        >
          <div className="h-20 flex items-center justify-center px-4">
            <div className="w-full max-w-6xl flex items-center justify-between gap-4">
              {/* Left column - Location */}
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                {display.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} style={{ color: 'var(--accent)' }} />
                    <span className="font-mono text-xs">Bandaragama, LK</span>
                  </div>
                )}
              </div>

              {/* Center column - Navigation Card */}
              <div className="flex-1 flex justify-center">
                <div className="glass rounded-2xl px-4 py-3 shadow-lg border border-neutral-500/20 flex items-center gap-1">
                  <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                      <NavToggleButton
                        key={link.href + link.label}
                        link={link}
                        isActive={location.pathname === link.href}
                        showLabel={true}
                      />
                    ))}
                  </div>
                  <div className="md:hidden flex items-center gap-1">
                    {links.map((link) => (
                      <NavToggleButton
                        key={link.href + link.label}
                        link={link}
                        isActive={location.pathname === link.href}
                        showLabel={false}
                      />
                    ))}
                  </div>
                  
                  {/* Separator */}
                  <div className="hidden md:block w-px h-6 bg-neutral-500/30 mx-1" />
                  
                  {/* Theme Toggle */}
                  {display.themeSwitcher && (
                    <Magnetic>
                      <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-neutral-500/10 transition-colors"
                      >
                        {theme === 'dark' ? (
                          <Sun className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                        ) : (
                          <Moon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                        )}
                      </button>
                    </Magnetic>
                  )}
                  
                  {/* Theme Customizer */}
                  <Magnetic>
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-theme-customizer'))}
                      aria-label="Open Theme Customizer"
                      className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-neutral-500/10 transition-colors"
                    >
                      <Settings className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                    </button>
                  </Magnetic>
                </div>
              </div>

              {/* Right column - Time */}
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                {display.time && (
                  <div className="flex items-center gap-2">
                    <TimeDisplay timeZone={person.location} />
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                className="md:hidden glass rounded-xl w-10 h-10 flex items-center justify-center"
              >
                {mobileOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[50] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 bottom-0 z-[55] w-80 glass md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            >
              <div className="p-6 border-b border-neutral-500/20 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>Navigation</span>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
                  <X size={18} />
                </button>
              </div>
              <div className="p-4 flex flex-col gap-2">
                {links.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <Link
                      key={link.href + link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                        location.pathname === link.href
                          ? 'bg-accent/10 text-accent'
                          : 'text-muted-foreground hover:bg-neutral-500/10 hover:text-foreground'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <LinkIcon size={18} />
                        {link.label}
                      </span>
                      <span className="font-mono text-[10px] opacity-50">{link.href.slice(1).toUpperCase()}</span>
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile Theme Toggle */}
              <div className="p-4 border-t border-neutral-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <div className="flex items-center gap-2">
                    <Magnetic>
                      <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="glass rounded-xl w-10 h-10 flex items-center justify-center"
                      >
                        {theme === 'dark' ? (
                          <Sun className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                        ) : (
                          <Moon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                        )}
                      </button>
                    </Magnetic>
                    <Magnetic>
                      <button
                        onClick={() => window.dispatchEvent(new Event('open-theme-customizer'))}
                        aria-label="Open Theme Customizer"
                        className="glass rounded-xl w-10 h-10 flex items-center justify-center"
                      >
                        <Settings className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}