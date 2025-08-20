"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  onNavigate: (section: string) => void
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9">
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            <button
              onClick={() => handleNavigate("services")}
              className="text-left px-3 py-2 rounded-md hover:bg-lime-500/10 hover:text-lime-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigate("about")}
              className="text-left px-3 py-2 rounded-md hover:bg-lime-500/10 hover:text-lime-500 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigate("contact")}
              className="text-left px-3 py-2 rounded-md hover:bg-lime-500/10 hover:text-lime-500 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}
