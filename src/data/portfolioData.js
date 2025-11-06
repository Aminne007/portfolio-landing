import image1 from '../../assets/image 1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image 3.png';



export const profile = {
  name: 'Amine Hassan Al Maassarani',
  location: 'Tripoli, Lebanon',
  headline:
    'Computer & Communication Engineer focused on embedded systems, intelligent networking, and secure mobile,Web experiences',
  availability: 'Available for embedded, mobile,Web, and IoT-focused roles',
  focusArea: 'Robotics, IoT & secure network solutions',
  responseTime: 'Replies within 24 hours via email',
  heroCTA: {
    primaryLabel: 'Email Amine',
    primaryHref: 'mailto:aminemaaasarani@gmail.com',
    secondaryLabel: 'View Portfolio Highlights',
    secondaryHref: '#projects',
  },
  socialLinks: [
    { label: 'Email', href: 'mailto:aminemaaasarani@gmail.com', icon: 'mail' },
    { label: 'Phone', href: 'tel:+96176326256', icon: 'phone' },
  ],
};

export const about = {
  title: 'Engineering connected systems with measurable outcomes',
  summary:
    'Computer & Communication Engineering graduate with a solid foundation in programming, networking, embedded systems, and cybersecurity. Quick to learn and adapt, with hands-on experience gained through academic projects and technical training. Passionate about solving real-world problems and ready to take on diverse technical roles in a dynamic professional environment.',
  highlights: [
    { label: 'Degree', value: 'BCCE, Lebanese International University' },
    { label: 'Graduation', value: 'Class of 2025 · Distinction' },
    { label: 'Capstone', value: 'Rescue Rover – Hybrid  rover' },
    { label: 'Studying', value: 'MCCE, Lebanese International University' },
    { label: 'Graduation', value: 'In proggress' },
  ],



  services: [
    {
      title: 'Embedded & IoT Systems',
      description:
        'Prototype sensor-rich platforms on ESP32 and Arduino, combining hardware integration with telemetry dashboards and responsive controls.',
    },
    {
      title: 'Network Engineering & Security',
      description:
        'Configure VLAN, NAT, DNS, DHCP, and OSPF environments while applying cybersecurity principles reinforced through CTF practice.',
    },
    {
      title: 'Cross-Platform Apps & UX',
      description:
        'Design Flutter and Android applications backed by Firebase services, real-time analytics, and polished Material 3 user experiences.',
    },
    {
    title: 'Web Dev',
    description:
      'Design Websites using diffrent languages and frame works like HTML, CSS, JavaScript, PHP , React , tailwind , and more.',
  },
  ],
};

export const projects = [
  {
    title: 'Rescue Rover – Hybrid Exploration Platform',
    description:
      'Architected an ESP32-powered rover with GPS, live camera streaming, WebSocket telemetry, and obstacle detection to support rapid response scenarios.',
    stats: [
      { label: 'Role', value: ' Developper ,Systems Engineer' },
      { label: 'Timeline', value: '2024 — 2025' },
      { label: 'Impact', value: 'Real-time navigation & data capture' },
    ],
    technologies: ['ESP32', 'Flutter', 'WebSockets', 'GPS', 'Sensor Fusion'],
    cta: {
      label: 'Request Technical Brief',
      href: 'mailto:aminemaaasarani@gmail.com?subject=Rescue%20Rover%20Brief',
    },
    image: image1,image2,image3,
  },
  {
    title: 'Rescue Rover – Flutter/Dart App',
    description:
      'Rescue Rover app for controlling and monitoring the hybrid exploration platform, featuring real-time telemetry, camera streaming, and intuitive navigation controls and offline Maps.',
    stats: [
      { label: 'Role', value: 'Team Lead & Systems Engineer' },
      { label: 'Timeline', value: '2024 — 2025' },
      { label: 'Impact', value: 'Real-time navigation & data capture' },
    ],
    technologies: ['ESP32', 'Flutter', 'WebSockets', 'GPS', 'Sensor Fusion'],
    cta: {
      label: 'Request Technical Brief',
      href: 'mailto:aminemaaasarani@gmail.com?subject=Rescue%20Rover%20Brief',
    },
    image: image1,image2,image3,
  },
  {
    title: 'Gym Rat – Cross-Platform Gym Management & E-Commerce App',
    description:
      'Building a unified admin dashboard and consumer app with live analytics, product management, promo automation, and secure user journeys.',
    stats: [
      { label: 'Role', value: 'Lead Flutter Developer' },
      { label: 'Status', value: 'In progress' },
      { label: 'Highlight', value: 'Realtime catalog & analytics' },
    ],
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloud Functions'],
    cta: { label: 'Preview Feature Roadmap', href: '#contact' },
    image: '',
  },
  {
    title: 'Cinema Ticketing System',
    description:
      'Developed a desktop ticketing workflow that migrated from file storage to a PHP/MySQL backend, enabling reliable seat inventory control.',
    stats: [
      { label: 'Role', value: 'Software Developer' },
      { label: 'Timeline', value: '2023' },
      { label: 'Outcome', value: 'end-to-end ticketing' },
    ],
    technologies: ['Java', 'PHP', 'MySQL'],
    cta: { label: 'Review Implementation Notes', href: '#contact' },
    image: '',
  },
  {
    title: 'IoT Security & Sensing Toolkit',
    description:
      'Delivered Arduino-based security prototypes featuring motion detection, keypad input, and remote alerts to demonstrate layered protection.',
    stats: [
      { label: 'Role', value: 'Embedded Systems Engineer' },
      { label: 'Timeline', value: '2022' },
      { label: 'Result', value: 'Modular security proof-of-concept' },
    ],
    technologies: ['Arduino', 'Sensors', 'C/C++', 'Circuit Design'],
    cta: { label: 'Discuss Use Cases', href: 'mailto:aminemaaasarani@gmail.com?subject=IoT%20Security%20Toolkit' },
    image: '',
  },
];

export const experience = [
  {
    company: 'Ogero Telecom',
    role: 'Network Engineering Intern',
    period: '2023',
    achievements: [
      'Configured VLAN, NAT, DHCP, and OSPF lab environments to mirror ISP-grade infrastructure and routing policies.',
      'Documented troubleshooting runbooks that reduced escalation time for recurring connectivity incidents.',
      'Collaborated with senior engineers to review cybersecurity baselines and resilience across backbone assets.',
    ],
  },
  {
    company: 'Lebanese International University',
    role: 'Computer & Communication Engineering Student',
    period: '2021 — 2025',
    achievements: [
      'Completed advanced coursework spanning embedded systems, digital logic, telecommunications, and cybersecurity.',
      'Led capstone and multi-semester teams delivering projects such as Rescue Rover and Gym Rat with integrated hardware-software stacks.',
      'Graduated with distinction through consistent academic excellence and research-driven project execution.',
    ],
  },
];

export const skills = {
  categories: [
    {
      title: 'Programming & Scripting',
      items: ['C', 'C++', 'Java', 'PHP', 'Dart', 'JavaScript', 'TypeScript', 'Python'],
    },
    {
      title: 'Platforms & Frameworks',
      items: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Flutter',
        'Android Studio',
        'Firebase (Auth, Firestore, Storage, Functions)',
        'MySQL',
        'ESP32 & Arduino Ecosystem',
      ],
    },
    {
      title: 'Networks & Security',
      items: ['VLAN · NAT · DNS · DHCP', 'OSPF Routing', 'Network Security Principles', 'CTF Cybersecurity (Semicolon)'],
    },
    {
      title: 'Data & Tooling',
      items: ['AI Prompting & Tool Integration', 'Sensor Data Visualization', 'Version Control (Git)', 'Systems Documentation'],
    },
  ],
  callouts: [
    {
      title: 'Certifications & Training',
      items: [
        'Basic Artificial Intelligence Certification',
        'Arduino Foundation & Arduino Mastery Programs',
        'Ogero Telecom Internship Program',
        'CTF Cybersecurity — Semicolon Initiative',
      ],
    },
    {
      title: 'Focus Areas & Interests',
      items: [
        'Robotics and Embedded Systems',
        'Networking and Cybersecurity',
        'IoT Solutions and Smart Sensing',
        'Mobile App Development and UI/UX Design',
      ],
    },
  ],
};

export const contact = {
  email: 'aminemaaasarani@gmail.com',
  phone: '+961 76 326 256',
  location: 'Tripoli, Lebanon',
  availabilityMessage:
    'Share project details, internship opportunities, or collaboration ideas. I respond to every inquiry within one business day.',
  calendlyHref: 'tel:+96176326256',
};
