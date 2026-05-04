export type NavItem = {
  id: string;
  label: string;
  icon: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type Project = {
  title: string;
  description: string;
  live: string;
  git?: string;
  date: string;
  image: string;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  place?: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "H" },
  { id: "about", label: "About", icon: "A" },
  { id: "education", label: "Education", icon: "E" },
  { id: "experience", label: "Experience", icon: "X" },
  { id: "skills", label: "Skills", icon: "S" },
  { id: "work", label: "Work", icon: "W" },
  { id: "interests", label: "Interests", icon: "I" },
];

export const skills: Skill[] = [
  { name: "ReactJS", level: 96 },
  { name: "Javascript", level: 94 },
  { name: "HTML", level: 94 },
  { name: "CSS", level: 96 },
  { name: "Bootstrap", level: 96 },
  { name: "Redux", level: 80 },
  { name: "ES6", level: 86 },
  { name: "TypeScript", level: 70 },
  { name: "NodeJS", level: 75 },
  { name: "ExpressJS", level: 75 },
  { name: "MongoDB", level: 75 },
  { name: "NextJS", level: 60 },
  { name: "Angular", level: 60 },
  { name: "Firebase", level: 60 },
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
    date: "December 2020 - Present",
  },
];

export const projects: Project[] = [
  {
    title: "Kotak General Insurance Website",
    description:
      "Developed the whole UI of the website using ReactJS and integrated APIs for functionality",
    live: "https://www.kotakgeneral.com/",
    date: "June 2022",
    image: "/portfolio/projects/kgi.JPG",
  },
  {
    title: "Techved Consulting Website",
    description: "Developed new pages using HTML, CSS & Javascript",
    live: "https://www.techved.com/",
    date: "January 2021",
    image: "/portfolio/projects/tvd.JPG",
  },
  {
    title: "ITC myClassmate App",
    description:
      "Developed the backend of the application using NodeJS, ExpressJS & MongoDB",
    live: "https://play.google.com/store/apps/details?id=com.XYZ.ITCClassMate",
    date: "November 2021",
    image: "/portfolio/projects/itc.JPG",
  },
  {
    title: "Unsplash Replica",
    description: "Unsplash replica using ReactJS & Unsplash API",
    live: "https://imagenary.netlify.app/",
    git: "https://github.com/karandas777/imagenary",
    date: "22nd October 2020",
    image: "/portfolio/projects/pro18.1.JPG",
  },
  {
    title: "Recipe App",
    description: "A recipe finder app created using ReactJS & EDAMAM Recipe API",
    live: "https://recipemaster.netlify.app/",
    git: "https://github.com/karandas777/recipe",
    date: "October 2020",
    image: "/portfolio/projects/pro17.1.JPG",
  },
  {
    title: "Youtube Replica",
    description: "Youtube replica using ReactJS",
    live: "https://yt-lite.netlify.app/",
    git: "https://github.com/karandas777/yt-lite",
    date: "September 2020",
    image: "/portfolio/projects/pro16.1.JPG",
  },
  {
    title: "Weather App",
    description: "A weather app created using ReactJS & Open Weather API",
    live: "https://dark-sky.netlify.app/",
    git: "https://github.com/karandas777/weather",
    date: "August 2020",
    image: "/portfolio/projects/pro15.1.JPG",
  },
  {
    title: "Budget Calculator",
    description: "A budget calculator application created using ReactJS",
    live: "https://whats-my-budget.netlify.app/",
    git: "https://github.com/karandas777/Budget",
    date: "August 2020",
    image: "/portfolio/projects/pro13.1.JPG",
  },
  {
    title: "To-Do List",
    description: "A to-do list application created using ReactJS",
    live: "https://w-todo.netlify.app/",
    git: "https://github.com/karandas777/To-Do",
    date: "August 2020",
    image: "/portfolio/projects/pro12.1.JPG",
  },
  {
    title: "Realtime Chatroom",
    description: "A global chatroom created using ReactJS & Firebase Realtime DB",
    live: "https://chatbuddy.netlify.app/",
    git: "https://github.com/karandas777/Chatroom",
    date: "July 2020",
    image: "/portfolio/projects/pro10.1.JPG",
  },
  {
    title: "Dogs Gallery",
    description:
      "Explore various breeds and a wide range of images, using ReactJS & Dogs API",
    live: "https://doggstagram.netlify.app/",
    git: "https://github.com/karandas777/doggy",
    date: "May 2020",
    image: "/portfolio/projects/pro6.1.JPG",
  },
  {
    title: "IMDB Replica",
    description:
      "Replica of popular movie review site IMDB, using ReactJS & MoviesDB API",
    live: "https://imdb2020.netlify.app/",
    git: "https://github.com/karandas777/imdb",
    date: "February 2020",
    image: "/portfolio/projects/pro5.1.JPG",
  },
  {
    title: "Business Homepage",
    description: "A demo homepage using HTML, Bootstrap & Javascript",
    live: "https://zombiz-98.netlify.app/",
    git: "https://github.com/karandas777/Zombiz",
    date: "August 2019",
    image: "/portfolio/projects/pro2.1.JPG",
  },
  {
    title: "Restaurant Homepage",
    description: "A single page design using HTML & CSS",
    live: "https://italian-res.netlify.app",
    git: "https://github.com/karandas777/Italian-Restaurant",
    date: "June 2019",
    image: "/portfolio/projects/pro1.1.JPG",
  },
];
