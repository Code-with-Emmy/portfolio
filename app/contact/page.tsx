"use client"

import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPersonalInfo } from "@/lib/data"
import { MessageCircle, Mail, MapPin, Loader2 } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const personalInfo = getPersonalInfo()
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleWhatsApp = () => {
    window.open(`https://wa.me/2347070682621?text=Hi Emmy, I'm reaching out about...`, "_blank");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
       alert("Message sent successfully! (Demo)")
       setLoading(false)
       setFormData({ name: "", email: "", projectType: "", message: "" })
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      <PortfolioHeader />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <AnimatedSection animation="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Let's Start a Conversation
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg italic">
            "I'm currently available for full-time roles, contract work, and creative collaborations."
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
           {/* Contact Info Sidebar */}
           <div className="space-y-6">
              <AnimatedSection animation="slide-right">
                 <Card className="bg-zinc-900 shadow-xl border-zinc-800 p-8 flex items-start gap-6 group hover:border-cyan-500/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center shrink-0">
                       <Mail className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-1">Email Me Directly</h3>
                       <p className="text-zinc-400 text-sm mb-4">Expect a response within 24 hours.</p>
                       <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:text-cyan-300 font-bold underline">
                          {personalInfo.email}
                       </a>
                    </div>
                 </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={100}>
                 <Card className="bg-zinc-900 shadow-xl border-zinc-800 p-8 flex items-start gap-6 group hover:border-green-500/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-green-400/10 flex items-center justify-center shrink-0">
                       <MessageCircle className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-1 text-green-400">WhatsApp Live Chat</h3>
                       <p className="text-zinc-400 text-sm mb-4">Fastest response for urgent projects.</p>
                       <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 font-bold text-black h-12 uppercase tracking-wide">
                          Start Chat Now
                       </Button>
                    </div>
                 </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={200}>
                 <div className="flex items-center gap-3 p-6 text-zinc-500">
                    <MapPin className="w-5 h-5 text-zinc-600" />
                    <span>Current Location: {personalInfo.location}</span>
                 </div>
              </AnimatedSection>
           </div>

           {/* Contact Form */}
           <AnimatedSection animation="fade-up">
              <Card className="bg-zinc-900/40 border-zinc-800 p-8 shadow-2xl backdrop-blur-sm">
                 <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                 <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <label className="text-xs uppercase text-zinc-500 font-bold px-1">Full Name</label>
                          <input 
                             type="text" 
                             className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-cyan-400 transition-all outline-none"
                             value={formData.name}
                             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                             required
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs uppercase text-zinc-500 font-bold px-1">Email Address</label>
                          <input 
                              type="email" 
                              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-cyan-400 transition-all outline-none"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase text-zinc-500 font-bold px-1">Project Type</label>
                        <select 
                           className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-cyan-400 transition-all outline-none"
                           value={formData.projectType}
                           onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                           required
                        >
                           <option value="">Select Project Type</option>
                           <option value="web">Web Application</option>
                           <option value="mobile">Mobile App</option>
                           <option value="design">UI/UX Design</option>
                           <option value="consultation">Consultation</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase text-zinc-500 font-bold px-1">Message Detail</label>
                        <textarea 
                           className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-white h-32 focus:border-cyan-400 transition-all outline-none"
                           value={formData.message}
                           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                           required
                        ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 font-bold text-black h-12 uppercase tracking-widest text-sm" disabled={loading}>
                       {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Initiate Connection"}
                    </Button>
                 </form>
              </Card>
           </AnimatedSection>
        </div>
      </div>

      <EnhancedScrollIndicator />
    </main>
  )
}
