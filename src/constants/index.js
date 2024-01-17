
  import mobile from "../assets/mobile.png"
  import creator from "../assets/creator.png"
  import web from "../assets/web.png"
  import javascript from "../assets/javascript.png"
  import typescript from "../assets/typescript.png"
  import html from "../assets/html.png"
  import reactjs from "../assets/reactjs.png"
  import redux from "../assets/redux.png"
  import tailwind from "../assets/tailwind.png"
  import nodejs from "../assets/nodejs.png"
  import css from "../assets/css.png"
  import next from "../assets/next.png"
  import git from "../assets/git.png"
  import pusfi from "../assets/pursfi.png"
  import twitter from "../assets/twitter.png"
  import linkedin from "../assets/linkedin.png"
  import dashboard from "../assets/dashboard.jpeg"
  import crypto from "../assets/crypto.jpeg"
  import orphan from "../assets/orphan.jpeg"
  import moat from "../assets/moat.png"
  import purs from "../assets/purs.png"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Technical Writer",
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
      name: "Next JS",
      icon: next,
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
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Purscliq",
      icon: purs,
      iconBg: "#383E56",
      date: "Jan 2022 - October 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Moat Academy",
      icon: moat,
      iconBg: "#E6DEDD",
      date: "March 2022 - August 2022",
      points: [
        "Assisted in developing web applications using HTML, CSS, Bootstrap, and JavaScript.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Debugged and fixed front-end issues and collaborated with the QA team to identify and resolve bugs."
      ],
    },

  ];

  
  const projects = [
    {
      name: "Pursfinace",
      description:
        "Web-based financial platform to manage your global payments and finances.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "ant design",
          color: "violet-text-gradient",
        },
      ],
      image: pusfi,
      source_code_link: "https://pursfinance.com/",
      live_link: "https://github.com/Purscliq/Purscliq-website.git",
    },
    {
      name: "Cryto App",
      description:
        "It's an application that entails the lists and news of all cryptocurrencies in the world, with thier ranks and year of establishment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rtk query",
          color: "green-text-gradient",
        },
        {
          name: "ant design",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://loquacious-mousse-1f35ea.netlify.app",
      live_link: "https://github.com/yusufhikmat/cryptocurrency-app.git",
    },
    {
      name: "Admin Dashboard",
      description:
        "It's an aplication that contains the list of users, products, etc of a company.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "rkt query",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/yusufhikmat/dashboard.git",
      live_link: "https://beamish-cascaron-94053a.netlify.app",
    },
    {
      name: "E-commerce",
      description:
        "It's an E-commerce site, where users can order and purchase a product.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/yusufhikmat/ecommerce-1.git",
      live_link: "https://tourmaline-bunny-cb14a1.netlify.app",
    },
    {
      name: "Orphan Foundation",
      description:
        "It's an application that talks about the estimated number of ophans. It mission is dedicated looking the welfare of children..",
      tags: [
        {
          name: "javavscript",
          color: "blue-text-gradient",
        },
        {
          name: "vanilla css",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap css",
          color: "pink-text-gradient",
        },
      ],
      image: orphan,
      source_code_link: "https://github.com/yusufhikmat/orphan-foundation",
      live_link: "https://golden-tiramisu-3894e0.netlify.app",
    }
  ];

  const contact =[
    {
      name:"git",
      icon:git,
      color:"pink-text-gradient",
      link:"https://github.com/",
    },
    {
      name:"linkedIn",
      icon:linkedin,
      color:"pink-text-gradient",
      link:"http://www.linkedin.com/in/hikmat-yusuf-b078741b6",
    },
    {
      name:"twitter",
      icon:twitter,
      color:"pink-text-gradient",
      link:"http://www.linkedin.com/in/hikmat-yusuf-b078741b6",
    }

  ]
  
  export { services, technologies, experiences, projects, contact };
