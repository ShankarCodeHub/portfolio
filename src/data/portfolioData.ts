export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  type: 'Full-Stack' | 'Backend' | 'Frontend';
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  platform?: string;
  issued?: string;
  credentialId?: string;
  href: string;
  actionLabel: string;
  downloadable: boolean;
  downloadName?: string;
}

export const PERSONAL_DETAILS = {
  name: 'Uma Shankar',
  role: 'Frontend Engineer',
  badge: 'B.Tech CSE • 2027',
  email: 'shankar37337@gmail.com',
  github: 'https://github.com/ShankarCodeHub', // User github link
  linkedin: 'https://www.linkedin.com/in/uma-shankar-a376b6218', // User linkedin link
  location: 'Dehradun, Uttarakhand, India',
  tagline: 'Passionate Frontend Engineer specializing in intuitive React frontends and modern UI/UX design. Ready for internships and frontend roles.',
  about: 'I am a pre-final year B.Tech Computer Science student with a strong foundation in data structures, algorithms, and full-stack software development. I build end-to-end applications combining the robust backend capabilities of Java, Spring Boot, and SQL with the dynamic, reactive user experiences of React and Tailwind CSS.',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DevDetective',
    description: 'A sleek, responsive web application designed to search and retrieve real-time GitHub user profiles, displaying statistics, repository details, followers, and biography using the GitHub REST API.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub API'],
    github: 'https://github.com/ShankarCodeHub/DevDetective',
    demo: 'https://devdetective-hub.vercel.app/',
    type: 'Frontend'
  },
  {
    id: '2',
    title: 'Netflix Clone',
    description: 'A Netflix-inspired web application featuring a fully responsive landing page, sign-in/sign-up flows with route protection, profile selection, content browsing with search, and a modal video preview player.',
    tech: ['React', 'React Router', 'Firebase', 'styled-components', 'Fuse.js'],
    github: 'https://github.com/ShankarCodeHub/netflix',
    type: 'Frontend'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', level: 80, iconName: 'javascript' },
      { name: 'Python', level: 70, iconName: 'python' },
      { name: 'Java', level: 80, iconName: 'java' },
      { name: 'C', level: 90, iconName: 'c' },
      { name: 'HTML', level: 100, iconName: 'html' },
      { name: 'CSS', level: 100, iconName: 'css' }
    ]
  },
  {
    category: 'Tech Stack',
    skills: [
      { name: 'React.js', level: 80, iconName: 'react' },
      { name: 'Node.js', level: 85, iconName: 'node' },
      { name: 'MongoDB', level: 80, iconName: 'mongodb' }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90, iconName: 'git' },
      { name: 'GitHub', level: 90, iconName: 'github' },
      { name: 'VS Code', level: 100, iconName: 'vscode' },
      { name: 'IntelliJ IDEA', level: 100, iconName: 'intellij' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Complete Web Development Course',
    issuer: 'Udemy',
    platform: 'Udemy',
    issued: '2024',
    credentialId: 'UC-b9b5a837-142c-47d0-99bc-3bf4d8e578c7',
    href: '/certificates/udemy-complete-web-development-course.pdf',
    actionLabel: 'Download PDF',
    downloadable: true,
    downloadName: 'udemy-complete-web-development-course.pdf'
  },
  {
    title: 'Digital Productivity with AI',
    issuer: 'Passport to Earning / UNICEF',
    platform: 'UNICEF P2E',
    issued: '2024',
    credentialId: 'P2E-AI-3982741',
    href: '/certificates/digital-productivity-with-ai.pdf',
    actionLabel: 'Download PDF',
    downloadable: true,
    downloadName: 'digital-productivity-with-ai.pdf'
  },
  {
    title: 'Web Technology',
    issuer: 'Dev Bhoomi Uttarakhand University',
    platform: 'University Curriculum',
    issued: '2024',
    href: '/certificates/web-technology.pdf',
    actionLabel: 'Download PDF',
    downloadable: true,
    downloadName: 'web-technology.pdf'
  },
  {
    title: 'Advance Web Technology',
    issuer: 'Dev Bhoomi Uttarakhand University',
    platform: 'University Curriculum',
    issued: '2024',
    href: '/certificates/advance-web-technology.pdf',
    actionLabel: 'Download PDF',
    downloadable: true,
    downloadName: 'advance-web-technology.pdf'
  },
  {
    title: 'Introduction to Software Engineering Job Simulation',
    issuer: 'Forage',
    platform: 'Forage',
    issued: '2024',
    href: '/certificates/software-engineering-job-simulation.pdf',
    actionLabel: 'Download PDF',
    downloadable: true,
    downloadName: 'software-engineering-job-simulation.pdf'
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
    platform: 'Coursera',
    issued: '2025',
    credentialId: 'NV62N5VBHEQU',
    href: 'https://www.coursera.org/account/accomplishments/verify/NV62N5VBHEQU',
    actionLabel: 'Open verification',
    downloadable: false
  },
  {
    title: 'Google Ads for Beginners',
    issuer: 'Google',
    platform: 'Coursera',
    issued: '2025',
    credentialId: 'MUM9QEVVCKHV',
    href: 'https://www.coursera.org/account/accomplishments/verify/MUM9QEVVCKHV',
    actionLabel: 'Open verification',
    downloadable: false
  }
];
