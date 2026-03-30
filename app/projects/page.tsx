"use client"

import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { getAllProjects } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { GlobeIcon } from "lucide-react"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      <PortfolioHeader />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <AnimatedSection animation="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Selected Works
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent projects, case studies, and technical experiments. Exploring the boundaries of web and mobile possibilities.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm shadow-xl shadow-cyan-900/10">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <AnimatedSection
                    key={project.id}
                    animation="zoom-in"
                    delay={50 * (index + 1)}
                  >
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      image={project.thumbnailImage}
                      slug={project.slug}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      <EnhancedScrollIndicator />
    </main>
  )
}
