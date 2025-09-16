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
  avatar: "/images/avatar.jpg",
  email: "chanuka.weerakkody123@gmail.com",
  location: "Asia/Colombo",
  languages: ["English", "Sinhala"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting innovative solutions through clean, efficient code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I&apos;m Chanuka Weerakkody, a software engineer at Aventure, where I
      build robust and scalable
      <br /> server-side solutions. Passionate about architecting efficient
      systems and APIs.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
    image: "/images/hero_image.png",
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m a dedicated backend developer with a passion for building
        high-performance systems and scalable architectures. With expertise in
        modern backend technologies, I specialize in creating efficient,
        maintainable solutions that solve complex business challenges. My
        approach combines clean code principles with a focus on performance
        optimization and system reliability.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
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
        images: [],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        company: "Arimax Solutions",
        timeframe: "July 2024 - December 2024",
        role: "(Trainee) Associate Software Engineer",
        achievements: [
          <p key="ach-3">
            Developed and maintained responsive web applications using modern
            JavaScript frameworks, implementing both frontend interfaces and
            backend APIs.
          </p>,
          <p key="ach-4">
            Collaborated with cross-functional teams to deliver full-stack
            solutions, reducing development time by 30% through efficient code
            reuse and component architecture.
          </p>,
          <p key="ach-5">
            Implemented RESTful APIs and integrated third-party services,
            enhancing application functionality and user experience.
          </p>,
        ],
        images: [],
      },
      {
        company: "Redcode Solutions",
        timeframe: "January 2024 - June 2024",
        role: "Intern Software Engineer",
        achievements: [
          <p key="ach-3">
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </p>,
          <p key="ach-4">
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </p>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Institue of Software Engineering",
        description: <>Learned complete Software Engineering curriculum.</>,
      },
      {
        name: "GCE A/L - Vidyarathna University College",
        description: <>Completed Advanced Level in 2020.</>,
      },
      {
        name: "GCE O/L - Bandaragama Central College",
        description: <>Completed Ordinary Level in 2017.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Java & Frameworks",
        description: (
          <>
            Experienced in Java, Spring Boot, JavaFX, Hibernate, and enterprise
            app development.
          </>
        ),
        tags: [
          { name: "Java", icon: "java" },
          { name: "Spring", icon: "spring" },
          { name: "Spring Boot", icon: "springboot" },
          { name: "JavaFX", icon: "javafx" },
          { name: "Hibernate", icon: "hibernate" },
          { name: "OOP", icon: "oop" },
          { name: "Design Patterns", icon: "design" },
          { name: "Microservices", icon: "microservice" },
          { name: "REST APIs", icon: "rest" },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in building responsive UIs with React, Next.js, and
            modern web technologies.
          </>
        ),
        tags: [
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "Bootstrap", icon: "bootstrap" },
          { name: "jQuery", icon: "jquery" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "UI/UX", icon: "figma" },
        ],
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>
            Building scalable APIs with Node.js, Express.js, and Nest.js using
            SQL and NoSQL databases.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "Nest.js", icon: "nestjs" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
        ],
        images: [],
      },
      {
        title: "Mobile Development",
        description: (
          <>Cross-platform mobile development with Flutter and React Native.</>
        ),
        tags: [
          { name: "Flutter", icon: "flutter" },
          { name: "React Native", icon: "react" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
