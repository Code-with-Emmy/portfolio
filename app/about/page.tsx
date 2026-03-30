"use client"

import { EnhancedProfile } from "@/components/enhanced-profile"
import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { CredentialsSection } from "@/components/credentials-section"
import { Card, CardContent } from "@/components/ui/card"
import { getPersonalInfo, getAboutInfo, getExperienceInfo, getTechnicalSkillsInfo } from "@/lib/data"
import { UserIcon, BriefcaseIcon, CodeIcon } from "lucide-react"

export default function AboutPage() {
  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      <PortfolioHeader />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="md:sticky md:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          {/* Main Info */}
          <div className="md:col-span-2 space-y-12">
            <AnimatedSection animation="fade-up">
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Behind the Code
              </h1>
              <Card className="bg-zinc-900/70 border-zinc-800 p-6 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-zinc-300">
                  {aboutInfo.bio}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {aboutInfo.focus.map((focus: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-zinc-400 text-sm">{focus}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            {/* Core Values / Philosophy */}
            <AnimatedSection animation="fade-up" delay={100}>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {aboutInfo.interests.map((interest: string, index: number) => (
                    <Card key={index} className="bg-zinc-900/50 border-zinc-800 p-4 text-center hover:border-cyan-500/30 transition-all">
                       <h4 className="text-cyan-400 font-bold mb-1">{interest}</h4>
                       <p className="text-xs text-zinc-500">Dedicated Focus</p>
                    </Card>
                  ))}
               </div>
            </AnimatedSection>

            {/* Experience / History */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex items-center mb-6">
                <BriefcaseIcon className="w-6 h-6 mr-3 text-cyan-400" />
                <h2 className="text-2xl font-bold">The Journey</h2>
              </div>
              <div className="space-y-4">
                 {experienceInfo.map((exp: any, index: number) => (
                    <Card key={index} className="bg-zinc-900/40 border-zinc-800 p-6">
                       <div className="flex justify-between items-start mb-2">
                          <div>
                             <h3 className="text-lg font-bold">{exp.title}</h3>
                             <p className="text-cyan-400 text-sm">{exp.company}</p>
                          </div>
                          <span className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-500">{exp.period}</span>
                       </div>
                       <p className="text-sm text-zinc-400">{exp.description}</p>
                    </Card>
                 ))}
              </div>
            </AnimatedSection>

            {/* Credentials / Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedSection animation="fade-up" delay={300}>
                 <CredentialsSection />
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={400}>
                 <Card className="bg-zinc-900/70 border-zinc-800 h-full p-6">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                       <CodeIcon className="w-5 h-5 text-cyan-400" />
                       Expert Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {technicalSkills.development.map((skill: string, index: number) => (
                          <div key={index} className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-semibold text-zinc-300">
                             {skill}
                          </div>
                       ))}
                    </div>
                 </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      <EnhancedScrollIndicator />
    </main>
  )
}
