import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Users, FileText, Scale, Shield, CheckCircle } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Employment Documentation",
      description:
        "Preparing contracts, letters of employment, and policy documents including restraint of trade and confidentiality agreements.",
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "CCMA Representation",
      description:
        "Expert representation at CCMA proceedings and bargaining councils including MIBCO, MEIBC and others.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Disciplinary Hearings",
      description:
        "Professional on-site chairing of disciplinary hearings and comprehensive assistance with retrenchments.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Protection",
      description:
        "R15,000 Labour Court coverage per annum and R3,000 to R8,000 contribution towards eviction costs for farmers/landowners.",
    },
  ]

  const features = [
    "After hours advice and support",
    "Access to labour manuals and document templates",
    "Union negotiations on behalf of employers",
    "Strike management and urgent Labour Court interdicts",
    "Regular newsletters on relevant labour issues",
    "UIF and Workman's Compensation registration assistance",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroCarousel />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <img src="/images/skills-pond-logo.png" alt="Skills Pond Consulting Logo" className="h-24 w-auto" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Professional Labour Relations Consulting</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Skills Pond Consulting provides comprehensive labour law services, CCMA representation, and employment
            compliance solutions to protect your business and ensure regulatory adherence.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive labour relations and employment law services designed to protect your business and ensure
              compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Comprehensive Labour Relations Support
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                We provide end-to-end labour relations services to ensure your business stays compliant and protected in
                all employment matters.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-office-meeting-room-with-legal-documents-an.png"
                alt="Professional consultation services"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Protect Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Get expert labour law assistance and ensure your business stays compliant with all employment regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="w-5 h-5 mr-2" />
              Call 078 3924 365
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
