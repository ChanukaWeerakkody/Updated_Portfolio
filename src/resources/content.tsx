import type {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Chanuka",
  lastName: "Weerakkody",
  name: "Chanuka Weerakkody",
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "chanuka.weerakkody123@gmail.com",
  location: "Asia/Colombo",
  languages: ["English", "Sinhala"],
  bio: "A passionate software engineer with expertise in full-stack development, specializing in building scalable and efficient web applications. I love solving complex problems and creating seamless user experiences.",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to My Newsletter</>,
  description: (
    <>
      Get the latest updates on my work, articles, and insights on software
      development
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ChanukaWeerakkody",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chanuka-weerakkody/",
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@chanuka.weerakkody123",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:chanuka.weerakkody123@gmail.com`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name} | Software Engineer`,
  description: `Portfolio of ${person.name} – Software Engineer building scalable backend architectures and high-performance systems.`,
  headline: (
    <>
      Building Architecture
      <br />
      for Performance
    </>
  ),
  featured: {
    display: false,
    title: <Row gap="12" vertical="center"><Text marginRight="4" onBackground="brand-medium">Trusted Architectures &amp; Tech Stack Core</Text></Row>,
    href: "/work",
  },
  subline: (
    <>
      I am {person.name}, a Software Engineer with 2+ years of enterprise experience.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn more about ${person.name}, a ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
    image: "/images/avatar.jpg",
  },
  calendar: {
    display: true,
    link: "https://cal.com/chanuka",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m {person.firstName}, a {person.role} with a strong foundation in
        software development and a passion for creating efficient, scalable, and
        user-friendly applications. With expertise in both frontend and backend
        technologies, I enjoy working on projects that challenge me to learn and
        grow as a developer.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Aventure IT",
        timeframe: "2025 - Present",
        role: "Software Engineer",
        achievements: [
          <p key="ach-1">
            Developed and optimized backend services with <b>Nest.js</b> and{" "}
            <b>MySQL</b>, improving API response times by <b>35%</b>.
          </p>,
          <p key="ach-2">
            Implemented <b>scalable microservices architecture</b> and
            containerized deployments with <b>Docker</b>, increasing system
            reliability and maintainability.
          </p>,
          <p key="ach-3">
            Designed and maintained <b>secure RESTful APIs</b> for high-traffic
            applications, enabling seamless integration with frontend and
            third-party services.
          </p>,
        ],
      },
      {
        company: "Arimax Solutions",
        timeframe: "2024 Aug - 2025 Jan",
        role: "Trainee Associate Software Engineer",
        achievements: [
          <p key="ach-1">
            Developed and optimized backend services with <b>Java Spring Boot</b> and{" "}
            <b>MySQL</b>, improving API response times by <b>35%</b>.
          </p>,
          <p key="ach-2">
            Built responsive frontend interfaces using <b>React</b> and <b>TypeScript</b>, enhancing user experience and reducing load times.
          </p>,
          <p key="ach-3">
            Designed and maintained <b>secure RESTful APIs</b> for high-traffic applications, enabling seamless integration between frontend and backend services.
          </p>,
          <p key="ach-4">
            Managed database schemas and optimized queries in <b>MySQL</b>, ensuring data consistency and efficient storage for large-scale applications.
          </p>,
        ],
      },
      {
        company: "RedCode Solutions",
        timeframe: "2024 Jan - 2024 Jul",
        role: "Intern Software Engineer",
        achievements: [
          <p key="ach-1">
            Developed and optimized backend services with <b>Nest.js</b> and <b>MySQL</b>, improving API efficiency and reliability.
          </p>,
          <p key="ach-2">
            Built dynamic and responsive frontend interfaces using <b>React</b> and <b>TypeScript</b>, enhancing user experience and usability.
          </p>,
          <p key="ach-3">
            Implemented <b>database migrations and seeders</b> in <b>MySQL</b>, ensuring consistent and reproducible development and testing environments.
          </p>,
          <p key="ach-4">
            Collaborated on <b>RESTful API design</b> and integration, connecting frontend components with backend services for seamless data flow.
          </p>,
        ],
      }
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Wrexham University - UK",
        description: "BSc in Computer Science",
      },
      {
        name: "Institute of Software Engineering",
        description: "Advanced Diploma in Software Engineering",
      }
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend Core",
        description: "Building high-scale backend systems with modern frameworks and service-oriented architecture.",
        tags: [
          { name: "Java (Spring Boot / Spring MVC)", icon: "java" },
          { name: "PHP (Laravel)", icon: "php" },
          { name: "Node.js (NestJS / Express.js)", icon: "nodejs" },
        ],
      },
      {
        title: "Databases & Caching",
        description: "Designing performant persistence layers with relational, document, and caching technologies.",
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Redis", icon: "redis" },
          { name: "Mongoose", icon: "mongoose" },
          { name: "Hibernate", icon: "hibernate" },
        ],
      },
      {
        title: "Architecture & Tools",
        description: "Delivering secure, scalable systems through API design, auth, cloud, and automation practices.",
        tags: [
          { name: "RESTful API Design", icon: "api" },
          { name: "JWT Authentication & RBAC", icon: "jwt" },
          { name: "Microservices Architecture", icon: "microservices" },
          { name: "Docker", icon: "docker" },
          { name: "CI/CD Pipelines", icon: "github" },
          { name: "AWS", icon: "aws" },
        ],
      },
      {
        title: "Frontend / Mobile",
        description: "Creating responsive product experiences across web and mobile platforms.",
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Redux", icon: "redux" },
          { name: "React Native", icon: "reactnative" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
        ],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Explore the latest projects by ${person.name} - ${person.role} from ${person.location}`,
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: `Read the latest articles and insights by ${person.name} on software development and technology`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection of photos and visuals from ${person.name}'s work and experiences`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
