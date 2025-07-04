// Types

interface projectType {
  img: string;
  title: string;
  stack: string;
  live: string;
  code: string;
  previewType: "cli" | "api" | "web";
}

interface navLinkType {
  title: string;
  href: string;
}

// Data

export const projectData: projectType[] = [
  {
    img: "/projects/1.png",
    title: "Task Tracker | CLI",
    stack: "Python, Argparse, Pydantic",
    previewType: "cli",
    live: "https://codesandbox.io/p/github/goldendevuz/task-tracker/main?import=true&embed=1&showConsole=true",
    code: "https://github.com/goldendevuz/task-tracker",
  },
];

export const navLinks: navLinkType[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About Me",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
