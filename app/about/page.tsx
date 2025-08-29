import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Shield } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Excellence",
      description: "We maintain the highest standards of professional service and expertise in labour relations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description: "Our clients' success is our priority. We provide personalized solutions for each business.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliable Support",
      description: "Available when you need us most, including after-hours advice and urgent assistance.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of successful CCMA representations and positive outcomes for our clients.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">About Skills Pond Consulting</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Your Trusted Labour Relations Partner</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 text-pretty">
              With years of experience in labour relations and employment law, we provide comprehensive consulting
              services to protect your business and ensure compliance.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Who We Are</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="text-pretty">
                  Skills Pond Consulting (PTY) LTD is a specialized labour relations and employment law consulting firm
                  dedicated to providing comprehensive support to employers across various industries.
                </p>
                <p className="text-pretty">
                  Our team of experienced professionals understands the complexities of South African labour law and
                  provides practical, cost-effective solutions to help businesses navigate employment challenges while
                  maintaining compliance with all relevant legislation.
                </p>
                <p className="text-pretty">
                  We pride ourselves on building long-term relationships with our clients, offering not just reactive
                  solutions but proactive strategies to prevent labour disputes and maintain positive workplace
                  relationships.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-team-meeting-in-modern-office-discuss.png"
                alt="Skills Pond Consulting team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              The principles that guide our approach to labour relations consulting and client service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-muted/30 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-balance">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
              To empower businesses with expert labour relations guidance, ensuring compliance with employment
              legislation while fostering positive workplace relationships. We are committed to providing accessible,
              professional, and cost-effective solutions that protect our clients' interests and promote fair labour
              practices.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
