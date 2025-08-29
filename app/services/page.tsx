import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Scale,
  Users,
  Shield,
  Clock,
  BookOpen,
  Handshake,
  AlertTriangle,
  Phone,
  Mail,
  Database,
  HelpCircle,
  Newspaper,
  UserCheck,
  DollarSign,
  Home,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Employment Documentation",
      description: "Comprehensive preparation of employment contracts, letters of employment, and policy documents.",
      details: [
        "Restraint of trade agreements",
        "Confidentiality agreements",
        "HIV/AIDS policies",
        "Employment contracts and letters",
        "Company policy development",
      ],
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "CCMA Representation",
      description: "Expert representation at CCMA proceedings and various bargaining councils.",
      details: [
        "CCMA proceedings representation",
        "MIBCO representation",
        "MEIBC representation",
        "Other bargaining council proceedings",
        "Dispute resolution and mediation",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Disciplinary Proceedings",
      description: "Professional on-site chairing of disciplinary hearings and comprehensive retrenchment assistance.",
      details: [
        "On-site disciplinary hearing chairing",
        "Retrenchment assistance and advice",
        "Dismissal procedures",
        "Performance management guidance",
        "Workplace investigation support",
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "After Hours Support",
      description: "Round-the-clock advice and support for urgent labour relations matters.",
      details: [
        "24/7 telephonic advice",
        "Emergency consultation services",
        "Urgent matter assistance",
        "Crisis management support",
        "Immediate guidance on critical issues",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Labour Manuals & Templates",
      description: "Access to comprehensive labour manuals and document templates for your business.",
      details: [
        "Updated labour manual access",
        "Document template library",
        "Policy template collection",
        "Procedure guideline documents",
        "Best practice resources",
      ],
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Union Negotiations",
      description: "Professional representation in union negotiations on behalf of employers.",
      details: [
        "Collective bargaining representation",
        "Union negotiation strategy",
        "Wage negotiation assistance",
        "Industrial action management",
        "Labour agreement drafting",
      ],
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Strike Management",
      description: "Comprehensive strike management and urgent Labour Court interdicts.",
      details: [
        "Strike action management",
        "Urgent Labour Court interdicts",
        "Industrial action response",
        "Workplace disruption handling",
        "Legal protection strategies",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Access",
      description: "Access to updated database of main agreements and wage determinations.",
      details: [
        "Main agreement database access",
        "Wage determination information",
        "Industry-specific agreements",
        "Updated legislative information",
        "Compliance requirement tracking",
      ],
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Helpline Services",
      description: "Telephonic and email helplines to address urgent and other labour issues.",
      details: [
        "Telephonic helpline support",
        "Email consultation services",
        "Urgent issue resolution",
        "General labour law queries",
        "Compliance guidance",
      ],
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Regular Updates",
      description: "Regular newsletters to keep employers updated on relevant labour issues.",
      details: [
        "Monthly labour law newsletters",
        "Legislative update notifications",
        "Industry-specific updates",
        "Case law developments",
        "Compliance reminders",
      ],
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Registration Assistance",
      description: "Assistance with UIF and Workman's Compensation Commissioner registration.",
      details: [
        "UIF registration assistance",
        "Workman's Compensation registration",
        "Employer registration guidance",
        "Compliance documentation",
        "Registration process support",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Coverage",
      description: "Comprehensive legal coverage and cost contribution for various proceedings.",
      details: [
        "R15,000 Labour Court coverage per annum",
        "Coverage depends on number of employees",
        "Legal representation included",
        "Court proceeding support",
        "Professional legal advocacy",
      ],
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Eviction Cost Contribution",
      description: "Financial contribution towards eviction costs for farmers and landowners.",
      details: [
        "R3,000 to R8,000 contribution per annum",
        "Farmer and landowner specific service",
        "Eviction procedure support",
        "Cost varies by number of employees",
        "Legal process assistance",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Our Labour Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Comprehensive Labour Relations Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 text-pretty">
              From employment documentation to CCMA representation, we provide complete labour law solutions to protect
              your business and ensure compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Brochure Image Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Complete Service Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive labour relations services designed to protect your business and ensure compliance.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d87f4b46-b10d-49ca-a85d-1fc7fe7788c4.JPG-pAAoKRAaLctqeCnXGVoUeqcNQD2KVQ.jpeg"
                alt="Skills Pond Consulting Labour Services Overview - Comprehensive employment law services including CCMA representation, disciplinary hearings, employment contracts, and legal coverage"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Service Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our comprehensive coverage options are designed to provide maximum protection for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">
                  <DollarSign className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Labour Court Coverage</CardTitle>
                <CardDescription>Comprehensive legal representation and court coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">R15,000</div>
                <p className="text-muted-foreground mb-4">per annum</p>
                <p className="text-sm text-muted-foreground">
                  Coverage amount depends on the number of employees in your organization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">
                  <Home className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Eviction Cost Contribution</CardTitle>
                <CardDescription>For farmers and landowners requiring eviction assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">R3,000 - R8,000</div>
                <p className="text-muted-foreground mb-4">per annum</p>
                <p className="text-sm text-muted-foreground">Contribution amount depends on the number of employees</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">
            Contact us today to discuss your labour relations needs and find the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="w-5 h-5 mr-2" />
              <Link href="tel:0783924365">Call 078 3924 365</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
