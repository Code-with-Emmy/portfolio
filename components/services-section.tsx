"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Smartphone, Layout, Rocket, ArrowRight, Search, FileCode, CheckCircle2, CloudUpload } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger, 
  DialogDescription 
} from "@/components/ui/dialog"

const services = [
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with Next.js and React. Optimized for speed, SEO, and conversions.",
    icon: Monitor,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    title: "Mobile App Development",
    description: "Native-quality cross-platform mobile apps for iOS and Android. Seamless performance and intuitive user experiences.",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that doesn't just look good, but works. From wireframes to pixel-perfect interactive prototypes.",
    icon: Layout,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Technical Strategy",
    description: "Strategic advice on technology stacks, architecture, and scaling. Helping you make the right technical decisions.",
    icon: Rocket,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
]

const workProcess = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your business goals, user needs, and project requirements.",
    icon: Search,
    color: "text-blue-400"
  },
  {
    step: "02",
    title: "Strategy & Design",
    description: "Architecting the technical stack and creating user-centric UI/UX prototypes.",
    icon: Layout,
    color: "text-purple-400"
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution with clean, maintainable code and regular updates.",
    icon: FileCode,
    color: "text-cyan-400"
  },
  {
    step: "04",
    title: "QA & Testing",
    description: "Ensuring zero bugs, high performance, and cross-device compatibility.",
    icon: CheckCircle2,
    color: "text-green-400"
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "Deploying to production and providing ongoing technical maintenance.",
    icon: CloudUpload,
    color: "text-orange-400"
  }
]

interface ServicesSectionProps {
  onStartProject?: () => void
}

export function ServicesSection({ onStartProject }: ServicesSectionProps) {
  return (
    <div className="space-y-6" id="services">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center">
          <span className="w-8 h-1 bg-cyan-400 mr-3 rounded-full"></span>
          Services & Expert Solutions
        </h3>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300 gap-1 transition-all hover:bg-cyan-400/10">
              View Process <ArrowRight className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-zinc-900 border-zinc-800 text-white max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <Rocket className="text-cyan-400 w-6 h-6" />
                My Proven Workflow
              </DialogTitle>
              <DialogDescription className="text-zinc-400">
                How I turn your vision into a high-impact digital reality.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 space-y-6">
              {workProcess.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center shrink-0 font-bold text-sm",
                      "group-hover:border-cyan-400 transition-colors duration-300",
                      item.color
                    )}>
                      {item.step}
                    </div>
                    {index !== workProcess.length - 1 && (
                      <div className="w-0.5 h-full bg-zinc-800 mt-2"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className={cn("w-4 h-4", item.color)} />
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <Button 
                onClick={onStartProject}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold h-12"
              >
                Start Your Project (via WhatsApp)
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/30 transition-all duration-300 group h-full">
              <CardContent className="p-6">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110", service.bg)}>
                  <service.icon className={cn("w-6 h-6", service.color)} />
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}