"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle, TrendingUp, Calendar } from "lucide-react"
import { AnimatedSection } from "./animated-section"

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
          <Card className="bg-zinc-900/40 border-zinc-800 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <metric.icon className={`w-5 h-5 mx-auto mb-3 ${metric.color}`} />
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs font-medium text-zinc-300 mb-1">{metric.label}</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{metric.subLabel}</div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  )
}
