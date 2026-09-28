import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { ArrowRight, Github, Linkedin, FileText, Mail, Sparkles, BookOpen } from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';
import { TypeAnimation } from 'react-type-animation';

const PROFILE_URL = '/profile.png';

function DockIcon({ href, label, children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 14 });
  const sy = useSpring(y, { stiffness: 250, damping: 14 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.5);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-125 hover:-translate-y-1.5 transition-transform duration-300 ease-out group"
    >
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
        style={{ background: 'var(--glow)' }}
      />
      <span
        className="relative group-hover:scale-110 transition-transform duration-300"
        style={{ color: 'var(--accent)' }}
      >
        {children}
      </span>
      {/* Tooltip */}
      <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none text-xs font-mono px-3 py-1.5 rounded-lg bg-foreground text-background shadow-xl whitespace-nowrap translate-y-2 group-hover:translate-y-0">
        {label}
      </span>
    </motion.a>
  );
}


export default function Personal() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 18 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-4 md:pb-8 overflow-hidden text-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000 }}
        className="relative mb-6"
      >
        <div className="float-anim">
          <div
            className="absolute -inset-5 rounded-full blur-3xl glow-pulse"
            style={{ background: 'var(--glow)' }}
          />
          <div className="relative glass rounded-full p-3 w-44 h-44 md:w-52 md:h-52">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={PROFILE_URL}
                alt="Chanuka Weerakkody"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <motion.div
            className="absolute -top-2 -right-2 glass rounded-2xl w-11 h-11 flex items-center justify-center font-mono text-sm font-bold gradient-text"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            &lt;/&gt;
          </motion.div>
        </div>
      </motion.div>

      <motion.span
        className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.6 }}
      >
        <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
      </motion.span>

      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.7 }}
      >
        <span className="gradient-text-anim">Chanuka Weerakkody</span>
      </motion.h1>

      <motion.p
        className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.7, duration: 0.6 }}
      >
        Results-driven Backend Software Engineer with 2+ years of experience architecting and maintaining production-grade systems. Specialized in PHP (Laravel), Spring Boot, NestJS, and Node.js to build secure, scalable RESTful APIs and microservices for high-traffic applications.
      </motion.p>

       <motion.div
          className="glass rounded-full px-3 py-3 inline-flex items-center gap-1 mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <DockIcon href="https://github.com/chanukaweerakkody" label="GitHub">
            <Github className="w-6 h-6 md:w-7 md:h-7" />
          </DockIcon>
          <DockIcon href="https://www.linkedin.com/in/chanuka-weerakkody" label="LinkedIn">
            <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
          </DockIcon>
          <DockIcon href="mailto:chanuka.weerakkody123@gmail.com" label="Email">
            <Mail className="w-6 h-6 md:w-7 md:h-7" />
          </DockIcon>
          <DockIcon href="/Chanuka_Weerakkody_CV.pdf" label="Resume">
            <FileText className="w-6 h-6 md:w-7 md:h-7" />
          </DockIcon>
        </motion.div>

      {/* <motion.div
        className="flex flex-wrap gap-3 md:gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.9, duration: 0.6 }}
      >
        
        <Magnetic>
          <a
            href="#projects"
            className="hero-cta hero-cta-primary"
          >
            <span>View Projects</span>
            <ArrowRight className="hero-cta-icon" size={17} />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#contact" className="hero-cta hero-cta-secondary">
            <Mail size={16} />
            <span>Get in Touch</span>
          </a>
        </Magnetic>
      </motion.div> */}
    </section>
  );
}