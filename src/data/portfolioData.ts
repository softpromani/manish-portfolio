export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: "Enterprise QA & Testing" | "AI & Computer Vision" | "High-Concurrency SaaS" | "Gov & Public Sector" | "Logistics & IoT";
  image: string;
  techStack: string[];
  keyImpact: string;
  highlights: string[];
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; desc?: string }[];
}

export const RESUME_DATA = {
  personal: {
    name: "Manish Kumar",
    title: "Senior Engineering Lead | Microservices & Distributed Systems Architect",
    subtitle: "Full-Stack & QA Automation Specialist with 6+ years of experience architecting, deploying, and scaling 35+ end-to-end commercial applications.",
    location: "Lucknow, UP, India",
    phone1: "+91 7071900282",
    phone2: "+91 7309055631",
    email: "softpromani@gmail.com",
    linkedin: "https://www.linkedin.com/in/manish-kumar-b1574a388/",
    avatar: "/manish-kumar.jpg",
    secondaryPhoto: "/manish-kumar.jpg",
    stats: [
      { label: "Production Deployments", value: "35+" },
      { label: "Years of Experience", value: "6+" },
      { label: "Active Users Scaled", value: "100K+" },
      { label: "Avg API Response Time", value: "29ms" },
    ],
    summary:
      "High-impact Senior Engineering Lead and Enterprise Systems Architect with 6+ years of experience architecting, deploying, and scaling 35+ end-to-end commercial applications from scratch to cloud production environments. Specialist in high-concurrency microservices architectures, distributed database integrity monitoring, dynamic Figma-to-Code verification tools, automated QA frameworks, and AI-driven workflow engines leveraging PHP 8.4 (Laravel 10+), Python, Node.js, Vue.js, MySQL, MongoDB, and Redis. Demonstrated track record in managing engineering teams, executing DevOps/CI/CD pipelines, and integrating LLM/Agentic AI systems.",
  },

  skillsMatrix: [
    {
      title: "Core Backend & Languages",
      description: "Scalable backend services, runtime engines, and language runtimes",
      skills: [
        { name: "PHP 8.4 (Laravel 10+)", level: "Expert", desc: "Microservices, Runtime CRUD engines, OPcache & JIT" },
        { name: "Python", level: "Advanced", desc: "Computer vision (OpenCV/ANPR), automation scripts, ETL" },
        { name: "Node.js & JavaScript (ES6+)", level: "Advanced", desc: "WebSocket telemetry, real-time messaging, asynchronous pipelines" },
        { name: "SQL & NoSQL", level: "Expert", desc: "Complex indexing, sharding, distributed transactions" },
        { name: "REST & GraphQL APIs", level: "Expert", desc: "OpenAPI/Swagger specs, runtime generators" },
      ],
    },
    {
      title: "Databases & Data Integrity",
      description: "High-throughput data storage, caching, and auto-correcting consistency workers",
      skills: [
        { name: "MySQL", level: "Expert", desc: "Composite indexing, query optimization, sharding" },
        { name: "MongoDB", level: "Advanced", desc: "Dynamic schemas, required fields validation, aggregation" },
        { name: "Redis", level: "Expert", desc: "Pub/Sub caching, rate limiting, low-latency queues" },
        { name: "PostgreSQL", level: "Advanced", desc: "Relational integrity, schema validation, JSONB" },
        { name: "Redundancy Monitoring", level: "Architect", desc: "Master/secondary contradiction auto-healing" },
      ],
    },
    {
      title: "Automated Testing & QA Orchestration",
      description: "Automated verification pipelines, latency testers, and design-to-code synchronizers",
      skills: [
        { name: "Figma REST API Verification", level: "Specialist", desc: "Figma frame & element synchronization validation" },
        { name: "API Load & Latency Testing", level: "Expert", desc: "Primary/secondary real-time latency benchmark (29ms avg)" },
        { name: "Dynamic Payload Validation", level: "Expert", desc: "No-code entity payload checking & automated patching" },
        { name: "Polymorphic Enum V8 Inspector", level: "Specialist", desc: "Type schema validation & metadata mismatch guards" },
      ],
    },
    {
      title: "Cloud, DevOps & Microservices",
      description: "Production containerization, cloud infrastructure, and CI/CD pipelines",
      skills: [
        { name: "AWS (EC2, S3, EKS)", level: "Advanced", desc: "Server provisioning, cloud storage, container orchestration" },
        { name: "Docker Multi-Stage Builds", level: "Expert", desc: "Slim production images with OPcache and JIT tuning" },
        { name: "CI/CD Pipelines", level: "Advanced", desc: "Bitbucket Pipelines, GitHub Actions automated deployment" },
        { name: "Linux & Nginx", level: "Expert", desc: "System administration, security hardening, reverse proxies" },
        { name: "Message Queues", level: "Advanced", desc: "RabbitMQ & Redis queue-centric architectures" },
      ],
    },
    {
      title: "Frontend & Reactive Frameworks",
      description: "Modern component-driven web interfaces and dynamic frontends",
      skills: [
        { name: "Vue.js", level: "Advanced", desc: "Reactive state management, component architecture" },
        { name: "Laravel Livewire & Inertia.js", level: "Expert", desc: "Full-stack single-page reactive workflows" },
        { name: "React.js", level: "Proficient", desc: "Modern UI components, Next.js integration" },
        { name: "Tailwind CSS & Bootstrap", level: "Expert", desc: "Clean responsive design systems & accessibility" },
      ],
    },
    {
      title: "AI & Agentic Systems",
      description: "Next-generation developer velocity, LLMs, and workflow automation",
      skills: [
        { name: "Agentic Workflows", level: "Advanced", desc: "Cursor, Claude Code, GitHub Copilot acceleration" },
        { name: "OpenAI API", level: "Advanced", desc: "ChatGPT / DALL-E enterprise integration" },
        { name: "n8n Automation Engine", level: "Advanced", desc: "Autonomous workflow pipelines and webhook hooks" },
        { name: "Prompt Engineering", level: "Advanced", desc: "Precision enterprise prompts and automated triage" },
      ],
    },
  ],

  projects: [
    {
      id: "testingmill",
      title: "TestingMill Automated QA & Integrity Suite",
      client: "Automated Pros (Dubai)",
      tagline: "Enterprise automated testing platform featuring 8 specialized QA modules and real-time self-healing data monitors.",
      category: "Enterprise QA & Testing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      techStack: ["PHP 8.4", "Laravel Microservices", "MongoDB", "MySQL", "Figma REST API", "Redis", "Docker"],
      keyImpact: "Achieved 29ms average API response execution and eliminated master/secondary database contradictions in real-time.",
      highlights: [
        "Architected an 8-module automated QA suite with primary/secondary API load testers.",
        "Engineered Figma frame & element synchronization validator comparing UI designs to live code.",
        "Built automated redundancy monitors that auto-correct database discrepancies across MySQL and MongoDB.",
        "Served dynamic metadata-driven endpoints eliminating boilerplate across 100+ entity types.",
      ],
      liveUrl: "https://dev-testingmill.automatedpros.link",
      featured: true,
    },
    {
      id: "nge-parking",
      title: "AI-Powered Smart Parking & ANPR System",
      client: "Nge Parking",
      tagline: "Intelligent parking automation integrating Computer Vision and Automatic Number Plate Recognition (ANPR).",
      category: "AI & Computer Vision",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80",
      techStack: ["PHP (Laravel)", "Python (OpenCV / ANPR)", "WebSockets", "Flutter APIs", "AWS", "Redis"],
      keyImpact: "Delivered instant vehicle check-in/out across iOS, Android, Guard, and Admin platforms with automated wallet deductions.",
      highlights: [
        "Integrated high-speed camera feeds for real-time license plate recognition.",
        "Engineered low-latency WebSocket streaming for real-time gate barrier triggers.",
        "Architected automated wallet settlement and billing microservices with Redis queues.",
      ],
      liveUrl: "https://ngeparking.com/",
      featured: true,
    },
    {
      id: "itrove-pos-erp",
      title: "Multi-Tenant Cloud POS & Enterprise ERP Engine",
      client: "ITrove",
      tagline: "High-throughput multi-tenant SaaS POS and Enterprise ERP processing 50,000+ daily retail transactions.",
      category: "High-Concurrency SaaS",
      image: "/itrove-pos.jpg",
      techStack: ["PHP 8.4", "Laravel 10+", "Vue.js", "MySQL (Sharding)", "Redis Caching", "ESC/POS Protocols"],
      keyImpact: "Maintained 99.9% uptime while delivering sub-100ms digital and physical receipt generation across multi-warehouse locations.",
      highlights: [
        "Designed sharded database tables with composite indexing to handle peak concurrency.",
        "Implemented real-time multi-warehouse inventory synchronization with Redis caching.",
        "Built hardware printer integration via ESC/POS protocol across 100+ retail stores.",
      ],
      liveUrl: "https://itrovepos.com",
      featured: true,
    },
    {
      id: "lnmu-portal",
      title: "LNMU High-Concurrency University Portal Network",
      client: "L.N. Mithila University",
      tagline: "Public-sector digital infrastructure network serving 100,000+ active students across ERP, exams, and grievance portals.",
      category: "Gov & Public Sector",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      techStack: ["Laravel Microservices", "MySQL", "Redis", "AI Live Proctoring Engine", "Spatie RBAC", "Load Balancers"],
      keyImpact: "Seamlessly scaled during high-traffic examination events serving over 100,000 students simultaneously without downtime.",
      highlights: [
        "Architected student ERP, online examination portal with AI live proctoring, and file tracking.",
        "Implemented high-security Role-Based Access Control (RBAC) across faculty, students, and administration.",
        "Configured Nginx load balancers and database replicas for zero single-point-of-failure.",
      ],
      liveUrl: "https://lnmu.ac.in/",
      featured: true,
    },
    {
      id: "shankhfleet",
      title: "Real-Time Trucking Fleet & Logistics ERP",
      client: "Shankhfleet",
      tagline: "Comprehensive fleet telematics and logistics management platform with real-time GPS tracking and dispatching.",
      category: "Logistics & IoT",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      techStack: ["Laravel", "Node.js (WebSockets / MQTT)", "Python", "MySQL", "Google Maps Telematics API"],
      keyImpact: "Optimized fleet route allocations and enabled automated fuel expense auditing for hundreds of transit vehicles.",
      highlights: [
        "Integrated high-frequency GPS vehicle tracking with real-time map polygon geofencing.",
        "Automated driver scheduling, toll reimbursement verification, and vehicle maintenance triggers.",
        "Handled thousands of daily telematics telemetry packets via Node.js WebSocket streams.",
      ],
      featured: false,
    },
    {
      id: "itrove-school-lms",
      title: "SaaS School & LMS Platform with Multi-Tenant Isolation",
      client: "ITrove School",
      tagline: "Multi-tenant learning management and school operations platform with automated institution onboarding.",
      category: "High-Concurrency SaaS",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      techStack: ["Laravel (Single-DB Multi-Tenancy)", "Vue.js", "Inertia.js", "Payment Webhooks", "AWS S3"],
      keyImpact: "Enabled automated self-service institution onboarding, custom domain mapping, and robust fee collection pipelines.",
      highlights: [
        "Engineered strict tenant data isolation at the database query level.",
        "Automated recurring tuition payment webhooks with automated invoicing.",
        "Integrated role-based permission engines for teachers, parents, and school administrators.",
      ],
      liveUrl: "https://itroveschool.com/",
      featured: true,
    },
  ] as ProjectItem[],

  experiences: [
    {
      period: "Apr 2024 – Present",
      role: "Automated Testing Manager & Senior Software Architect",
      company: "Automated Pros",
      location: "Dubai (Remote)",
      type: "Full-Time Remote",
      description:
        "Leading the architectural design, microservices orchestration, and automated testing engineering across high-throughput QA and data platforms.",
      highlights: [
        "Enterprise Testing Platform (TestingMill): Engineered an 8-module automated QA & data integrity platform executing real-time endpoint latency monitoring (29ms avg), Figma design verification, and automated collection self-healing.",
        "Microservices Architecture: Architected a no-code API automation engine across 3 interconnected Laravel microservices (1,090+ production commits), auto-generating RESTful endpoints directly from DB schemas and Figma assets.",
        "Dual-Database Runtime Engine: Engineered a high-performance runtime CRUD engine operating over MongoDB and MySQL, serving dynamic metadata-driven endpoints and eliminating boilerplate across 100+ entity types.",
        "Automated Data Consistency Monitors: Built continuous background workers detecting and auto-correcting database redundancy contradictions, missing mandatory NoSQL fields, and V8 polymorphic enum metadata mismatches.",
        "Agentic AI & Workflow Integration: Implemented agentic development workflows using Cursor, Claude Code, and n8n pipelines, increasing core engineering throughput and feature deployment velocity by 35%.",
        "Engineering Leadership & DevOps: Directed sprint planning, technical resource allocation, and code reviews while containerizing microservices via Docker multi-stage builds (OPcache + JIT) and Bitbucket CI/CD.",
      ],
      technologies: ["PHP 8.4", "Laravel Microservices", "MongoDB", "MySQL", "Redis", "Figma REST API", "Docker", "Bitbucket CI/CD", "n8n"],
    },
    {
      period: "Sep 2023 – Apr 2024",
      role: "Senior Web Developer & Technical Lead",
      company: "Blattner Tech",
      location: "Nashville, TN (Remote)",
      type: "Full-Time Remote",
      description:
        "Spearheaded backend architecture and custom CMS implementations for enterprise-level clients with strict performance and latency SLAs.",
      highlights: [
        "Enterprise Backend Architecture: Spearheaded backend architecture and custom CMS implementations for enterprise-level clients using Laravel 10 and MySQL.",
        "Performance & Database Optimization: Refactored legacy ORM queries and implemented composite database indexing alongside Redis caching, reducing average API response times by 45% on high-traffic endpoints.",
        "System Reliability & API Ingestion: Engineered queue-centric REST APIs capable of handling thousands of daily webhooks and transactional payloads with strict request validation and error logging.",
      ],
      technologies: ["Laravel 10", "MySQL", "Redis", "REST APIs", "Queue Workers", "Docker", "PHP 8.2"],
    },
    {
      period: "Jan 2022 – Aug 2023",
      role: "Sr. Laravel Developer & Engineering Manager",
      company: "Nawabisouq Pvt Ltd",
      location: "Lucknow, UP, India",
      type: "On-Site",
      description:
        "Managed a team of 5 software engineers delivering high-availability multi-vendor e-commerce platforms and custom CRM software.",
      highlights: [
        "Team Management & System Delivery: Managed a team of 5 software engineers delivering high-availability multi-vendor e-commerce platforms and custom CRM software.",
        "Full-Stack Reactive Applications: Developed dynamic frontends utilizing Laravel Livewire and Vue.js coupled with modular backend APIs.",
        "Cloud Infrastructure & Linux Ops: Managed AWS server provisioning, Linux system administration, security hardening, and database backup routines.",
      ],
      technologies: ["Laravel", "Livewire", "Vue.js", "MySQL", "AWS (EC2, S3)", "Linux (Ubuntu)", "Nginx"],
    },
    {
      period: "Aug 2020 – Jan 2022",
      role: "PHP & Full-Stack Developer",
      company: "Softpro India Computer Technologies Pvt. Ltd",
      location: "Lucknow, UP, India",
      type: "On-Site",
      description:
        "Engineered full-stack web applications translating complex client business requirements into stable, performant software products.",
      highlights: [
        "Full-Stack Application Development: Engineered full-stack applications using PHP Laravel, JavaScript, and MySQL, translating client business requirements into functional software.",
        "Security & Access Control: Implemented Role-Based Access Control (RBAC), custom database migrations, and secure third-party payment gateway integrations.",
      ],
      technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "Bootstrap", "Payment Gateways"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Master of Technology (M.Tech) in Computer Science & Engineering",
      institution: "AIU, Manipur",
      location: "Manipur, India",
      year: "2026",
    },
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      location: "Lucknow, UP, India",
      year: "2024",
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "M.P.P. Gorakhpur",
      location: "Gorakhpur, UP, India",
      year: "2020",
    },
  ] as EducationItem[],
};
