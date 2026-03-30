"use client"

import type React from "react"
import Link from "next/link"
import { GlobeIcon, CodeIcon, BriefcaseIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { ExperienceCard } from "@/components/experience-card"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { CredentialsSection } from "@/components/credentials-section"
import { PortfolioHeader } from "@/components/portfolio-header";
import { getExperienceInfo, getTechnicalSkillsInfo, getAllProjects, getPersonalInfo } from "@/lib/data"
import { ServicesSection } from "@/components/services-section"
import { BusinessImpactMetrics } from "@/components/business-impact-metrics"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const SkillTagComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-2 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-400">{children}</div>
}

export default function Home() {
  const projects = getAllProjects()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()
  const personalInfo = getPersonalInfo()

  const handleBookConsultation = () => {
    const whatsappLink = personalInfo.social.find(
      (s: any) => s.platform === "WhatsApp",
    )?.url;
    if (whatsappLink) {
      window.open(whatsappLink, "_blank");
    } else {
      // Fallback to email if WhatsApp link not found
      const subject = encodeURIComponent("Project Consultation Inquiry");
      const body = encodeURIComponent(
        "Hi Emmy,\n\nI'm interested in discussing a potential project with you. Specifically regarding...",
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }
  }

  const handleSendMessage = () => {
    const whatsappLink = personalInfo.social.find(
      (s: any) => s.platform === "WhatsApp",
    )?.url;
    if (whatsappLink) {
      window.open(whatsappLink, "_blank");
    } else {
      window.location.href = `mailto:${personalInfo.email}?subject=Message from Portfolio`;
    }
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Enhanced Profile Section */}
          <div className="md:sticky md:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-8 sm:space-y-12">
            {/* Hero Impact Metrics */}
            <BusinessImpactMetrics />

            {/* Services Section - Client Focused */}
            <AnimatedSection animation="fade-up" id="services">
              <ServicesSection onStartProject={handleBookConsultation} />
            </AnimatedSection>

            {/* Experience Section - Expanded */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm shadow-xl shadow-cyan-900/10 hover:border-cyan-500/20 transition-colors">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-6">
                    <BriefcaseIcon className="w-5 h-5 mr-3 text-cyan-400" />
                    <h2 className="text-xl font-semibold">
                      Strategic Experience
                    </h2>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {experienceInfo.map((experience: any, index: number) => (
                      <AnimatedSection
                        key={index}
                        animation="fade-up"
                        delay={50 * (index + 1)}
                      >
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection
              animation="fade-up"
              id="projects"
              className="scroll-mt-24"
            >
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm hover:border-cyan-500/20 transition-colors">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                      <h3 className="text-lg font-medium italic">
                        Case Studies & Recent Work
                      </h3>
                    </div>
                    <Link href="#projects">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm px-2 sm:px-3 text-cyan-400 border-cyan-400/20 hover:bg-cyan-400/10 transition-colors"
                      >
                        Portfolio
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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

            {/* Skills & Credentials */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AnimatedSection animation="fade-up" id="skills">
                <Card className="bg-zinc-900/70 border-zinc-800 h-full hover:border-cyan-500/20 transition-colors">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      <CodeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                      <h3 className="text-lg font-medium">Core Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.development.map(
                        (skill: string, index: number) => (
                          <SkillTagComponent key={index}>
                            {skill}
                          </SkillTagComponent>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" id="credentials">
                <CredentialsSection />
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <AnimatedSection animation="fade-up" className="mt-12">
          <Card className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/20 p-8 text-center backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
              I'm currently available for new projects. Let's discuss how I can
              help bring your digital vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={handleBookConsultation}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12 px-8 transition-transform hover:scale-105"
              >
                Book a Free Consultation
              </Button>
              <Button
                onClick={handleSendMessage}
                variant="outline"
                className="border-white/20 hover:bg-white/10 h-12 px-8 transition-transform hover:scale-105"
              >
                Send a Message
              </Button>
            </div>
          </Card>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-16 py-8 text-center border-t border-zinc-800"
        >
          <p className="text-sm text-zinc-500 italic pb-2">"Building Excellence in every pixel."</p>
          <p className="text-xs text-zinc-600 mt-2">
            © {new Date().getFullYear()} Emmy | All Rights Reserved.
          </p>
        </AnimatedSection>
      </div>

      <FloatingWhatsApp />
      <EnhancedScrollIndicator />
    </main>
  );
}

