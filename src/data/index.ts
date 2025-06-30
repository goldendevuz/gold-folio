// Types

interface projectType {
  img: string;
  title: string;
  stack: string;
  live: string;
  code: string;
}

interface navLinkType {
  title: string;
  href: string;
}

// Data

export const projectData: projectType[] = [
  {
    img: "/projects/1.png",
    title: "Bigmetall | SPA",
    stack: "React, Tailwind CSS",
    live: "https://bigmetall.netlify.app/",
    code: "https://github.com/goldendevuz/Bigmetall",
  },
  {
    img: "/projects/2.png",
    title: "Premiumdroid | Web app",
    stack: "React, MUI, Firebase, RTK",
    live: "https://premiumdroid.netlify.app/",
    code: "https://github.com/goldendevuz/PREMIUMDROID",
  },
  {
    img: "/projects/3.png",
    title: "Interact.uz | Landing",
    stack: "React, MUI",
    live: "http://interact.uz/",
    code: "https://github.com/goldendevuz/interact-agency",
  },
  {
    img: "/projects/4.png",
    title: "Food recipes | Web app",
    stack: "Vue, Vuex, Scss",
    live: "https://food-recipe-vue.netlify.app/",
    code: "https://github.com/goldendevuz/Food-recipes-App/tree/main",
  },
  {
    img: "/projects/5.png",
    title: "Bettagraph.uz | Landing",
    stack: "React, MUI, Scss",
    live: "https://bettagraph.uz",
    code: "https://github.com/goldendevuz/Bettagraph",
  },
  {
    img: "/projects/6.png",
    title: "Gamers | E-commerce",
    stack: "React, Redux, MUI",
    live: "https://gaming-notebooks.netlify.app/",
    code: "https://github.com/goldendevuz/gamers-e-commerce",
  },
  {
    img: "/projects/7.png",
    title: "Belissimo | E-commerce",
    stack: "React, Redux, Bootstrap",
    live: "https://pizza-uzb.netlify.app/",
    code: "https://github.com/goldendevuz/pizza-e-commerce-web-app",
  },
  {
    img: "/projects/8.png",
    title: "Crypto banana | Landing",
    stack: "React, AOS, Bootstrap",
    live: "https://crypto-banana.netlify.app/",
    code: "https://github.com/goldendevuz/Crypto-Banana",
  },
  {
    img: "/projects/9.png",
    title: "Course Platform | Web app",
    stack: "React, Bootstrap, Scss",
    live: "https://edu-press.netlify.app/",
    code: "https://github.com/goldendevuz/Course-platform",
  },
  {
    img: "/projects/10.png",
    title: "Rockstar games | SPA",
    stack: "React, Bootstrap, Scss",
    live: "https://rockstar-games.vercel.app/",
    code: "https://github.com/goldendevuz/Rockstar-games-web-site",
  },
  {
    img: "/projects/11.png",
    title: "Hypernova | Landing",
    stack: "React, MUI, Scss",
    live: "https://hypernova-demo.netlify.app/",
    code: "https://github.com/goldendevuz/Hypernova",
  },
  {
    img: "/projects/12.png",
    title: "PC UPG | Landing",
    stack: "HTML, CSS, JavaScript",
    live: "https://computer-upg.netlify.app/",
    code: "https://github.com/goldendevuz/PC-UPG-LANDING-PAGE",
  },
  {
    img: "/projects/13.png",
    title: "Farniture | Web site",
    stack: "HTML, CSS, JavaScript",
    live: "https://dilxushmebellari.netlify.app/",
    code: "https://github.com/goldendevuz/Farniture-Web-site",
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
