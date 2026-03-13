export interface ProjectGalleryImage {
  url: string;
  caption?: string;
}

export interface RelatedProject {
  slug: string;
  title: string;
  category: string;
  image: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string[];
  features: string[];
  technologies: string[];
  coverImage: string;
  thumbnailImage: string;
  gallery?: ProjectGalleryImage[];
  client?: string;
  timeline: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  relatedProjects?: RelatedProject[];
}

const projects: Project[] = [
  {
    id: 1,
    slug: "aierth-tech",
    title: "Aierth Tech",
    category: "EdTech Platform",
    shortDescription:
      "A modern learning platform for course discovery, enrollment, and student engagement.",
    description: [
      "Aierth Tech is a learning platform built to help students discover programs, enroll with ease, and stay connected to their learning journey through a polished digital experience.",
      "The platform combines strong brand presentation with practical student workflows, including program browsing, onboarding, and dashboard-based access to learning resources.",
    ],
    features: [
      "Program and course discovery flows",
      "Enrollment and sign-in experience",
      "Student dashboard experience",
      "Responsive landing pages for education services",
      "Clear information architecture for learners",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
    ],
    coverImage: "/aierth-tech.png",
    thumbnailImage: "/aierth-tech.png",
    gallery: [
      { url: "/aierth-tech.png", caption: "Aierth Tech landing page" },
      { url: "/aierth.dashbord.png", caption: "Aierth Tech dashboard" },
    ],
    client: "Aierth",
    timeline: "2025",
    role: "Full Stack Developer",
    liveUrl: "https://aierth.com",
    githubUrl: "https://github.com/code-with-emmy/aierth-technology",
    relatedProjects: [
      {
        slug: "pulsepitchlive",
        title: "PulsePitch Live",
        category: "Sports Streaming Platform",
        image: "/pulsepitlive.png",
      },
      {
        slug: "attendance-kiosk",
        title: "Attendance Kiosk",
        category: "Biometric Attendance System",
        image: "/attendance.png",
      },
    ],
  },
  {
    id: 2,
    slug: "pulsepitchlive",
    title: "PulsePitch Live",
    category: "Sports Streaming Platform",
    shortDescription:
      "A live football streaming and score-tracking platform built for fast match discovery and viewing.",
    description: [
      "PulsePitch Live brings match discovery, live scores, and streaming access into one focused interface for football fans.",
      "The experience is organized around leagues, match status filters, and featured live events, making it easy for users to find ongoing games and jump straight into the action.",
    ],
    features: [
      "Live, upcoming, and finished match filters",
      "League-based navigation",
      "Featured live match spotlight",
      "Date and sport filtering",
      "Dark-mode sports dashboard interface",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sports Data APIs",
    ],
    coverImage: "/pulsepitlive.png",
    thumbnailImage: "/pulsepitlive.png",
    gallery: [{ url: "/pulsepitlive.png", caption: "PulsePitch Live dashboard" }],
    client: "PulsePitch Live",
    timeline: "2026",
    role: "Frontend Developer",
    liveUrl: "https://pulsepitchlive.vercel.app",
    relatedProjects: [
      {
        slug: "aierth-tech",
        title: "Aierth Tech",
        category: "EdTech Platform",
        image: "/aierth-tech.png",
      },
      {
        slug: "attendance-kiosk",
        title: "Attendance Kiosk",
        category: "Biometric Attendance System",
        image: "/attendance.png",
      },
    ],
  },
  {
    id: 3,
    slug: "attendance-kiosk",
    title: "Attendance Kiosk",
    category: "Biometric Attendance System",
    shortDescription:
      "A face-verification attendance product for modern workplaces with secure check-ins and real-time reporting.",
    description: [
      "Attendance Kiosk is a biometric attendance solution designed for workplaces that need reliable staff check-ins without slow manual processes.",
      "The product focuses on face verification, liveness detection, real-time attendance logs, and admin-friendly reporting for operational visibility.",
    ],
    features: [
      "Facial recognition attendance check-in",
      "Liveness verification for secure sign-ins",
      "Real-time attendance logging",
      "Admin access for monitoring activity",
      "Reporting designed for operational and payroll workflows",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Biometric Verification",
    ],
    coverImage: "/attendance.png",
    thumbnailImage: "/attendance.png",
    gallery: [{ url: "/attendance.png", caption: "Attendance Kiosk landing page" }],
    client: "Attendance Kiosk",
    timeline: "2026",
    role: "Frontend Developer",
    liveUrl: "https://attendancekiosk.vercel.app",
    relatedProjects: [
      {
        slug: "aierth-tech",
        title: "Aierth Tech",
        category: "EdTech Platform",
        image: "/aierth-tech.png",
      },
      {
        slug: "pulsepitchlive",
        title: "PulsePitch Live",
        category: "Sports Streaming Platform",
        image: "/pulsepitlive.png",
      },
    ],
  },
];

export { projects };

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(
  currentSlug: string,
  limit = 2
): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject || !currentProject.relatedProjects) {
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }));
  }

  return currentProject.relatedProjects.slice(0, limit);
}
