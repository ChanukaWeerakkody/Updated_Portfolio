"use client";

import { motion } from "framer-motion";
import { Badge, Button, Column, Heading, IconButton, Row, Text } from "@once-ui-system/core";
import { about } from "@/resources";
import { Mailchimp } from "@/components";

// ─── Hero constants ────────────────────────────────────────────────────────────
const socialLinks = [
  { icon: "github" as const, href: "https://github.com/ChanukaWeerakkody", label: "GitHub" },
  { icon: "linkedin" as const, href: "https://www.linkedin.com/in/chanuka-weerakkody/", label: "LinkedIn" },
  { icon: "medium" as const, href: "https://medium.com/@chanuka.weerakkody123", label: "Medium" },
  { icon: "email" as const, href: "mailto:chanuka.weerakkody123@gmail.com", label: "Email" },
];

const techStack = [
  { label: "Java (Spring Boot)" },
  { label: "PHP (Laravel)" },
  { label: "Node.js (NestJS)" },
  { label: "Apache Kafka" },
  { label: "Redis" },
  { label: "MySQL" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
  { label: "Docker" },
];
const tickerItems = [...techStack, ...techStack, ...techStack];

const aboutHighlights = [
  "Based in Sri Lanka",
  "2+ Years Active Experience",
  "Software Engineer @ Aventure",
  "BSc (Hons) Computing Undergraduate",
];

const projects = [
  {
    title: "Real-time Crypto Streaming & Processing Platform",
    description:
      "Production-ready high-throughput stream processing architecture handling live cryptocurrency updates asynchronously.",
    stack: ["Kafka", "Node.js", "Redis", "MongoDB"],
    repo: "https://github.com/ChanukaWeerakkody/crypto-streaming-platform",
  },
  {
    title: "Busy POS - Enterprise Retail Engine",
    description:
      "High-performance retail services optimized for transaction security, strict data consistency, and low-latency database queries.",
    stack: ["NestJS", "Spring Boot", "MongoDB"],
    repo: "https://github.com/ChanukaWeerakkody/busy-pos-engine",
  },
  {
    title: "Sivilima Inote & Ipanel Enterprise SaaS",
    description:
      "Scalable backend structures built during my tenure at Aventure, actively serving daily users across web and Play Store channels.",
    stack: ["Laravel", "PHP", "MySQL"],
    repo: "https://github.com/ChanukaWeerakkody/sivilima-enterprise",
  },
  {
    title: "Next Travel Booking Platform",
    description:
      "Distributed architecture engine built for hotel, vehicle, and reservation routing flows.",
    stack: ["Spring Boot", "Java", "Microservices", "MySQL"],
    repo: "https://github.com/ChanukaWeerakkody/next-travel-booking",
  },
  {
    title: "SC Graphic - Secure E-Commerce Backend",
    description:
      "End-to-end printing and resin art commercial portal protected strictly through role-based access control.",
    stack: ["Spring Security", "React", "MySQL"],
    repo: "https://github.com/ChanukaWeerakkody/sc-graphics-backend",
  },
];

const blogLinks = [
  {
    title: "Deep Dive into API Security: Implementing Bulletproof JWT & RBAC Patterns",
    reads: "1.8k reads",
  },
  {
    title: "Event-Driven Microservices: Scale Backend Tasks with Apache Kafka",
    reads: "2.4k reads",
  },
];

export function HomePortfolio() {
  return (
    <Column maxWidth="m" gap="24" paddingY="12" paddingX="24" horizontal="center">

      {/* ── Hero Card ─────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{ width: "100%" }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            border: "1px solid var(--hero-card-border)",
            background: "var(--hero-card-bg)",
            boxShadow: "var(--hero-card-shadow)",
            paddingTop: "clamp(2rem, 5vw, 3rem)",
            paddingLeft: "clamp(1.25rem, 3.5vw, 2.3rem)",
            paddingRight: "clamp(1.25rem, 3.5vw, 2.3rem)",
            paddingBottom: 0,
          }}
        >
          {/* Faint grid overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(90deg, var(--hero-grid-line-h) 1px, transparent 1px), linear-gradient(180deg, var(--hero-grid-line-v) 1px, transparent 1px)",
              backgroundSize: "96px 96px",
              opacity: 0.55,
              pointerEvents: "none",
            }}
          />
          {/* Purple glow – top-left */}
          <div
            style={{
              position: "absolute",
              inset: "-20% auto auto -10%",
              width: "320px",
              height: "320px",
              background: "radial-gradient(circle, var(--hero-glow-purple), transparent 68%)",
              filter: "blur(40px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Blue glow – bottom-right */}
          <div
            style={{
              position: "absolute",
              inset: "auto -15% -20% auto",
              width: "360px",
              height: "360px",
              background: "radial-gradient(circle, var(--hero-glow-blue), transparent 70%)",
              filter: "blur(44px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Card inner content */}
          <Column fillWidth horizontal="center" style={{ position: "relative", zIndex: 1 }}>

            {/* 1. Social icons – centred at top */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Row gap="8" horizontal="center" vertical="center">
                {socialLinks.map(({ icon, href, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -3, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <IconButton href={href} icon={icon} variant="ghost" size="m" tooltip={label} />
                  </motion.div>
                ))}
              </Row>
            </motion.div>

            {/* 2. 4rem gap between icons and headline */}
            <div style={{ height: "4rem" }} />

            {/* 3. Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <h1
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "var(--hero-headline-color)",
                  margin: 0,
                  textWrap: "balance",
                }}
              >
                Building Architecture
                <br />
                for Performance
              </h1>
            </motion.div>

            {/* 1.5rem gap below headline */}
            <div style={{ height: "1.5rem" }} />

            {/* 4. Professional identity text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.45 }}
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  fontSize: "clamp(1.2rem, 1.6vw, 1.9rem)",
                  fontWeight: 800,
                  lineHeight: 1.65,
                  color: "var(--hero-subtext-color)",
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                Chanuka Weerakkody - Software Engineer
              </p>
            </motion.div>


            {/* 1.5rem gap below headline */}
            <div style={{ height: "1.5rem" }} />

            {/* 4. Professional identity text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.45 }}
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "var(--hero-subtext-color)",
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                Engineering high-performance backend systems and scalable digital products for modern startups and enterprise teams.
              </p>
            </motion.div>

            {/* 3rem gap below identity */}
            <div style={{ height: "3rem" }} />

            {/* 5. CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.4 }}
            >
              <Button
                id="explore-projects"
                href="/work"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                Explore Projects
              </Button>
            </motion.div>

            {/* 8rem gap below button, above ticker */}
            <div style={{ height: "4rem" }} />

            {/* ── Tech Stack Ticker (flush to card bottom) ───────────────── */}
            <div
              style={{
                width: "calc(100% + clamp(2.5rem, 7vw, 4.6rem))",
                marginLeft: "calc(-1 * clamp(1.25rem, 3.5vw, 2.3rem))",
                background: "var(--hero-ticker-bg)",
                overflow: "hidden",
                paddingTop: "0.85rem",
                paddingBottom: "0.85rem",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "var(--hero-ticker-label)",
                  textTransform: "uppercase",
                  margin: "0 0 0.55rem",
                }}
              >
                TRUSTED ARCHITECTURES &amp; TECH STACK CORE
              </p>

              <div style={{ overflow: "hidden", position: "relative" }}>
                {/* Fade mask left */}
                <div
                  style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
                    background: "linear-gradient(to right, rgba(var(--hero-fade-color), 0.92), transparent)",
                    zIndex: 2, pointerEvents: "none",
                  }}
                />
                {/* Fade mask right */}
                <div
                  style={{
                    position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
                    background: "linear-gradient(to left, rgba(var(--hero-fade-color), 0.92), transparent)",
                    zIndex: 2, pointerEvents: "none",
                  }}
                />
                <motion.div
                  animate={{ x: ["0%", "-33.333%"] }}
                  transition={{ duration: 22, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                  style={{ display: "flex", gap: "0.75rem", width: "max-content" }}
                >
                  {tickerItems.map((item, i) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${item.label}-${i}`}
                      style={{
                        display: "inline-flex", alignItems: "center",
                        borderRadius: "999px", padding: "0.3rem 0.9rem",
                        background: "var(--hero-pill-bg)",
                        border: "1px solid var(--hero-pill-border)",
                        color: "var(--hero-pill-color)",
                        fontSize: "0.78rem", fontWeight: 600,
                        whiteSpace: "nowrap", letterSpacing: "0.02em",
                      }}
                    >
                      {item.label}
                    </span>
                  ))}
                </motion.div>
              </div>
            </div>
          </Column>
        </div>
      </motion.section>

      {/* ── About me ──────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{ width: "100%" }}
      >
        <Column fillWidth gap="16" paddingY="24" paddingX="l" radius="l" border="neutral-alpha-medium" background="surface">
          <Heading as="h2" variant="display-strong-s">About me</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            I am Chanuka Weerakkody, an Associate Backend Software Engineer with 2+ years of enterprise experience engineering scalable backend infrastructures and microservices. I specialize in architecting highly available RESTful APIs, securing system access paths, and optimizing heavy querying behaviors across diverse transactional data environments.
          </Text>
          <Row wrap gap="s" paddingTop="s">
            {aboutHighlights.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -3, scale: 1.01 }}
                style={{
                  display: "inline-flex", alignItems: "center",
                  borderRadius: "999px", padding: "0.5rem 0.8rem",
                  background: "rgba(59, 130, 246, 0.12)", color: "#2563eb",
                  fontSize: "0.9rem", fontWeight: 600,
                  border: "1px solid rgba(59, 130, 246, 0.18)",
                }}
              >
                {item}
              </motion.span>
            ))}
          </Row>
        </Column>
      </motion.div>

      {/* ── Selected Projects ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%" }}
      >
        <Column fillWidth gap="16">
          <Heading as="h2" variant="display-strong-s">Selected projects</Heading>
          <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
              >
                <Column fillWidth gap="12" paddingY="20" paddingX="20" radius="l" border="neutral-alpha-medium" background="surface">
                  <Text variant="label-default-s" onBackground="brand-medium">{project.stack.join(" • ")}</Text>
                  <Heading as="h3" variant="heading-strong-l">{project.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">{project.description}</Text>
                  <Row wrap gap="s" paddingTop="xs">
                    {project.stack.map((tech) => (
                      <span key={tech} style={{ padding: "0.4rem 0.7rem", borderRadius: "999px", background: "rgba(15, 23, 42, 0.06)", fontSize: "0.8rem", fontWeight: 600 }}>
                        {tech}
                      </span>
                    ))}
                  </Row>
                  <Row gap="s" wrap paddingTop="xs">
                    <Button href={project.repo} size="s" variant="secondary">View source</Button>
                  </Row>
                </Column>
              </motion.article>
            ))}
          </div>
        </Column>
      </motion.div>

      {/* ── Technical writing & insights ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{ width: "100%" }}
      >
        <Row gap="16" s={{ direction: "column" }} fillWidth>
          <Column flex={1} gap="16" paddingY="24" paddingX="l" radius="l" border="neutral-alpha-medium" background="surface">
            <Heading as="h2" variant="display-strong-s">Technical writing &amp; insights</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Sharing architectural guides on Medium and practical engineering notes for modern backend teams.
            </Text>
            <Column gap="12">
              {blogLinks.map((post) => (
                <motion.div
                  key={post.title}
                  whileHover={{ x: 4 }}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "0.75rem 0", borderBottom: "1px solid rgba(148, 163, 184, 0.16)" }}
                >
                  <Text variant="body-default-s">{post.title}</Text>
                  <Text variant="label-default-s" onBackground="neutral-weak">{post.reads}</Text>
                </motion.div>
              ))}
            </Column>
            <Row gap="s" wrap>
              <IconButton href="https://medium.com/@chanuka.weerakkody123" icon="medium" variant="secondary" size="s" />
              <IconButton href="https://www.linkedin.com/in/chanuka-weerakkody/" icon="linkedin" variant="secondary" size="s" />
            </Row>
          </Column>
        </Row>
      </motion.div>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        style={{ width: "100%" }}
      >
        <Mailchimp />
      </motion.div>
    </Column>
  );
}
