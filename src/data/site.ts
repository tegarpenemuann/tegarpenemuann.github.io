// ============================================================
// DATA SITUS — konten bilingual (id/en).
// Ganti sesuai data Anda, lalu biarkan struktur tetap.
// ============================================================

import type { Locale } from '../i18n';

type Loc = { id: string; en: string };

export const profile = {
  name: 'Tegar Penemuan',
  firstName: 'Tegar',
  role: {
    id: 'Fullstack Developer',
    en: 'Fullstack Developer',
  } satisfies Loc,
  tagline: {
    id: 'Lambat Tertinggal, Malas Tertindas, Berhenti Mati.',
    en: 'Slow gets left behind, lazy gets oppressed, stopping means death.',
  } satisfies Loc,
  bio: {
    id: [
      'Lulusan Informatika Universitas Amikom Purwokerto (IPK 3.88) yang kini bekerja sebagai Fullstack Developer di PT Ethos Kreatif Indonesia. Saya suka membangun produk end-to-end dari antarmuka yang rapi hingga API dan sistem backend yang andal.',
      'Sebelumnya saya menjadi Back End Developer di Aksaramaya, menangani pengembangan API, desain database, dan integrasi sistem menggunakan Node.js, Go, dan TypeScript. Saya juga mengikuti program studi independen Android Developer di Binar Academy sebagai ketua tim.',
      'Di luar coding, saya menulis artikel teknis di Medium tentang REST API, Express, dan Go, serta membagikan tutorial pengembangan di kanal YouTube Tegar Penemuan setup tools (VS Code, Ubuntu/Linux), database (MongoDB, MySQL, SQLite), hingga Java dan Android — dengan tujuan berbagi ilmu dan memberikan manfaat bagi yang membutuhkan. Saya percaya: lambat tertinggal, malas tertindas, berhenti mati.',
    ],
    en: [
      "An Informatics graduate from Universitas Amikom Purwokerto (GPA 3.88) currently working as a Fullstack Developer at PT Ethos Kreatif Indonesia. I enjoy building products end-to-end from polished interfaces to reliable APIs and backend systems.",
      'Previously, I worked as a Back End Developer at Aksaramaya, handling API development, database design, and system integration with Node.js, Go, and TypeScript. I also joined Binar Academy\'s Android Developer independent study program as a team leader.',
      'Outside of coding, I write technical articles on Medium about REST APIs, Express, and Go, and share dev tutorials on my YouTube channel tool setup (VS Code, Ubuntu/Linux), databases (MongoDB, MySQL, SQLite), to Java and Android — aiming to share knowledge and benefit others. I believe: slow gets left behind, lazy gets oppressed, stopping means death.',
    ],
  } as Record<Locale, string[]>,
  skills: [
    'JavaScript / TypeScript',
    'Node.js',
    'Go',
    'Express',
    'MongoDB',
    'React',
    'Redis',
    'RabbitMQ',
    'Docker',
    'AWS',
    'Android (Kotlin)',
  ],
  resumeUrl: '/resume.pdf',
};

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/tegarpenemuann',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tegar-penemuan-802727186/',
    icon: 'linkedin',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@tegarpenemuan',
    icon: 'medium',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@TegarPenemuan',
    icon: 'youtube',
  },
] as const;

export const experience = [
  {
    role: { id: 'Full Stack Developer', en: 'Full Stack Developer' } satisfies Loc,
    company: 'PT Ethos Kreatif Indonesia',
    companyUrl: '',
    period: { id: '2024 — Sekarang', en: '2024 — Present' } satisfies Loc,
    description: {
      id: 'Mengembangkan dan memelihara aplikasi web full-stack untuk klien, mencakup frontend, API, dan integrasi database.',
      en: 'Developing and maintaining full-stack web applications for clients, covering frontend, APIs, and database integration.',
    } satisfies Loc,
    tech: ['JavaScript', 'TypeScript', 'Node.js', 'React'],
  },
  {
    role: { id: 'Back End Developer', en: 'Back End Developer' } satisfies Loc,
    company: 'Aksaramaya',
    companyUrl: '',
    period: { id: '2023', en: '2023' } satisfies Loc,
    description: {
      id: 'Mengembangkan API, merancang database, dan mengintegrasikan sistem untuk menghadirkan layanan backend yang andal.',
      en: 'Developed APIs, designed databases, and integrated systems to deliver reliable backend services.',
    } satisfies Loc,
    tech: ['Node.js', 'Go', 'TypeScript', 'Redis', 'RabbitMQ', 'Docker', 'AWS', 'ELK Stack'],
  },
  {
    role: {
      id: 'Android Developer (Studi Independen)',
      en: 'Android Developer (Independent Study)',
    } satisfies Loc,
    company: 'Binar Academy',
    companyUrl: '',
    period: { id: '2022', en: '2022' } satisfies Loc,
    description: {
      id: 'Membangun aplikasi Android dengan arsitektur MVVM, integrasi API, dan penerapan CI/CD. Menjabat sebagai ketua tim.',
      en: 'Built Android apps with MVVM architecture, API integration, and CI/CD. Served as team leader.',
    } satisfies Loc,
    tech: ['Kotlin', 'RoomDB', 'MVVM', 'CI/CD'],
  },
];

export const projects = [
  {
    title: { id: 'Aplikasi Manajemen Tugas', en: 'Task Management App' } satisfies Loc,
    description: {
      id: 'Aplikasi web untuk mengelola tugas dan produktivitas dengan dukungan drag-and-drop, filter, dan penyimpanan data lokal.',
      en: 'A web app for managing tasks and productivity with drag-and-drop, filters, and local data storage.',
    } satisfies Loc,
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '',
    github: 'https://github.com/username/project-a',
    demo: 'https://example.com/project-a',
  },
  {
    title: { id: 'Dashboard Analitik Penjualan', en: 'Sales Analytics Dashboard' } satisfies Loc,
    description: {
      id: 'Dashboard interaktif untuk memvisualisasikan data penjualan dengan grafik real-time dan laporan yang dapat diekspor.',
      en: 'An interactive dashboard to visualize sales data with real-time charts and exportable reports.',
    } satisfies Loc,
    tech: ['Chart.js', 'Node.js'],
    image: '',
    github: 'https://github.com/username/project-b',
    demo: 'https://example.com/project-b',
  },
  {
    title: { id: 'Situs E-Commerce Sederhana', en: 'Simple E-Commerce Site' } satisfies Loc,
    description: {
      id: 'Toko online dengan keranjang belanja, checkout, dan integrasi pembayaran. Dibangun dengan fokus pada performa dan SEO.',
      en: 'An online store with cart, checkout, and payment integration, built with a focus on performance and SEO.',
    } satisfies Loc,
    tech: ['Astro', 'Tailwind CSS', 'Stripe'],
    image: '',
    github: 'https://github.com/username/project-c',
    demo: 'https://example.com/project-c',
  },
  {
    title: { id: 'Generator Resume Online', en: 'Online Resume Builder' } satisfies Loc,
    description: {
      id: 'Alat untuk membuat CV profesional dengan template yang dapat disesuaikan, hasil akhirnya bisa diunduh sebagai PDF.',
      en: 'A tool to build professional CVs with customizable templates, downloadable as PDF.',
    } satisfies Loc,
    tech: ['Vue', 'JavaScript', 'CSS'],
    image: '',
    github: 'https://github.com/username/project-d',
    demo: 'https://example.com/project-d',
  },
  {
    title: { id: 'Aplikasi Cuaca & Cuaca Lokal', en: 'Weather & Local Weather App' } satisfies Loc,
    description: {
      id: 'Aplikasi cuaca yang menampilkan informasi terkini dan prakiraan 7 hari berdasarkan lokasi pengguna.',
      en: 'A weather app showing current conditions and a 7-day forecast based on the user\'s location.',
    } satisfies Loc,
    tech: ['React', 'OpenWeather API', 'Vite'],
    image: '',
    github: 'https://github.com/username/project-e',
    demo: 'https://example.com/project-e',
  },
  {
    title: { id: 'Clone Website Portofolio', en: 'Portfolio Website Clone' } satisfies Loc,
    description: {
      id: 'Proyek belajar: membangun ulang tampilan website portofolio modern dengan fokus pada aksesibilitas dan performa.',
      en: 'A learning project: rebuilding a modern portfolio website with a focus on accessibility and performance.',
    } satisfies Loc,
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '',
    github: 'https://github.com/username/project-f',
    demo: 'https://example.com/project-f',
  },
];

export const siteMeta = {
  id: {
    title: 'Tegar Penemuan | Fullstack Developer',
    description:
      'Portofolio Tegar Penemuan — Fullstack Developer yang membangun aplikasi web dan API yang cepat, andal, dan mudah dirawat.',
  },
  en: {
    title: 'Tegar Penemuan | Fullstack Developer',
    description:
      "Tegar Penemuan's portfolio — Fullstack Developer building fast, reliable, and maintainable web apps and APIs.",
  },
  author: 'Tegar Penemuan',
};