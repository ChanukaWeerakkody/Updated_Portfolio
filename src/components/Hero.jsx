import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-4 md:pb-8 overflow-hidden text-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* New Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-8"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <span className="gradient-text-anim">Building Architecture</span>
          <br />
          <span className="gradient-text-anim">for Performance</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Chanuka Weerakkody — Backend Software Engineer
        </motion.p>
      </motion.div>

      <motion.span
        className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <Sparkles className="w-4 h-4" style={{ color: 'var(--accent)' }} />
        <TypeAnimation
          sequence={[
            'Backend Software Engineer',
            2000,
            'Spring Boot & NestJS Specialist',
            2000,
            'PHP / Laravel & Node.js Developer',
            2000,
            'Microservices & REST API Architect',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.span>

      <motion.p
        className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        Architecting secure, scalable RESTful APIs, microservices, and production-grade backend systems for enterprise SaaS and mobile applications.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3 md:gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <Magnetic>
          <Link
            to="/projects"
            className="hero-cta hero-cta-primary"
          >
            <span>Explore Projects</span>
            <ArrowRight className="hero-cta-icon" size={17} />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link to="/contact" className="hero-cta hero-cta-secondary">
            <Mail size={16} />
            <span>Get in Touch</span>
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}