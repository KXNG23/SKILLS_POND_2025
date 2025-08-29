"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Link from "next/link"

interface CarouselSlide {
  type: "image" | "video"
  src: string
  alt?: string
}

const slides: CarouselSlide[] = [
  {
    type: "image",
    src: "/images/courtroom-scene-1.png",
    alt: "Professional legal representation in courtroom",
  },
  {
    type: "image",
    src: "/images/courtroom-scene-2.png",
    alt: "Legal consultation and advocacy services",
  },
  {
    type: "image",
    src: "/images/courtroom-scene-3.png",
    alt: "Employment law proceedings and representation",
  },
  {
    type: "video",
    src: "/videos/courtroom-scene.mp4",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 relative">
            <Badge className="mb-4 bg-accent text-accent-foreground">Professional Labour Relations</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Expert Labour Law Consulting Services</h1>
            <p className="text-xl mb-8 opacity-90 text-pretty">
              Professional assistance with employment law, CCMA proceedings, disciplinary hearings, and comprehensive
              labour relations support for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {slide.type === "image" ? (
                    <img src={slide.src || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
                  ) : (
                    <video src={slide.src} className="w-full h-full object-cover" autoPlay muted loop />
                  )}
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-accent" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
