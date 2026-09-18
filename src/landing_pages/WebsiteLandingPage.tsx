'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ServerCog,
  Sparkles,
  Workflow,
} from 'lucide-react';
import logo from '@/assets/Logo.jpeg';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'AI & Automation', href: '#ai-automation' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: '3.5+', label: 'Years shipping production platforms' },
  { value: '2', label: 'Apps live on the App Store & Google Play' },
  { value: 'React', label: 'Open-source contributor (merged PR)' },
];

const skillGroups = [
  {
    title: 'Backend',
    icon: ServerCog,
    skills: ['Laravel / PHP', 'Node.js', 'Python (Django REST)', 'Spring Boot', 'Strapi', 'REST API design', 'Auth / authorization'],
  },
  {
    title: 'Frontend',
    icon: Sparkles,
    skills: ['React', 'Next.js (SSR / ISR)', 'TypeScript', 'TanStack Start', 'Tailwind CSS', 'Flutter', 'React Native'],
  },
  {
    title: 'Data',
    icon: Database,
    skills: ['PostgreSQL', 'Query optimization', 'MySQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'AI & Automation',
    icon: Bot,
    skills: ['LLM / OpenAI-compatible APIs', 'Document processing', 'Workflow automation', 'Intelligent assistants'],
  },
  {
    title: 'Practices & Tools',
    icon: Workflow,
    skills: ['Git / GitHub PR workflow', 'CI', 'Regression tests', 'Code review', 'Docker', 'Agile'],
  },
  {
    title: 'Languages',
    icon: Languages,
    skills: ['Arabic (native)', 'French (B2)', 'English (B2)'],
  },
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'BEDEL SARL',
    period: 'Jun 2026 - Present',
    location: 'Nouakchott, Mauritania',
    summary:
      'Bedel is a fintech super-app for Mauritania (iOS / Android): payments, recharge and gift cards, and 30+ digital services in one place.',
    highlights: [
      'Design and implement Laravel + PostgreSQL backends exposing REST APIs consumed by React, Next.js, TanStack Start and React Native clients.',
      'Built LLM-backed features for the in-app AI assistant (Arabic and French), workflow automation and customer support.',
      'Phone-number + OTP authentication and secure payment flows via local wallets (Bankily).',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'SMART MS SA',
    period: 'Oct 2023 - Jun 2026',
    location: 'Nouakchott, Mauritania',
    summary:
      'Shipped customer-facing products and internal platforms for private and public-sector clients.',
    highlights: [
      'Sha6er - food-delivery platform: Flutter mobile app (iOS / Android, 4.6 stars) and Next.js web app; ordering, real-time order tracking with courier map, wallet payments, restaurateur dashboard.',
      'Smart Claim - claims-management SaaS: customizable claim forms, role-based access, real-time notifications, comment threads.',
      'Designed database schemas and optimized reporting SQL on PostgreSQL; built operational dashboards for decision support.',
      'Integrated AI features (document processing, verification, conversational assistant) into internal business tools.',
      'Earlier (Oct 2023 - Feb 2024): led WordPress delivery for client sites, including Three.js interactive experiences and SEO / performance work.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'XpVision',
    period: 'Sep 2024 - Dec 2024',
    location: 'Part-time, remote (Germany)',
    summary:
      'Enterprise SaaS features for international customers, working asynchronously in English with a distributed European team.',
    highlights: [
      'Implemented responsive Next.js interfaces focused on performance and usability.',
      'Built and maintained Strapi REST APIs for content and structured data management.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Moulhim',
    period: 'Jun 2024 - Aug 2024',
    location: 'Part-time, remote (Saudi Arabia)',
    summary: 'Hotel-management system and company site for an Arabic-speaking client.',
    highlights: [
      'Developed React interfaces and integrated Supabase for data and authentication.',
      'Improved user experience and application performance across key workflows.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Yata Medical',
    period: 'May 2023 - Oct 2023',
    location: 'Nouakchott, Mauritania',
    summary:
      'Teleconsultation platform connecting patients and doctors through real-time medical workflows.',
    highlights: [
      'Integrated Twilio video calls for remote consultation sessions.',
      'Built React interfaces and Spring Boot backend services, with authentication / authorization and reporting queries.',
    ],
  },
  {
    role: 'Full-Stack Developer (internship)',
    company: 'Promesse',
    period: 'Feb 2023 - Jul 2023',
    location: 'Remote',
    summary: 'REST APIs, reusable components and Agile delivery on a scalable application architecture.',
    highlights: [],
  },
];

type ProjectLink = { label: string; href: string };

const projects: {
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  links: ProjectLink[];
}[] = [
  {
    name: 'Tahdir',
    tagline: 'Built and operated by me - live, paid enrollment',
    description:
      'Exam-preparation platform for Mauritanian civil-service competitions, also offered inside the Bedel app.',
    technologies: ['Next.js', 'React', 'Laravel', 'PostgreSQL', 'Arabic / French UI'],
    features: [
      '152 specializations',
      '60-question timed mock exams, three levels',
      'Per-question corrections and statistics',
      'Adaptive learning paths and online payment',
    ],
    links: [{ label: 'Live site', href: 'https://tahdir.digiwave-tech.com/' }],
  },
  {
    name: 'Bedel',
    tagline: 'BEDEL SARL - fintech super-app',
    description:
      'Payments, recharge and gift cards, an Arabic / French AI assistant and 30+ digital services for Mauritania.',
    technologies: ['Laravel', 'PostgreSQL', 'React Native', 'Next.js', 'LLM integration'],
    features: ['OTP authentication', 'Wallet payments (Bankily)', 'In-app AI assistant', 'Multi-service marketplace'],
    links: [
      { label: 'bedel.mr', href: 'https://bedel.mr/' },
      { label: 'App Store', href: 'https://apps.apple.com/mr/app/bedel/id6472602322' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.bedel.app' },
    ],
  },
  {
    name: 'Sha6er',
    tagline: 'SMART MS SA - food delivery, Flutter + Next.js, 4.6 stars',
    description:
      'Customer ordering with real-time tracking and a courier map, plus a restaurateur dashboard for orders and analytics.',
    technologies: ['Flutter (iOS / Android)', 'Next.js web app', 'REST APIs', 'Real-time tracking', 'Wallet payments'],
    features: ['Order tracking with courier map', 'Bankily / Masrvi / Sedad payments', 'Restaurateur analytics dashboard', 'Push notifications'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/mr/app/sha6er/id6566187655' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smartmssa.sha6erv1' },
    ],
  },
  {
    name: 'Smart Claim',
    tagline: 'SMART MS SA - claims-management SaaS',
    description:
      'Tracks and processes customer claims for businesses of any size, with transparent status for claimants.',
    technologies: ['React', 'REST APIs', 'PostgreSQL', 'Role-based access'],
    features: ['Customizable claim forms', 'Admin / agent / collaborator / claimant roles', 'Real-time notifications', 'Public and private comments'],
    links: [{ label: 'Product page', href: 'https://www.smartmssa.com/smart-claim-2-2/' }],
  },
  {
    name: 'AB Group Gift Cards',
    tagline: 'Freelance - digital gift-card platform',
    description: 'Arabic / English gift-card platform with authentication and payment workflows.',
    technologies: ['React', 'Next.js', 'Supabase', 'Tailwind CSS'],
    features: ['Account creation and login', 'Gift-card catalog and purchase', 'Payment flows', 'Bilingual UI'],
    links: [{ label: 'Live site', href: 'https://abgroupgiftcards.com/' }],
  },
  {
    name: '@sidieyel/wysiwyg',
    tagline: 'Open source - published on npm',
    description: 'Tiptap-based rich-text editor for React with a configurable toolbar and CSS-variable theming.',
    technologies: ['React', 'TypeScript', 'Tiptap', 'CI'],
    features: ['Configurable toolbar', 'Theming via CSS variables', 'Demo app and docs', 'Published package'],
    links: [{ label: 'GitHub', href: 'https://github.com/SidiEyel/wysiwyg' }],
  },
];

const openSource = [
  {
    project: 'React (facebook/react)',
    summary:
      'Test fix in the Fizz server renderer merged by core maintainer Sebastian Silbermann. Three further fixes open under review, each with a failing-first regression test.',
    links: [
      { label: 'PR #37213 (merged)', href: 'https://github.com/facebook/react/pull/37213' },
      { label: '#37115 Scheduler crash after jsdom teardown', href: 'https://github.com/facebook/react/pull/37115' },
      { label: '#37181 Fizz streaming hang', href: 'https://github.com/facebook/react/pull/37181' },
      { label: '#37262 hydrated <dialog> onToggle', href: 'https://github.com/facebook/react/pull/37262' },
    ],
  },
  {
    project: 'VulnClaw (AI pentest CLI, 2.7k stars)',
    summary:
      'Diagnosed and fixed a cross-platform test failure (POSIX vs Windows cmd quoting); merged by the project owner.',
    links: [{ label: 'PR #221 (merged)', href: 'https://github.com/Netw0rkNoob/VulnClaw/pull/221' }],
  },
  {
    project: 'React Flight triage',
    summary:
      'Reproduced and disproved a reported bug, leading its reporter (author of Waku / Zustand) to close the issue.',
    links: [{ label: 'Issue #37116', href: 'https://github.com/facebook/react/issues/37116' }],
  },
];

const automationItems = [
  'Built the LLM-backed assistant inside the Bedel app, with Arabic and French support.',
  'Integrated document processing, verification and conversational assistants into internal business tools.',
  'Automating repetitive business processes with structured data and APIs.',
  'Building dashboards and data-driven interfaces for clearer operational visibility.',
];

const education = [
  {
    degree: 'Master\u2019s Degree in Computer Systems (Informatique Syst\u00e8me)',
    school: 'Facult\u00e9 des Sciences et Techniques, University of Nouakchott',
    period: '2021 - 2023',
  },
  {
    degree: 'Bachelor\u2019s Degree in Mathematics and Computer Science',
    school: 'Facult\u00e9 des Sciences et Techniques, University of Nouakchott',
    period: '2018 - 2021',
  },
];

const achievements = [
  'Two apps I worked on are live on the App Store and Google Play (Bedel, Sha6er).',
  'Built and operate Tahdir, a paid exam-prep platform with 152 specializations.',
  'Open-source contributor to React: a merged PR reviewed by a core maintainer, three more under review.',
  'Worked in Arabic, French and English-speaking environments with distributed teams in Europe and the Gulf.',
];

const contactLinks = [
  { label: 'Email', value: 'sidi.eyel@gmail.com', href: 'mailto:sidi.eyel@gmail.com', icon: Mail },
  { label: 'Phone', value: '+222 31 31 49 23', href: 'tel:+22231314923', icon: Phone },
  { label: 'Location', value: 'Nouakchott, Mauritania', href: '#contact', icon: MapPin },
  { label: 'LinkedIn', value: 'linkedin.com/in/sidieye', href: 'https://www.linkedin.com/in/sidieye', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/SidiEyel', href: 'https://github.com/SidiEyel', icon: Github },
  { label: 'Portfolio', value: 'sidieyel.vercel.app', href: 'https://sidieyel.vercel.app/en', icon: ExternalLink },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm shadow-slate-200/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:shadow-none">
      {children}
    </span>
  );
}

export const WebsiteLandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-[#0a0f14] dark:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0f14]/85">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3" aria-label="Sidi Eyel home">
            <Image src={logo} alt="Sidi Eyel" width={40} height={40} className="h-10 w-10 rounded-md object-cover" />
            <div className="hidden leading-tight sm:block">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Sidi Eyel</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Software Engineer</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-teal-600 dark:hover:text-teal-300">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="/assets/resume.pdf"
            download
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
          >
            <Download className="h-4 w-4" />
            CV
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-white/10 dark:bg-[#0d141b]">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800 dark:border-teal-300/20 dark:bg-teal-300/10 dark:text-teal-200">
                <Rocket className="h-4 w-4" />
                Full-stack development, AI integration, and digital transformation
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-950 md:text-6xl lg:text-7xl dark:text-white">
                Full-stack engineer shipping fintech, delivery and SaaS platforms.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I am Sidi Abdellah Mohamed Hassane Eyel, a full-stack software engineer (M.Sc. Computer Systems) working
                with Laravel, React / Next.js, PostgreSQL and LLM integrations. Two apps I worked on are live on the
                App Store and Google Play, and I contribute to React.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-teal-600 px-6 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-200"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold text-slate-700 transition hover:text-teal-700 dark:text-slate-200 dark:hover:text-teal-200"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-md border border-slate-200 bg-slate-50 p-4 shadow-2xl shadow-slate-300/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
                <div className="flex items-center gap-4 border-b border-slate-200 pb-4 dark:border-white/10">
                  <Image src={logo} alt="Sidi Eyel profile" width={72} height={72} className="h-[72px] w-[72px] rounded-md object-cover" />
                  <div>
                    <p className="text-xl font-semibold text-slate-950 dark:text-white">Sidi Abdellah Mohamed Hassane Eyel</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Nouakchott, Mauritania</p>
                  </div>
                </div>
                <div className="grid gap-3 py-5 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-md bg-white p-4 dark:bg-[#0d141b]">
                      <p className="text-2xl font-semibold text-teal-600 dark:text-teal-300">{stat.value}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {['Laravel + PostgreSQL backends', 'React / Next.js frontends', 'LLM-backed product features', 'Open-source contributor to React'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-[#0d141b] dark:text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white md:text-5xl">Engineering with business context.</h2>
            </div>
            <div className="space-y-6 text-lg leading-9 text-slate-600 dark:text-slate-300">
              <p>
                I am a full-stack software engineer with a Master’s degree in Computer Systems from the Faculté des
                Sciences et Techniques, University of Nouakchott. My work sits between full-stack engineering,
                system integration, and practical digital transformation.
              </p>
              <p>
                I enjoy building applications that make operations clearer: dashboards, backend services, API-driven
                platforms, content systems, and automation workflows. I am especially interested in applied AI, data
                processing, and business process automation, while staying honest about the work: useful systems first,
                technology second.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-[#0d141b] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Skills"
              title="A practical full-stack toolkit"
              description="Organized around the work I do most: frontend products, backend systems, databases, integrations, automation, and delivery."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="rounded-md border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-100 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Experience"
              title="Impact-focused engineering work"
              description="Professional experience rewritten around systems, delivery, optimization, data flows, and real user value."
            />
            <div className="space-y-5">
              {experiences.map((job) => (
                <article key={`${job.company}-${job.period}`} className="grid gap-6 rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 dark:border-white/10 dark:bg-white/5 dark:shadow-none md:grid-cols-[0.34fr_0.66fr]">
                  <div>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-300">{job.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{job.role}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.company} · {job.location}</p>
                  </div>
                  <div>
                    <p className="leading-7 text-slate-600 dark:text-slate-300">{job.summary}</p>
                    <ul className="mt-4 space-y-3">
                      {job.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-[#0d141b] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Projects"
              title="Selected platforms and product work"
              description="A concise view of projects that show full-stack delivery, structured data, internal tools, and customer-facing experiences."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="rounded-md border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{project.name}</h3>
                      <p className="mt-1 text-sm font-medium text-teal-600 dark:text-teal-300">{project.tagline}</p>
                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                    </div>
                    <BriefcaseBusiness className="h-6 w-6 shrink-0 text-teal-600 dark:text-teal-300" />
                  </div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-sm font-semibold text-slate-950 dark:text-white">Key features</p>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-sm text-slate-600 dark:text-slate-300">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-slate-950 dark:text-white">See it live</p>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-md border border-teal-200 bg-white px-3 py-1 text-xs font-semibold text-teal-700 transition hover:border-teal-500 dark:border-teal-300/30 dark:bg-white/5 dark:text-teal-200"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="open-source" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Open Source"
              title="Contributions to React and security tooling"
              description="Bugs I reproduced, fixed with failing-first tests, and got merged by core maintainers."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {openSource.map((item) => (
                <article key={item.project} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-100 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                      <Github className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.project}</h3>
                  </div>
                  <p className="leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {item.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:underline dark:text-teal-200"
                        >
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-automation" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">Applied AI & Automation</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white md:text-5xl">Building toward intelligent, automated workflows.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                My AI focus is practical: connecting modern AI capabilities to software systems that help teams reduce
                repetitive work, process information faster, and make better operational decisions.
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-100 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                  <Bot className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">AI-ready engineering areas</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">LLMs, automation, APIs, data, assistants</p>
                </div>
              </div>
              <ul className="space-y-4">
                {automationItems.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-[#0d141b] sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Education" title="Academic foundation" />
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.degree} className="rounded-md border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                    <GraduationCap className="mb-4 h-6 w-6 text-teal-600 dark:text-teal-300" />
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.degree}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">{item.school}</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Achievements" title="Professional signals" />
              <div className="rounded-md border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                <ul className="space-y-4">
                  {achievements.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 rounded-md bg-white p-4 dark:bg-[#0d141b]">
                  <Languages className="h-5 w-5 text-teal-600 dark:text-teal-300" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">Languages: Arabic, French, English</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-md bg-slate-950 p-6 text-white dark:bg-white dark:text-slate-950 md:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300 dark:text-teal-700">Contact</p>
                  <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Let’s build something useful.</h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300 dark:text-slate-600">
                    Open to remote full-stack roles and freelance missions (GMT, full overlap with Europe). Laravel,
                    React / Next.js, PostgreSQL and LLM integration.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {contactLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="rounded-md border border-white/10 bg-white/5 p-4 transition hover:border-teal-300 hover:bg-white/10 dark:border-slate-200 dark:bg-slate-50 dark:hover:border-teal-600"
                      >
                        <Icon className="mb-4 h-5 w-5 text-teal-300 dark:text-teal-700" />
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="mt-1 break-words text-sm text-slate-300 dark:text-slate-600">{item.value}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
