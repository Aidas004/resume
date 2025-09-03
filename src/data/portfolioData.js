export const portfolioData = {
  hero: {
    sectionNumber: "01",
    name: "AIDAS BAGOČIŪNAS",
    role: "FRONTEND DEVELOPER",
    subtitle: "Passionate frontend developer with expertise in React, JavaScript, and modern web technologies. Creating responsive and user-friendly web applications."
  },

  about: {
    sectionNumber: "02",
    title: "ABOUT ME",
    paragraphs: [
      "I am a dedicated frontend developer with experience in building modern web applications. I specialize in React, JavaScript, and responsive design, with a strong focus on creating intuitive user experiences and clean, maintainable code.",
      "Currently based in Lithuania, I'm passionate about staying up-to-date with the latest web technologies and best practices. I enjoy solving complex problems and bringing creative designs to life through code."
    ]
  },

  skills: {
    sectionNumber: "03",
    title: "TECHNICAL SKILLS",
    categories: [
      {
        title: "FRONTEND",
        skills: [
          { name: 'React/Remix.js', level: 92 },
          { name: 'JavaScript (ES6+)', level: 90 },
          { name: 'HTML5/CSS3', level: 90 },
          { name: 'Tailwind CSS', level: 88 },
          { name: 'React Native', level: 65 }
        ]
      },
      {
        title: "BACKEND & TOOLS",
        skills: [
          { name: 'Node.js + Express', level: 75 },
          { name: 'MongoDB', level: 70 },
          { name: 'Docker', level: 65 },
          { name: 'Git/GitHub', level: 88 },
          { name: 'REST APIs', level: 82 }
        ]
      }
    ]
  },

  experience: {
    sectionNumber: "04",
    title: "EXPERIENCE",
    timeline: [
      {
        year: '2022 - Present',
        title: 'Frontend Developer',
        company: 'UAB Pikselis',
        description: 'Developing modern web applications using React, Tailwind CSS, and Remix.js. Building responsive interfaces, working with React Native for mobile development, and utilizing various modern web development tools and libraries.',
        icon: '⚛️'
      },
      {
        year: '2024',
        title: 'Frontend Developer',
        company: 'UAB Adsrpa 6-Month Contract',
        description: 'Worked on web applications using React, Tailwind CSS, and React Native for mobile development. Gained hands-on experience with modern frontend technologies and development workflows in a professional environment.',
        icon: '💼'
      },
      {
        year: '2021 - 2022',
        title: 'Web Development Student',
        company: 'CodeAcademy',
        description: 'Completed comprehensive web development courses focusing on React, Node.js, Express.js, and MongoDB. Learned fundamental programming concepts, modern JavaScript, full-stack development principles, and built multiple projects during the learning process.',
        icon: '📚'
      }
    ]
  },

  contact: {
    sectionNumber: "05",
    title: "GET IN TOUCH",
    subtitle: "Ready to collaborate on your next project? Let's create something amazing together with modern web technologies.",
    contactInfo: [
      {
        icon: "📧",
        title: "EMAIL",
        value: "aidas004@gmail.com",
        href: "mailto:aidas004@gmail.com"
      },
      {
        icon: "💼",
        title: "LINKEDIN",
        value: "Connect on LinkedIn",
        href: "https://linkedin.com/in/aidas-bag"
      },
      {
        icon: "💻",
        title: "GITHUB",
        value: "View my projects",
        href: "https://github.com/aidas004"
      }
    ],
    buttonText: "Let's Work Together"
  }
}
