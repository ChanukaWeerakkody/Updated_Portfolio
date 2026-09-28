import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { ArrowUpRight, Github, ExternalLink, X, Database, Shield, Zap } from 'lucide-react';
import { uiAudio } from '@/lib/audio';

const PROJECT_KAFKA = 'https://media.licdn.com/dms/image/v2/D5622AQGPnzXgjnFcpA/feedshare-shrink_1280/B56Z2cs6F_IUAM-/0/1776450511570?e=1792022400&v=beta&t=cl_CB9-WQYWK126KjLWR57rvth8fQe5UcEICoDsDHm0';
const PROJECT1 = 'https://media.base44.com/images/public/6aa78c30735eca22a9da0edd/36cff83c8_generated_e864fc7a.jpg';
const PROJECT2 = 'https://media.base44.com/images/public/6aa78c30735eca22a9da0edd/4263eb89b_generated_image.png';
const PROJECT3 = 'https://media.base44.com/images/public/6aa78c30735eca22a9da0edd/0d528147c_generated_image.png';
const PROJECT4 = 'https://media.base44.com/images/public/6aa78c30735eca22a9da0edd/ceeda6524_generated_image.png';
const PROJECT5 = 'https://media.base44.com/images/public/6aa78c30735eca22a9da0edd/3a77b3232_generated_image.png';

const projects = [
  {
    title: 'Real-Time Crypto Market Terminal',
    description: 'High-performance real-time cryptocurrency data pipeline featuring event-driven architecture with Apache Kafka (Aiven Cloud), Node.js, WebSockets (Socket.io), and SSL/TLS encryption.',
    tags: ['Apache Kafka', 'Node.js', 'WebSockets', 'Aiven Cloud', 'Docker', 'Tailwind CSS'],
    image: PROJECT_KAFKA,
    github: 'https://github.com/ChanukaWeerakkody/kafka-crypto-project',
    details: {
      challenge: "Handling high-throughput live market streams with zero-lag data delivery and enterprise SSL/TLS broker security.",
      solution: "Architected a KafkaJS producer streaming live BTC prices to Aiven Cloud Kafka, fanning out via Socket.io WebSockets to a Binance-style dark-mode Chart.js UI.",
      metrics: [
        { icon: Zap, label: "Broker", value: "Apache Kafka" },
        { icon: Shield, label: "Security", value: "SSL/TLS CA" },
        { icon: Database, label: "Streaming", value: "WebSockets" }
      ]
    }
  },
  {
    title: 'SC Graphic – Resin Art & Printing Platform',
    description: 'Developed a full-featured e-commerce backend by architecting secure RESTful APIs for user authentication, product catalog management, and order processing with Spring Security.',
    tags: ['Spring Boot', 'Spring Security', 'React', 'MySQL'],
    image: PROJECT1,
    github: 'https://github.com/chanukaweerakkody',
    details: {
      challenge: "Architecting a secure e-commerce backend with granular authentication and fast product catalog retrieval.",
      solution: "Implemented Spring Security with JWT token validation and optimized relational database schemas for product ordering flows.",
      metrics: [
        { icon: Shield, label: "Security", value: "Spring Sec" },
        { icon: Zap, label: "API Latency", value: "< 80ms" },
        { icon: Database, label: "Database", value: "MySQL" }
      ]
    }
  },
  {
    title: 'I Mobile Crazy – Mobile Commerce Platform',
    description: 'Built a scalable backend for a mobile phone marketplace, including Role-Based Access Control (RBAC), secure order management, and protected product APIs.',
    tags: ['Spring Boot', 'Spring Security', 'React', 'MySQL'],
    image: PROJECT2,
    github: 'https://github.com/chanukaweerakkody',
    details: {
      challenge: "Ensuring secure transaction workflows and role-based authorization for multi-user inventory and order management.",
      solution: "Enforced custom RBAC security filters and transactional database boundaries using Spring Boot and MySQL.",
      metrics: [
        { icon: Shield, label: "RBAC", value: "Strict Roles" },
        { icon: Zap, label: "Orders", value: "ACID Guaranteed" },
        { icon: Database, label: "DB Schema", value: "Relational" }
      ]
    }
  },
  {
    title: 'Mediplus – Healthcare Locator App',
    description: 'Delivered a React Native mobile application featuring real-time positioning to locate nearby hospitals and Ayurvedic centers, leveraging Google Location API.',
    tags: ['React Native', 'Google Location API', 'REST API'],
    image: PROJECT3,
    github: 'https://github.com/chanukaweerakkody',
    details: {
      challenge: "Retrieving and filtering nearby medical facilities dynamically based on real-time device coordinates.",
      solution: "Integrated Google Location API with optimized geo-coordinate queries and smooth React Native UI render cycles.",
      metrics: [
        { icon: Zap, label: "Location", value: "Real-time" },
        { icon: Shield, label: "Platform", value: "iOS / Android" },
        { icon: Database, label: "API", value: "Google Maps" }
      ]
    }
  },
  {
    title: 'Edu Zone – Learning Management System',
    description: 'Built a full-stack LMS supporting course browsing, purchase flows, progress tracking, and certification, tailored for a modern online learning experience.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js (MERN)'],
    image: PROJECT4,
    github: 'https://github.com/chanukaweerakkody',
    details: {
      challenge: "Managing student progress states, course video content delivery, and seamless checkout operations.",
      solution: "Engineered a unified MERN stack backend with MongoDB document indexing and JWT-protected user sessions.",
      metrics: [
        { icon: Zap, label: "Fullstack", value: "MERN Stack" },
        { icon: Shield, label: "Auth", value: "JWT Session" },
        { icon: Database, label: "Storage", value: "MongoDB" }
      ]
    }
  },
  {
    title: 'Next Travel – Travel Booking Platform',
    description: 'Architected a microservices-based booking platform for hotels, vehicles, and tour guides, enabling users to search, book, and manage end-to-end travel reservations online.',
    tags: ['Spring Boot', 'MySQL', 'Microservices'],
    image: PROJECT5,
    github: 'https://github.com/chanukaweerakkody',
    details: {
      challenge: "Decoupling monolithic booking logic into independent microservices for hotel, vehicle, and guide reservations.",
      solution: "Designed microservice APIs communicating via REST and centralized configurations, deployed on Spring Boot & MySQL.",
      metrics: [
        { icon: Zap, label: "Architecture", value: "Microservices" },
        { icon: Shield, label: "Booking", value: "End-to-End" },
        { icon: Database, label: "Persistence", value: "MySQL" }
      ]
    }
  },
];

function ProjectModal({ project, onClose }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-md"
      />
      <div className="fixed inset-0 z-[111] flex items-center justify-center p-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-4xl max-h-[90vh] glass bg-white/90 dark:bg-zinc-950/90 rounded-3xl overflow-hidden pointer-events-auto flex flex-col md:flex-row shadow-2xl border border-[var(--accent)]/20"
        >
          {/* Left: Image & Visuals */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black/5 dark:bg-white/5">
            <Image src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
               <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          
          {/* Right: Deep Dive Details */}
          <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar flex flex-col">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-[var(--accent)] transition-colors z-10"
            >
              <X size={16} />
            </button>

            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] mb-2">Deep Dive Architecture</span>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">{project.description}</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> The Challenge
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                  {project.details.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> The Solution
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                  {project.details.solution}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {project.details.metrics.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center p-3 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/10">
                    <Icon size={16} className="text-[var(--accent)] mb-2" />
                    <span className="font-bold text-xs">{m.value}</span>
                    <span className="text-[10px] text-muted-foreground font-mono uppercase mt-1">{m.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-auto pt-8 flex gap-3">
              <a href={project.github || "https://github.com/chanukaweerakkody"} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity">
                <ExternalLink size={16} /> Open Repository
              </a>
              <a href={project.github || "https://github.com/chanukaweerakkody"} target="_blank" rel="noreferrer" className="w-12 h-10 flex items-center justify-center rounded-xl glass border border-black/10 dark:border-white/10 hover:border-[var(--accent)]/50 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

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

  const flip = index % 2 === 1;

  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center group">
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1200 }}
        className={flip ? 'md:order-2' : ''}
      >
        <div className="float-anim cursor-pointer" onClick={() => { uiAudio.playClick(); onOpen(); }}>
          <div className="glass rounded-3xl p-3 shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_40px_var(--glow)] group-hover:border-[var(--accent)]/30">
            <div className="flex gap-1.5 mb-3 px-3 pt-1">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <Image src={project.image} alt={project.title} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-5 py-2.5 rounded-full bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink size={16} /> Deep Dive
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className={flip ? 'md:order-1' : ''}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-xs tracking-[0.3em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Project 0{index + 1}
          </span>
          <h3 className="text-2xl md:text-4xl font-bold mt-3 leading-tight group-hover:text-[var(--accent)] transition-colors duration-300">{project.title}</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((t) => (
              <span key={t} className="glass px-3 py-1.5 rounded-lg font-mono text-[11px] border-black/5 dark:border-white/5">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
             <button
              onClick={() => { uiAudio.playClick(); onOpen(); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity shadow-xl"
            >
              Deep Dive <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={project.github || "https://github.com/chanukaweerakkody"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 p-2.5 rounded-xl glass hover:border-[var(--accent)]/50 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative py-24 md:py-32 px-6">
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-sm tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block">Case Studies</span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">The Perspective <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-white/50 dark:to-white/80">Gallery</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Engineering scalable systems with depth, dimension, and performance in mind.</p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto space-y-32">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} onOpen={() => setActiveProject(p)} />
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}