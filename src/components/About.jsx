import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

const terminalLines = [
  '> Initializing system...',
  '> Loading core modules: Laravel, Spring Boot, NestJS, Node.js...',
  '> Establishing database connections: MySQL, PostgreSQL, MongoDB, Redis...',
  '> Bootstrapping microservices & REST APIs...',
  '> Mounting API routes with JWT Auth & RBAC...',
  '> SUCCESS: System operational. Ready to architect.'
];

function AnimatedTerminal() {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 w-full max-w-lg mx-auto">
      {/* Terminal Header */}
      <div className="bg-black/10 dark:bg-white/10 px-4 py-3 flex items-center gap-2 border-b border-black/10 dark:border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <TerminalIcon size={14} />
          <span>chanuka@portfolio:~</span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 font-mono text-sm md:text-base min-h-[250px] bg-black/5 dark:bg-transparent">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-2 ${i === terminalLines.length - 1 ? 'text-green-500' : 'text-foreground/80'}`}
          >
            {line}
          </motion.div>
        ))}
        {lines.length < terminalLines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2.5 h-5 bg-foreground/70 inline-block align-middle"
          />
        )}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-6">
            Architecting robust backend systems &amp; scalable REST APIs.
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a Backend Software Engineer with over two years of experience designing, architecting, and maintaining production-grade systems. 
              My core expertise lies in PHP (Laravel), Spring Boot, NestJS, and Node.js.
            </p>
            <p>
              I specialize in JWT authentication, role-based authorization (RBAC), database query optimization, and microservices architecture. 
              Collaborating seamlessly across cross-functional teams, I deliver end-to-end features ensuring data security and high availability across web and Play Store platforms.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedTerminal />
        </motion.div>

      </div>
    </section>
  );
}
