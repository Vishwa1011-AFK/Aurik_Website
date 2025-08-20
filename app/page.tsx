"use client"

import { useEffect } from "react"
import {
  Code,
  Brain,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SubtleTextReveal } from "@/components/subtle-text-reveal"
import { ProfessionalBackground } from "@/components/professional-background"
import { FadeInText } from "@/components/fade-in-text"
import Image from "next/image"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Initialize theme on page load
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = stored === "dark" || (!stored && prefersDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <ProfessionalBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/95 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
              <Image src="/aurik-logo.png" alt="Aurik Logo" width={28} height={28} className="w-7 h-7" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Aurik
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <MobileMenu onNavigate={scrollToSection} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <SubtleTextReveal text="Smart Solutions That Drive Success" className="text-foreground drop-shadow-sm" />
            </h1>

            <div className="text-xl lg:text-2xl font-medium mb-12 text-muted-foreground min-h-[1.5em]">
              <FadeInText
                texts={[
                  "Enterprise Technology Excellence",
                  "Innovation That Delivers Results",
                  "Transforming Business Through Technology",
                  "Your Strategic Technology Partner",
                ]}
                interval={4000}
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <SubtleTextReveal
              text="We engineer intelligent systems and scalable solutions that accelerate your business growth and competitive advantage."
              className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              delay={500}
            />
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary/25 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-2 border-primary/20 hover:border-primary/40 text-foreground hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Services
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={800}>
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies nationwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-muted-foreground">500+</div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-2xl font-bold text-muted-foreground">93.4%</div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 relative z-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <SubtleTextReveal
                text="Comprehensive Technology Solutions"
                className="text-4xl lg:text-5xl font-bold mb-6"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From strategic consulting to full-scale implementation, we deliver end-to-end technology solutions that
                drive measurable business outcomes.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation delay={100}>
              <ServiceCard
                icon={Code}
                title="Enterprise Software Development"
                description="Mission-critical applications built with enterprise-grade architecture, security, and scalability to support your business operations."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <ServiceCard
                icon={Brain}
                title="AI & Machine Learning Solutions"
                description="Intelligent automation and predictive analytics that transform your data into strategic insights and competitive advantages."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <ServiceCard
                icon={Cloud}
                title="Cloud & Data Engineering"
                description="Scalable cloud infrastructure and robust data pipelines designed for enterprise performance, security, and compliance."
              />
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Solutions?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Enterprise-Ready</h4>
                    <p className="text-sm text-muted-foreground">
                      Built for scale with enterprise security and compliance standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Proven Methodology</h4>
                    <p className="text-sm text-muted-foreground">
                      Agile development with continuous integration and deployment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Dedicated support team ensuring optimal system performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/modern-tech-team.png"
                    alt="Aurik team working on technology solutions"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-sm border border-border shadow-xl text-foreground p-6 rounded-xl max-w-sm">
                  <p className="text-sm font-medium mb-2">
                    "Aurik transformed our operations with intelligent automation that scales with our growth."
                  </p>
                  <p className="text-xs text-muted-foreground">— Technology Partner</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">Engineering Excellence</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We combine deep technical expertise with strategic business insight to deliver solutions that don't
                  just meet requirements—they exceed expectations and drive transformational results.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Enterprise Security & Compliance</h3>
                      <p className="text-muted-foreground">
                        SOC 2, GDPR, and industry-specific compliance with zero-trust security architecture and
                        end-to-end encryption.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Scalable & Future-Proof</h3>
                      <p className="text-muted-foreground">
                        Microservices architecture and cloud-native design that adapts to your growth and evolving
                        technology landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Build the Future Together</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with intelligent technology solutions? Our team of experts is here to
                discuss your vision and create a roadmap for success.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-md flex items-center justify-center">
                  <Image src="/aurik-logo.png" alt="Aurik Logo" width={24} height={24} className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">Aurik</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Smart solutions that drive success through innovative technology and intelligent systems.
              </p>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Services</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Solutions
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Data Analytics
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cloud Engineering
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Custom Development
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Consulting
                </a>
              </div>
            </div>

            {/* Connect Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href="mailto:hello@aurik.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    aurik.global@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 94269 99629
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Ahmedabad, Gujrat</span>
                </div>
              </div>

              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/aurik-innovation/"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest insights on technology trends and innovations.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2024 Aurik Innovations. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
