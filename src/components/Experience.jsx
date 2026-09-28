import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    title: 'Software Engineer',
    company: 'Aventure – Sri Lanka',
    period: 'Aug 2026 — Present',
    branch: 'feat/software-engineer',
    points: [
      'Architected and maintained production-grade backend systems for enterprise SaaS & mobile apps (Sivilima Inote & Ipanel), supporting daily active users across web and Play Store platforms.',
      'Designed and implemented secure RESTful APIs using Spring Boot, NestJS, Node.js, and PHP with JWT-based authentication and RBAC for React and React Native integrations.',
      'Optimized MySQL query performance and backend logic, significantly improving API response times.',
      'Contributed as Core Backend Engineer for production apps including KPI Score, SalesWin, and JobsNinja.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Aventure – Sri Lanka',
    period: 'Feb 2025 — July 2026',
    branch: 'feat/associate-software-engineer',
    points: [
      'API Design & Security: Designed and maintained secure, scalable RESTful APIs using Spring Boot, NestJS, Node.js, and PHP with RBAC and advanced authentication frameworks to ensure data security.',
      'Database Optimization: Optimized MySQL query performance and backend logic, significantly improving API response times, system scalability, and reliability for high-traffic environments.',
      'Core Backend Engineering: Contributed as Core Backend Engineer for production apps (KPI Score, SalesWin, JobsNinja), managing user access and business-critical logic.',
      'Cross-Functional Collaboration: Partnered with frontend teams to deliver end-to-end features, ensuring robust access control standards and seamless UI/UX across web and mobile channels.',
    ],
  },
  {
    title: 'Intern Software Engineer',
    company: 'Redcode Solutions – Sri Lanka',
    period: 'Feb 2024 — Jan 2025',
    branch: 'feat/software-engineer-intern',
    points: [
      'Contributed as Software Engineer Intern for Fishing Platform & Busy POS System using NestJS and Spring Boot',
      'Designed and maintained RESTful APIs with Role-Based Access Control (RBAC)',
      'Engineered high-performance retail services for Busy POS using MongoDB for complex data handling',
      'Engineered backend architectures ensuring high availability and seamless data synchronization',
    ],
  },
];

function RoleCard({ r, align }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-6"
    >
      <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
        {r.branch}
      </span>
      <h3 className="text-xl font-bold mt-2">{r.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">
        @ {r.company} · {r.period}
      </p>
      <ul className="mt-4 space-y-1.5">
        {r.points.map((p, j) => (
          <li key={j} className="font-mono text-xs text-muted-foreground flex gap-2">
            <span className="text-green-500">+</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-28 px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-white/50 dark:to-white/80">Experience</span></h2>
        <p className="mt-3 text-muted-foreground">Career progression, versioned as commits.</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)' }}
        />
        <div className="space-y-12">
          {roles.map((r, i) => {
            const left = i % 2 === 1;
            return (
              <div key={i} className="relative md:grid md:grid-cols-2 md:gap-12 items-start">
                <div
                  className="absolute left-4 md:left-1/2 top-7 -translate-x-1/2 w-4 h-4 rounded-full z-10"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 16px var(--glow)' }}
                />
                {left ? (
                  <div className="pl-12 md:pl-0">
                    <RoleCard r={r} align="left" />
                  </div>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="pl-12 md:pl-0">
                      <RoleCard r={r} align="right" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
