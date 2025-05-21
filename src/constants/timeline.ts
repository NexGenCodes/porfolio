export interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    period: "2021 - Present",
    title: "Senior Full-Stack Developer",
    company: "TechInnovate Inc.",
    description:
      "Leading development of enterprise-level applications using Next.js, React Native, and AWS. Managing a team of 5 developers and implementing CI/CD pipelines.",
  },
  {
    period: "2018 - 2021",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed and maintained multiple web and mobile applications for clients across various industries. Implemented microservices architecture and containerization.",
  },
  {
    period: "2016 - 2018",
    title: "Frontend Developer",
    company: "WebCraft Agency",
    description:
      "Created responsive and interactive user interfaces for web applications using React, Angular, and Vue.js. Collaborated with designers to implement pixel-perfect designs.",
  },
  {
    period: "2014 - 2016",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    description:
      "Built and maintained websites and web applications using HTML, CSS, JavaScript, and PHP. Worked in an agile environment with rapid iteration cycles.",
  },
];
