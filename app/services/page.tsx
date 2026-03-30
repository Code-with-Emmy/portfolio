"use client"

import { ServicesSection } from "@/components/services-section"
import { BusinessImpactMetrics } from "@/components/business-impact-metrics"
import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket, ShieldCheck, Zap, Users } from "lucide-react"

export default function ServicesPage() {
  const handleBookConsultation = () => {
    window.open("https://wa.me/2347070682621", "_blank");
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      <PortfolioHeader />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <AnimatedSection animation="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Professional & Tech Solutions
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg italic">
            "I don’t just build apps—I solve business problems through technology."
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           {/* Sidebar Impact Area */}
           <div className="lg:col-span-1 space-y-6">
              <AnimatedSection animation="zoom-in">
                 <BusinessImpactMetrics />
              </AnimatedSection>
              <Card className="bg-zinc-900/60 border-zinc-800 p-6 text-center">
                 <h3 className="text-xl font-bold mb-3 text-cyan-400">Ready to build?</h3>
                 <p className="text-sm text-zinc-400 mb-6">Let's discuss how we can scale your product together.</p>
                 <Button onClick={handleBookConsultation} className="w-full bg-cyan-500 hover:bg-cyan-600 font-bold text-black h-12">
                    Book a Free Consultation
                 </Button>
              </Card>
           </div>

           {/* Services List Area */}
           <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up">
                 <Card className="bg-zinc-900/70 border-zinc-800 p-8 backdrop-blur-sm">
                    <ServicesSection onStartProject={handleBookConsultation} />
                 </Card>
              </AnimatedSection>
           </div>
        </div>

        {/* Core Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
           {[
              { title: "Velocity", desc: "Fast-paced delivery without compromising on quality.", icon: Zap },
              { title: "Scalability", desc: "Architected to handle massive growth from day one.", icon: Rocket },
              { title: "Security", desc: "Best-in-class security patterns and data protection.", icon: ShieldCheck },
              { title: "UX-Focused", desc: "Obsessed with creating intuitive user experiences.", icon: Users },
           ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                 <Card className="bg-zinc-900/50 border-zinc-800 p-6 text-center hover:bg-zinc-900/80 transition-all border-b-2 border-b-transparent hover:border-b-cyan-400">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center mx-auto mb-4">
                       <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                 </Card>
              </AnimatedSection>
           ))}
        </div>
      </div>

      <EnhancedScrollIndicator />
    </main>
  )
}
