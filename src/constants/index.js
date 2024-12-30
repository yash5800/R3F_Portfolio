import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import ND from "/nd.png"
import NIKE from "/nike.png"
import WEATHER from "/weather.webp"
import NEXT from "/next.ico"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Quick Learner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Next Dimension",
    languages: ["Node.js","Flask","JavaScript","CSS","HTML"],
    icon: ND,
    iconBg: "#383E56",
    date: "April 2024 - May 2024",
    points: [
          "Created a simple yet efficient notepad application that allows users to write, save, and manage their notes directly within the platform.",
          "Implemented a feature to send notes via email, leveraging Flask for backend services to enhance user convenience.",
          "Built with a combination of Node.js and Flask to demonstrate versatility in handling both frontend and backend development.",
          "Designed a clean and user-friendly interface using HTML, CSS, and JavaScript, ensuring smooth and responsive user interactions.",
    ],
  },
  {
    title: "Nike Clone",
    languages: ['React.js','Tailwind CSS'],
    icon: NIKE,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Oct 2024",
    points: [
      "Replicated the sleek and modern interface of Nike's website using React.js and Tailwind CSS, focusing on responsive design and user experience.",
      "Ensured pixel-perfect responsiveness across all screen sizes, showcasing expertise in building mobile-first designs with Tailwind CSS.",
      'Demonstrated proficiency in React.js for creating dynamic and interactive user interfaces.',

    ],
  },
  {
    title: "Weather Forecasting",
    languages: ['React.js','Tailwind CSS','Express.js','tomorrow.io API'],
    icon: WEATHER,
    iconBg: "#383E56",
    date: "Oct 2024 - Nov 2024",
    points: [
        'Developed a weather forecasting application using Tomorrow.io API, delivering accurate and real-time weather data for users.',
        'Built with React.js and Express.js, demonstrating a strong understanding of both front-end and back-end development for seamless user experiences.',
        'Designed a modern and intuitive interface with Tailwind CSS, ensuring a fully responsive application across all devices.',
        'Effectively integrated third-party APIs to fetch and display detailed weather reports, showcasing proficiency in working with external data sources.',
    ],
  },
  {
    title: "SanityHub",
    languages: ['Next.js','Tailwind CSS','Typescript','Sanity'],
    icon: NEXT,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      'Built using modern frameworks like Next.js, Tailwind CSS, TypeScript, and Sanity, demonstrating proficiency in full-stack development with a focus on performance and scalability.',
      'Implemented a system to store custom theme files securely, leveraging unique login keys to ensure privacy and user-specific access.',
      'Utilized TypeScript for enhanced code maintainability and reliability, ensuring robust typing for a seamless developer experience.',
      'Leveraged Sanity as a dynamic CMS to manage and deliver content efficiently, showcasing expertise in headless CMS development.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };