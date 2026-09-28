import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Linkedin, ExternalLink, Calendar, Clock, Sparkles } from 'lucide-react';
import { blogPosts, linkedinProfileUrl, mediumProfileUrl } from '@/data/portfolioData';
import { Image } from '@/components/ui/image';

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32 px-6">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[var(--accent)] mb-3 inline-flex items-center gap-2">
            <Sparkles size={14} /> Technical Writing &amp; Insights
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-white/50 dark:to-white/80">Blog</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            Articles, system design deep-dives, and technical posts published on Medium &amp; LinkedIn.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={mediumProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-black/10 dark:border-white/10 hover:border-[var(--accent)]/50 transition-colors text-sm font-semibold"
            >
              <BookOpen size={17} style={{ color: 'var(--accent)' }} /> Medium Articles <ArrowUpRight size={15} />
            </a>
            <a
              href={linkedinProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-black/10 dark:border-white/10 hover:border-[var(--accent)]/50 transition-colors text-sm font-semibold"
            >
              <Linkedin size={17} style={{ color: 'var(--accent)' }} /> LinkedIn Posts <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Featured Post Card */}
        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 glass rounded-3xl p-6 md:p-10 border border-black/10 dark:border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/5 dark:bg-white/5">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                  Featured Article
                </div>
              </div>

              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {blogPosts[0].date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {blogPosts[0].readTime}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {blogPosts[0].title}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                    {blogPosts[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {blogPosts[0].tags.map(tag => (
                      <span key={tag} className="glass px-3 py-1 rounded-lg font-mono text-[11px] border-black/5 dark:border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={blogPosts[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity w-fit shadow-xl"
                >
                  Read on Medium <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.slice(1).map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass rounded-2xl p-5 md:p-6 border border-black/10 dark:border-white/10 flex flex-col justify-between hover:border-[var(--accent)]/40 transition-all duration-300 group"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-video mb-5 bg-black/5 dark:bg-white/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                    {post.source}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h4 className="text-lg font-bold tracking-tight mb-3 line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="glass px-2.5 py-0.5 rounded-md font-mono text-[10px] opacity-80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:underline mt-auto"
              >
                Read full story <ArrowUpRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>

        {/* LinkedIn Activity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass rounded-2xl p-8 border border-black/10 dark:border-white/10 text-center flex flex-col items-center justify-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
            <Linkedin size={24} />
          </div>
          <h3 className="text-xl font-bold">Follow Recent LinkedIn Activity &amp; Posts</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            I regularly publish short-form insights on backend engineering, system architecture, and tech trends on LinkedIn.
          </p>
          <a
            href={linkedinProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--accent)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View LinkedIn Activity <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
