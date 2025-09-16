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
  role: "Associate Software Engineer",
  avatar: "/images/hero_image.png",
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
    link: "https://www.linkedin.com/in/chanuka-weerakkody-62589b264/",
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | ${person.role}`,
  description: `Portfolio of ${person.name} - ${person.role} from ${person.location}. ${person.bio}`,
  headline: (
    <>
      Building digital experiences
      <br />
      that make an impact
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured Work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m {person.firstName}, a {person.role} with a passion for creating
      <br />
      elegant solutions to complex problems through code.
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
    image: "/images/hero_image.png",
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
        role: "Associate Software Engineer",
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
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Institute of Software Engineering",
        description: "Advanced Diploma in Software Engineering",
      },
      {
        name: "GCE A/L - Vidyarathna University College",
        description: "Completed Advanced Level in 2020",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: "Building responsive and interactive user interfaces",
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "HTML/CSS", icon: "html" },
        ],
      },
      {
        title: "Backend Development",
        description: "Building robust and scalable server-side applications",
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "NestJS", icon: "nestjs" },
          { name: "Express", icon: "express" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
        ],
      },
      {
        title: "DevOps & Tools",
        description: "CI/CD, containerization, and development tools",
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "GitHub Actions", icon: "github" },
          { name: "AWS", icon: "aws" },
          { name: "Linux", icon: "linux" },
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
