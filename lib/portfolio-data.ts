export type NavItem = {
  id: string;
  label: string;
};

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export type Project = {
  title: string;
  live: string;
  git?: string;
  image: string;
  type: string;
  skills: string[];
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  place?: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home"},
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Work" },
  { id: "interests", label: "Interests" },
];

export const skills: Skill[] = [
  { name: "ReactJS", level: 96 , category: "Frontend"},
  { name: "NextJS", level: 84 , category: "Frontend"},
  { name: "Tailwind CSS", level: 74 , category: "Frontend"},
  { name: "JS ES6+", level: 94 , category: "Frontend"},
  { name: "HTML5", level: 94 , category: "Frontend"},
  { name: "CSS3", level: 96 , category: "Frontend"},
  { name: "Bootstrap", level: 96 , category: "Frontend"},
  { name: "Jest & RTL", level: 85 , category: "Frontend"},
  { name: "Redux", level: 80 , category: "Frontend"},
  { name: "TypeScript", level: 70 , category: "Frontend"},
  { name: "NodeJS", level: 75 , category: "Backend"},
  { name: "ExpressJS", level: 75 , category: "Backend"},
  { name: "MongoDB", level: 75 , category: "Database"},
  { name: "Git", level: 80 , category: "Dev and AI Tools"},
  { name: "ChatGPT", level: 85 , category: "Dev and AI Tools"},
  { name: "OpenAI Codex", level: 80 , category: "Dev and AI Tools"},
  { name: "WindSurf", level: 85 , category: "Dev and AI Tools"},
  { name: "Copilot", level: 80 , category: "Dev and AI Tools"},
  { name: "Figma Make", level: 70 , category: "Dev and AI Tools"},
  { name: "Vercel v0", level: 70 , category: "Dev and AI Tools"},
];

export const education: TimelineItem[] = [
  {
    title: "B.Sc.IT",
    subtitle: "University of Mumbai",
    place: "Shankar Narayan College",
    date: "April 2019",
  },
  {
    title: "H.S.C.",
    subtitle: "Maharashtra State Board",
    place: "Mother Mary's Jr. College",
    date: "February 2016",
  },
  {
    title: "S.S.C.",
    subtitle: "Maharashtra State Board",
    place: "The Saraswati Vidyalaya",
    date: "March 2014",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Techved Consulting",
    subtitle: "Frontend Developer",
    date: "December 2020 - April 2026",
  },
];

export const projects: Project[] = [
  {
    title: "Generali Central Life Insurance Website",
    live: "https://www.generalicentrallife.com/",
    image: "/portfolio/projects/gcli.JPG",
    type:"Corporate Project",
    skills: ["React", "NextJS", "SEO", "CMS", "Rest API"]
  },
  {
    title: "Zurich Kotak General Insurance Website",
    live: "https://www.zurichkotak.com/",
    image: "/portfolio/projects/kgi.JPG",
    type:"Corporate Project",
    skills: ["React", "NextJS", "SEO", "CMS", "Rest API"]
  },
  {
    title: "Techved Consulting Website",
    live: "https://www.techved.com/",
    image: "/portfolio/projects/tvd.JPG",
    type:"Corporate Project",
    skills: ["React", "NextJS", "SEO", "CMS", "Rest API"]
  },
  {
    title: "TechvedAI Website",
    live: "https://www.techved.ai/",
    image: "/portfolio/projects/tvdai.JPG",
    type:"Corporate Project",
    skills: ["React", "NextJS", "SEO", "CMS", "Rest API"]
  },
  {
    title: "ITC myClassmate App",
    live: "https://play.google.com/store/apps/details?id=com.XYZ.ITCClassMate",
    image: "/portfolio/projects/itc.JPG",
    type:"Corporate Project",
    skills: ["NodeJS", "Express", "MongoDB"]
  },
  {
    title: "Unsplash Replica",
    live: "https://imagenary.netlify.app/",
    git: "https://github.com/karandas777/imagenary",
    image: "/portfolio/projects/pro18.1.JPG",
    type:"Personal Project",
    skills: ["React", "Rest API"]
  },
  {
    title: "Recipe App",
    live: "https://recipemaster.netlify.app/",
    git: "https://github.com/karandas777/recipe",
    image: "/portfolio/projects/pro17.1.JPG",
    type:"Personal Project",
    skills: ["React", "Rest API"]
  },
  {
    title: "Youtube Replica",
    live: "https://yt-lite.netlify.app/",
    git: "https://github.com/karandas777/yt-lite",
    image: "/portfolio/projects/pro16.1.JPG",
    type:"Personal Project",
    skills: ["React", "Rest API"]
  },
  {
    title: "Weather App",
    live: "https://dark-sky.netlify.app/",
    git: "https://github.com/karandas777/weather",
    image: "/portfolio/projects/pro15.1.JPG",
    type:"Personal Project",
    skills: ["React", "Rest API"]
  },
  {
    title: "Budget Calculator",
    live: "https://whats-my-budget.netlify.app/",
    git: "https://github.com/karandas777/Budget",
    image: "/portfolio/projects/pro13.1.JPG",
    type:"Personal Project",
    skills: ["React"]
  },
  {
    title: "To-Do List",
    live: "https://w-todo.netlify.app/",
    git: "https://github.com/karandas777/To-Do",
    image: "/portfolio/projects/pro12.1.JPG",
    type:"Personal Project",
    skills: ["React"]
  },
  {
    title: "Realtime Chatroom",
    live: "https://chatbuddy.netlify.app/",
    git: "https://github.com/karandas777/Chatroom",
    image: "/portfolio/projects/pro10.1.JPG",
    type:"Personal Project",
    skills: ["React", "Firebase", "Realtime Database"]
  },
  {
    title: "Dogs Gallery",
    live: "https://doggstagram.netlify.app/",
    git: "https://github.com/karandas777/doggy",
    image: "/portfolio/projects/pro6.1.JPG",
    type:"Personal Project",
    skills: ["React", "Rest API"]
  },
  {
    title: "IMDB Replica",
    live: "https://imdb2020.netlify.app/",
    git: "https://github.com/karandas777/imdb",
    image: "/portfolio/projects/pro5.1.JPG",
    type:"Personal Project",
    skills: ["React", "Rest API"]
  },
  {
    title: "Business Homepage",
    live: "https://zombiz-98.netlify.app/",
    git: "https://github.com/karandas777/Zombiz",
    image: "/portfolio/projects/pro2.1.JPG",
    type:"Personal Project",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Restaurant Homepage",
    live: "https://italian-res.netlify.app",
    git: "https://github.com/karandas777/Italian-Restaurant",
    image: "/portfolio/projects/pro1.1.JPG",
    type:"Personal Project",
    skills: ["HTML", "CSS", "JavaScript"]
  },
];
