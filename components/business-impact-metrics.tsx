"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle, TrendingUp, Calendar } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { cn } from "@/lib/utils";

const metrics = [
  {
    label: "Projects Delivered",
    value: "25+",
    subLabel: "Across 3+ continents",
    icon: CheckCircle,
    color: "text-green-400",
  },
  {
    label: "Total Clients",
    value: "15+",
    subLabel: "Globally recognized",
    icon: Users,
    color: "text-blue-400",
  },
  {
    label: "Client Retention",
    value: "100%",
    subLabel: "Built on long-term trust",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
  {
    label: "Years Experience",
    value: "5+",
    subLabel: "Building digital products",
    icon: Calendar,
    color: "text-purple-400",
  }
]

export function BusinessImpactMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {metrics.map((metric, index) => (
        <AnimatedSection key={index} animation="zoom-in" delay={index * 100}>
          <Card className="bg-zinc-900/40 border-zinc-800/50 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-4 text-center relative z-10">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 bg-zinc-800/50 group-hover:scale-110 transition-transform duration-500",
                  metric.color,
                )}
              >
                <metric.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tighter group-hover:text-cyan-400 transition-colors duration-300">
                {metric.value}
              </div>
              <div className="text-[11px] font-semibold text-zinc-400 mb-1 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
                {metric.subLabel}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
