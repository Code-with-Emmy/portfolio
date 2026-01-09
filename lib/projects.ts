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
  // ...existing projects...
  {
    id: 4,
    slug: "Aierth Technology",
    title: "Aierth Technology",
    category: "Web Application",
    shortDescription:
      "Aierth Technology is a cutting-edge platform that leverages artificial intelligence to provide innovative solutions for businesses. and EduTech sector.",
    description: [
      "Aierth Technology is designed to revolutionize the way businesses and educational institutions operate by integrating advanced AI capabilities into their workflows. The platform offers a suite of tools that enhance productivity, streamline operations, and foster innovation.",
    ],
    features: ["EdTech", "LMS", "Student Management System"],
    technologies: [
      "Typescript",
      "React",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
    ],
    coverImage: "/aierth.png",
    thumbnailImage: "/aierth.dashboard.png",
    gallery: [{ url: "/aierth.dashboard.png", caption: "LMS Dashboard" }],
    timeline: "Duration (3 months, 2025)",
    role: "Your Role (Full Stack Developer)",
    liveUrl: "https://aierth.com",
    githubUrl: "https://github.com/code-with-emmy/aierth-technology",
    relatedProjects: [],
  },
  // {
  //   id: 2,
  //   slug: "finance-dashboard",
  //   title: "Finance Dashboard",
  //   category: "Web Application",
  //   shortDescription:
  //     "A comprehensive financial management dashboard for tracking investments, expenses, and financial goals.",
  //   description: [
  //     "The Finance Dashboard is a powerful web application designed to help users manage their personal finances in one centralized location. It provides real-time insights into spending patterns, investment performance, and progress toward financial goals.",
  //     "The dashboard features interactive charts and visualizations that make complex financial data easy to understand at a glance. Users can connect multiple accounts, categorize transactions automatically, and receive personalized recommendations to improve their financial health.",
  //     "The application was designed with a focus on security, using bank-level encryption and authentication protocols to protect sensitive financial information.",
  //   ],
  //   features: [
  //     "Account aggregation from multiple financial institutions",
  //     "Automated transaction categorization and tagging",
  //     "Budget creation and expense tracking",
  //     "Investment portfolio analysis and performance metrics",
  //     "Goal setting with progress tracking",
  //     "Customizable reports and data exports",
  //     "Financial insights and recommendations",
  //   ],
  //   technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Plaid API", "PostgreSQL", "Vercel"],
  //   coverImage: "/finance-dashboard-cover.png",
  //   thumbnailImage: "/modern-finance-overview.png",
  //   gallery: [
  //     { url: "/finance-dashboard-screen1.png", caption: "Main Dashboard Overview" },
  //     { url: "/finance-dashboard-screen2.png", caption: "Expense Analysis" },
  //     { url: "/finance-dashboard-screen3.png", caption: "Investment Portfolio" },
  //     { url: "/finance-dashboard-screen4.png", caption: "Financial Goals Tracker" },
  //   ],
  //   timeline: "4 months (Q3-Q4 2022)",
  //   role: "UX/UI Designer & Frontend Developer",
  //   liveUrl: "https://example.com/finance-dashboard",
  //   githubUrl: "https://github.com/example/finance-dashboard",
  //   relatedProjects: [
  //     {
  //       slug: "job-finder-app",
  //       title: "Job Finder App",
  //       category: "Mobile App",
  //       image: "/modern-finance-app.png",
  //     },
  //     {
  //       slug: "ecommerce-redesign",
  //       title: "E-Commerce Redesign",
  //       category: "UX Case Study",
  //       image: "/modern-apparel-storefront.png",
  //     },
  //   ],
  // },
];

export { projects };

// Add these functions after the projects array export

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
    // If no related projects defined, return random projects
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
