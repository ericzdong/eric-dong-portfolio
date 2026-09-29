// Edit this file to personalize the portfolio. The page updates automatically.
export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  href?: string
  accent: string
  surface: string
}

export const portfolio = {
  name: 'Eric Dong',
  initials: 'ED',
  role: 'Computer science student by day · lion dancer by night',
  email: 'Eric.wenhao.dong@gmail.com',
  location: 'Louisville, KY',
  availability: 'Open to software engineering opportunities',
  currentFocus: 'B.A. Computer Science · December 2026',
  resumeUrl: `${import.meta.env.BASE_URL}Eric_Dong_Resume_fall2026.pdf`,
  intro: 'I build practical software across web, cloud, AI tooling, and embedded systems—combining strong technical fundamentals with research-driven problem solving.',
  aboutHeading: 'Always learning. Passionate about solving problems.',
  about: [
    'I’m an AWS Certified Computer Science student at the University of Louisville. Go Cards! I have hands-on experience in full-stack development, cloud infrastructure, developer tooling, embedded systems, and scientific research.',
    'My work includes automating React and Storybook component workflows, building cloud-hosted Flask applications, developing C++ sensor systems, and contributing to biomedical research. I love learning new technologies and am passionate about solving complex problems with reliable, thoughtful, and well-engineered solutions.',
  ],
  skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL', 'React', 'Flask', 'MySQL', 'AWS', 'Linux', 'Storybook', 'REST APIs', 'Git'],
  projects: [
    {
      title: 'A2UI Component Catalog Automation',
      category: 'Developer tooling · AI interfaces',
      description: 'Automated reusable React and Storybook.js components into A2UI-compatible JSON catalogs, cataloging 100+ ShadCN and Material Design 3 components and integrating the Gemini API and REST endpoints for searchable, AI-driven interface generation.',
      tags: ['React', 'Storybook.js', 'A2UI', 'ShadCN', 'Material Design 3', 'Gemini API', 'Tailwind CSS', 'REST API'],
      href: 'https://github.com/ericzdong/storybook-shadcn-components',
      accent: '#4f46e5',
      surface: '#e6e8ff',
    },
    {
      title: 'Car & Driver Database',
      category: 'Full-stack · Cloud deployment',
      description: 'Delivered a stable, production-ready vehicle management application by deploying Flask and MySQL behind Nginx on AWS EC2 and configuring secure Linux networking for cloud-hosted database and web operations.',
      tags: ['AWS EC2', 'Flask', 'MySQL', 'Nginx'],
      accent: '#0f766e',
      surface: '#dff7f3',
    },
    {
      title: 'Water Filtration System',
      category: 'Embedded systems · Sensors',
      description: 'Reached approximately 95% turbidity-detection accuracy during testing by programming C++ sensor logic and automated microcontroller responses for a water-filtration prototype.',
      tags: ['C++', 'Arduino', 'Sensors', 'Control logic'],
      accent: '#7c3aed',
      surface: '#eee5ff',
    },
  ] satisfies Project[],
  experience: [
    {
      role: 'Student Researcher',
      company: 'University of Louisville',
      period: 'Jul 2022 — Aug 2023',
      bullets: [
        'Selected as 1 of 13 students for the competitive Cancer & Health Disparity Summer Bridge Program based on demonstrated laboratory and scientific research skills.',
        'Supported ongoing glioblastoma investigations by optimizing tissue decellularization procedures and analyzing samples through scanning electron microscopy, confocal microscopy, and immunostaining.',
      ],
    },
    {
      role: 'Student Researcher',
      company: 'University of Louisville',
      period: 'Jul 2021 — Aug 2021',
      bullets: [
        'Selected as 1 of 25 students for the competitive Louisville Science Pathway Program based on readiness for hands-on microbiology research.',
        'Improved laboratory organization and strain accessibility by building and maintaining a database of Burkholderia pseudomallei mutants.',
        'Validated experimental bacterial strains through antibiotic selection after performing bacterial conjugation and transposon mutagenesis.',
      ],
    },
  ],
  education: {
    school: 'University of Louisville',
    degree: 'B.A. in Computer Science',
    graduation: 'December 2026',
  },
  certification: {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    earned: 'July 2026',
  },
  organizations: ['River Lotus Lion Dance — Lead Dancer', 'Beta Theta Pi — Brother'],
  socials: {
    github: 'https://github.com/Ericzdong',
    linkedin: 'https://linkedin.com/in/ericzdong',
  },
}
