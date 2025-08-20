import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-6 bg-card rounded-lg border transition-all duration-500 hover:-translate-y-3 hover:border-primary hover:shadow-xl hover:shadow-primary/10 glass backdrop-blur-sm">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
