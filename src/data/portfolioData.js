export const profile = {
  name: 'Your Name',
  location: 'City, Country',
  headline: 'Full-Stack Engineer & AI Enthusiast',
  availability: 'Open for full-time roles and freelance collaborations',
  heroCTA: {
    primaryLabel: 'Download CV',
    primaryHref: '#',
    secondaryLabel: 'Schedule a Call',
    secondaryHref: '#contact',
  },
  socialLinks: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'GitHub', href: '#', icon: 'github' },
    { label: 'Dribbble', href: '#', icon: 'dribbble' },
  ],
};

export const about = {
  summary:
    "I design and build polished digital products, blending full-stack engineering with human-centered design principles. I thrive on solving complex problems and translating bold ideas into scalable solutions.",
  highlights: [
    { label: 'Experience', value: '5+ years' },
    { label: 'Projects Delivered', value: '24' },
    { label: 'Clients Served', value: '16' },
  ],
  services: [
    {
      title: 'Product Engineering',
      description:
        'From ideation to deployment, I craft maintainable and high-performing web applications tailored to business needs.',
    },
    {
      title: 'AI Automation',
      description:
        'I streamline workflows with custom AI assistants and automations that blend seamlessly into existing operations.',
    },
    {
      title: 'Design Systems',
      description:
        'I build cohesive design systems that improve velocity, accessibility, and brand consistency across teams.',
    },
  ],
};

export const projects = [
  {
    title: 'Flagship Case Study Title',
    description:
      'Concise overview of the business problem, the solution you delivered, and the measurable outcomes. Keep this short and lead with impact.',
    stats: [
      { label: 'Role', value: 'Lead Engineer' },
      { label: 'Timeline', value: '12 weeks' },
      { label: 'Result', value: '+38% conversion' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    cta: { label: 'View Case Study', href: '#' },
    image: '',
  },
  {
    title: 'High-Impact Automation',
    description:
      'Highlight a recent automation or AI-focused build. Focus on the transformation and how you unlocked efficiencies for the client.',
    stats: [
      { label: 'Role', value: 'Automation Engineer' },
      { label: 'Timeline', value: '6 weeks' },
      { label: 'Savings', value: '120+ hours/mo' },
    ],
    technologies: ['Python', 'LangChain', 'Azure'],
    cta: { label: 'Read More', href: '#' },
    image: '',
  },
  {
    title: 'Design System Overhaul',
    description:
      'Summarize how you modernized a product UI, introduced accessibility best practices, or improved collaboration with design systems.',
    stats: [
      { label: 'Role', value: 'Design Engineer' },
      { label: 'Timeline', value: '8 weeks' },
      { label: 'Impact', value: 'Reduced handoff time by 45%' },
    ],
    technologies: ['Figma', 'Storybook', 'TypeScript'],
    cta: { label: 'Explore Project', href: '#' },
    image: '',
  },
];

export const experience = [
  {
    company: 'Company Name',
    role: 'Lead Software Engineer',
    period: '2023 — Present',
    achievements: [
      'Summarize a meaningful impact you delivered, highlighting metrics or strategic outcomes.',
      'Collaborated with cross-functional stakeholders to define and deliver a roadmap that balanced velocity with quality.',
      'Mentored engineers and guided code quality initiatives that improved maintainability.',
    ],
  },
  {
    company: 'Previous Company',
    role: 'Full-Stack Developer',
    period: '2020 — 2023',
    achievements: [
      'Architected and shipped a multi-tenant platform used by thousands of daily active users.',
      'Optimized critical user flows resulting in significant performance gains and customer satisfaction.',
      'Introduced automation tooling that reduced manual QA time by 30%.',
    ],
  },
];

export const skills = {
  categories: [
    {
      title: 'Core Stack',
      items: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
    },
    {
      title: 'AI & Automation',
      items: ['Python', 'LangChain', 'OpenAI API', 'Workflow Orchestration'],
    },
    {
      title: 'Workflow',
      items: ['Design Systems', 'CI/CD', 'Product Strategy', 'Stakeholder Alignment'],
    },
  ],
  testimonials: [
    {
      quote:
        '“Insert a short client testimonial that speaks to your ability to deliver high-quality work and partnership.”',
      name: 'Client Name',
      role: 'Title, Company',
    },
    {
      quote:
        '“Share a highlight from a teammate or manager underscoring your leadership, empathy, or craft.”',
      name: 'Colleague Name',
      role: 'Title, Company',
    },
  ],
};

export const contact = {
  email: 'you@email.com',
  phone: '+1 (000) 000-0000',
  location: 'City, Country',
  availabilityMessage:
    'I typically reply within 24 hours. Share as much detail as you can so I can tailor a thoughtful response.',
  calendlyHref: '#',
};
