// ============================================================
//  PORTFOLIO DATA — edit this file to update content
// ============================================================

export const navItems = ['Home', 'Experience', 'Projects', 'Skills', 'Contact'];

export const socialLinks = [
  { icon: 'github',   url: 'https://github.com/chanukaweerakkody',          fab: true },
  { icon: 'linkedin', url: 'https://www.linkedin.com/in/chanuka-weerakkody', fab: true },
  { icon: 'envelope', url: 'mailto:chanuka.weerakkody123@gmail.com',         fab: false },
];

export const techStack = [
  { name: 'Java',        icon: '☕', color: '#b07219', orbit: 1, position: 1 },
  { name: 'Spring Boot', icon: '🍃', color: '#6db33f', orbit: 1, position: 2 },
  { name: 'NestJS',      icon: '🔴', color: '#ea2845', orbit: 1, position: 3 },
  { name: 'Node.js',     icon: '🟢', color: '#339933', orbit: 2, position: 1 },
  { name: 'PHP/Laravel', icon: '🐘', color: '#ff2d20', orbit: 2, position: 2 },
  { name: 'React',       icon: '⚛️', color: '#61dafb', orbit: 2, position: 3 },
];

export const stats = [
  { value: '2+',  label: 'Years Experience'   },
  { value: '6+',  label: 'Key Projects'       },
  { value: '15+', label: 'Tech Stack Skills'  },
  { value: '2',   label: 'Degrees / Diplomas' },
];

export const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Aventure – Sri Lanka',
    period: 'Feb 2025 - Present',
    description:
      'Architected and maintained production-grade backend systems for enterprise SaaS and mobile applications (Sivilima Inote & Ipanel). Designed secure RESTful APIs using Spring Boot, NestJS, Node.js, and PHP with JWT auth & RBAC. Optimized MySQL query performance and backend logic. Contributed as Core Backend Engineer for production applications (KPI Score, SalesWin, JobsNinja).',
    tags: ['Laravel (PHP)', 'NestJS', 'MERN', 'React Native', 'MySQL', 'MongoDB', 'Spring Boot'],
  },
  {
    title: 'Intern Software Engineer',
    company: 'Redcode Solutions – Sri Lanka',
    period: 'Feb 2024 - Jan 2025',
    description:
      'Contributed as Core Backend Engineer to production-grade applications including a Fishing Platform and Busy POS System using NestJS and Spring Boot. Designed secure RESTful APIs with Role-Based Access Control (RBAC). Developed high-performance retail services with MongoDB and engineered backend architectures ensuring high availability.',
    tags: ['NestJS', 'Spring Boot', 'React', 'MySQL', 'MongoDB', 'REST API', 'RBAC'],
  },
];

export const education = [
  {
    icon: '🎓',
    title: 'BSc (Hons) in Computing (In Progress)',
    institution: 'Wrexham University – UK',
    period: '2026 – 2027',
  },
  {
    icon: '💻',
    title: 'Graduate Diploma in Software Engineering (GDSE)',
    institution: 'IJSE – Institute of Software Engineering',
    period: '2022 – 2024',
  },
  {
    icon: '📐',
    title: 'GCE Advanced Level – Mathematics Stream',
    institution: 'Vidyarathna University College',
    period: '2020',
  },
  {
    icon: '🏫',
    title: 'GCE Ordinary Level',
    institution: 'Bandaragama Central College',
    period: '2017',
  },
];

export const projects = [
  {
    title: 'Real-Time Crypto Market Terminal',
    description:
      'High-performance real-time cryptocurrency data pipeline featuring event-driven architecture with Apache Kafka (Aiven Cloud), Node.js (KafkaJS & Express.js), WebSockets (Socket.io), SSL/TLS encryption, and a Binance-style Chart.js dashboard containerized with Docker.',
    tags: ['Apache Kafka', 'Node.js', 'WebSockets', 'Aiven Cloud', 'Docker', 'Tailwind CSS'],
    github: 'https://github.com/ChanukaWeerakkody/kafka-crypto-project',
    language: 'JavaScript',
    color: '#f1e05a',
    isPrivate: false,
  },
  {
    title: 'SC Graphic – Resin Art & Printing Platform',
    description:
      'Developed a full-featured e-commerce backend by architecting secure RESTful APIs for user authentication, product catalog management, and order processing, leveraging Spring Security for end-to-end protection.',
    tags: ['Spring Boot', 'Spring Security', 'React', 'MySQL'],
    github: 'https://github.com/chanukaweerakkody',
    language: 'Java',
    color: '#b07219',
    isPrivate: false,
  },
  {
    title: 'I Mobile Crazy – Mobile Commerce Platform',
    description:
      'Built a scalable backend for a mobile phone marketplace, including Role-Based Access Control (RBAC), secure order management, and product APIs protected by Spring Security.',
    tags: ['Spring Boot', 'Spring Security', 'React', 'MySQL'],
    github: 'https://github.com/chanukaweerakkody',
    language: 'Java',
    color: '#b07219',
    isPrivate: false,
  },
  {
    title: 'Mediplus – Healthcare Locator App',
    description:
      'Delivered a React Native mobile application featuring real-time positioning to locate nearby hospitals and Ayurvedic centers, leveraging the Google Location API for enhanced user experience.',
    tags: ['React Native', 'Google Location API', 'REST API'],
    github: 'https://github.com/chanukaweerakkody',
    language: 'JavaScript',
    color: '#f1e05a',
    isPrivate: false,
  },
  {
    title: 'Edu Zone – Learning Management System',
    description:
      'Built a full-stack LMS supporting course browsing, purchase flows, progress tracking, and certification, tailored for a modern online learning experience.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js (MERN)'],
    github: 'https://github.com/chanukaweerakkody',
    language: 'JavaScript',
    color: '#f1e05a',
    isPrivate: false,
  },
  {
    title: 'Next Travel – Travel Booking Platform',
    description:
      'Architected a microservices-based booking platform for hotels, vehicles, and tour guides, enabling users to seamlessly search, book, and manage end-to-end travel reservations online.',
    tags: ['Spring Boot', 'MySQL', 'Microservices'],
    github: 'https://github.com/chanukaweerakkody',
    language: 'Java',
    color: '#b07219',
    isPrivate: false,
  },
  {
    title: 'MetaFlix – Film Streaming Platform',
    description:
      'Built a secure film download platform with user authentication and content delivery APIs powered by Spring Boot and Spring Security.',
    tags: ['Spring Boot', 'Spring Security', 'React', 'MySQL'],
    github: 'https://github.com/chanukaweerakkody',
    language: 'Java',
    color: '#b07219',
    isPrivate: false,
  },
];

export const skillCategories = [
  { title: 'Languages',         icon: '💻', skills: ['Java', 'PHP', 'JavaScript', 'TypeScript', 'Python'] },
  { title: 'Backend',           icon: '⚙️', skills: ['Spring Boot / Spring MVC', 'NestJS', 'Node.js / Express.js', 'Laravel (PHP)', 'Hibernate / Mongoose'] },
  { title: 'Databases',         icon: '🗄️', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { title: 'DevOps & Tools',    icon: '☁️', skills: ['Docker / Docker Hub', 'CI/CD Pipelines', 'AWS', 'Postman / Git', 'JUnit'] },
  { title: 'Frontend',          icon: '🎨', skills: ['React / React Native', 'Next.js / Redux', 'HTML / CSS'] },
  { title: 'API & Architecture', icon: '🏗️', skills: ['RESTful API Design', 'JWT Auth & Authorization', 'Microservices Architecture', 'Monolithic & Layered Architecture'] },
  { title: 'Tools & IDEs',      icon: '🛠️', skills: ['IntelliJ IDEA', 'VS Code', 'Android Studio', 'Figma'] },
];

export const references = [
  {
    name: 'Mr. Prasad Waduge',
    role: 'CEO / Senior Trainer, IJSE',
    phone: '+94 71 430 3366',
    email: 'prasad@ijse.lk',
  },
  {
    name: 'Mr. Shaan Mendis',
    role: 'Senior Software Engineer, Ican Lanka',
    phone: '+94 76 863 1988',
    email: 'shanmendia98@gmail.com',
  },
];

export const contactInfo = [
  { icon: '📧', title: 'Email',    content: 'chanuka.weerakkody123@gmail.com', link: 'mailto:chanuka.weerakkody123@gmail.com' },
  { icon: '📱', title: 'Phone',    content: '+94 76 947 5434',                 link: 'tel:+94769475434' },
  { icon: '📍', title: 'Location', content: 'Bandaragama, Sri Lanka',         link: null },
];

export const footerTech = [
  { icon: 'java',   label: 'Java & Spring Boot'   },
  { icon: 'laravel', label: 'PHP & Laravel'       },
  { icon: 'nestjs', label: 'NestJS & Node.js'     },
  { icon: 'docker', label: 'Docker & Microservices' },
];

export const blogPosts = [
  {
    id: 1,
    title: 'How Nginx Won the Web: Architecture, Configuration, and Production Best Practices',
    description: 'Deep dive into Nginx event-driven, asynchronous, non-blocking architecture, reverse proxy setup, load balancing, SSL/TLS security, and enterprise production configurations.',
    date: 'Aug 16, 2026',
    readTime: '6 min read',
    tags: ['Nginx', 'DevOps', 'Software Engineering', 'Web Development'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*D5GtPWGTB1Hs5KKPM1w1JQ.jpeg',
    url: 'https://medium.com/@chanuka.weerakkody123/how-nginx-won-the-web-architecture-configuration-and-production-best-practices-ed57fc7dc3d3',
    source: 'Medium'
  },
  {
    id: 2,
    title: 'Scaling to Millions: How Elixir and the BEAM VM Handle Massive Traffic Without Breaking a Sweat',
    description: 'Exploring the Actor Model, lightweight processes (~1.5KB RAM), fault tolerance supervisor trees, zero shared state, and high-concurrency real-time systems.',
    date: 'Jul 25, 2026',
    readTime: '5 min read',
    tags: ['Elixir', 'BEAM VM', 'Concurrency', 'Backend Architecture'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*XEFwSdt3Jvny0Ik4-MPK7Q.png',
    url: 'https://medium.com/@chanuka.weerakkody123/scaling-to-millions-how-elixir-and-the-beam-vm-handle-massive-traffic-without-breaking-a-sweat-fa6ccf769f01',
    source: 'Medium'
  },
  {
    id: 3,
    title: 'Beyond Clean Code: The 3 Pillars of Scalable Backend Architecture',
    description: 'Architectural strategies covering AES-256 application-level payload encryption, Redis database caching with Cache-Aside pattern, and asynchronous Kafka/RabbitMQ message queues.',
    date: 'May 5, 2026',
    readTime: '4 min read',
    tags: ['Backend', 'System Design', 'Redis', 'Kafka', 'Architecture'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*lB07bc0VE_XzIZL9vjcejA.png',
    url: 'https://medium.com/@chanuka.weerakkody123/beyond-clean-code-the-3-pillars-of-scalable-backend-architecture-cebf7eb6cf3f',
    source: 'Medium'
  },
  {
    id: 4,
    title: 'Beyond HTTPS: Mastering API Security with AES-256-CBC Encryption',
    description: 'Implementing Zero-Trust payload encryption with Initialization Vectors (IV) for PCI-DSS/HIPAA compliance and Node.js production key safety.',
    date: 'Mar 11, 2026',
    readTime: '5 min read',
    tags: ['Cybersecurity', 'API Security', 'AES-256', 'Node.js'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*W9-XVE0lJ9Ce8iB1KmQE9Q.png',
    url: 'https://medium.com/@chanuka.weerakkody123/%EF%B8%8F-beyond-https-mastering-api-security-with-aes-256-cbc-encryption-37d1f0b8031c',
    source: 'Medium'
  },
  {
    id: 5,
    title: 'Practical AI Integration for Developers: Node.js & Laravel Edition',
    description: 'Step-by-step guide to integrating LLMs cleanly with modular AI service layers, request DTOs, retry strategies, and mock testing in NestJS and Laravel.',
    date: 'Nov 28, 2025',
    readTime: '7 min read',
    tags: ['AI Integration', 'LLM', 'Node.js', 'Laravel', 'NestJS'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*kyW505kQ10tdbC0rLpzVtQ.png',
    url: 'https://medium.com/@chanuka.weerakkody123/practical-ai-integration-for-developers-node-js-laravel-edition-c54b4c6f295e',
    source: 'Medium'
  },
  {
    id: 6,
    title: 'A Beginner’s Guide to Microservice Architecture',
    description: 'Comparing Monolithic vs Microservices architecture, independent service scaling, Docker/Kubernetes containerization, and API communication patterns.',
    date: 'Oct 9, 2025',
    readTime: '5 min read',
    tags: ['Microservices', 'Docker', 'Kubernetes', 'Scalability'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*bw78qmGdIhzA5ImEjj5nEw.png',
    url: 'https://medium.com/@chanuka.weerakkody123/%EF%B8%8F-a-beginners-guide-to-microservice-architecture-e7268f52abe4',
    source: 'Medium'
  },
  {
    id: 7,
    title: 'Prisma: The Superhero Translator Between Your Code and Database',
    description: 'Type-safe database queries, schema migrations, relationship mapping, and ORM query optimization for Node.js and TypeScript applications.',
    date: 'Oct 1, 2025',
    readTime: '4 min read',
    tags: ['Prisma ORM', 'TypeSafety', 'TypeScript', 'Database'],
    image: 'https://cdn-images-1.medium.com/max/1024/1*WSl_lFMs47M5yL9E3J9bVA.png',
    url: 'https://medium.com/@chanuka.weerakkody123/prisma-the-superhero-translator-between-your-code-and-database-%EF%B8%8F-cc6f709c8b2f',
    source: 'Medium'
  }
];

export const linkedinProfileUrl = "https://www.linkedin.com/in/chanuka-weerakkody/recent-activity/all/";
export const mediumProfileUrl = "https://medium.com/@chanuka.weerakkody123";