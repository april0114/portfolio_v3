"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaOptionsType } from "embla-carousel"

const projects = [
  { id: "livfit", title: "LIVFIT", description: "web based on media pipe for people who work out",
    tags: ["spring boot", "react", "figma"], bgColor: "bg-orange-100", logoColor: "text-orange-500",
    image: "/images/livfit-logo.png" },
  { id: "uconnect", title: "Yconnect", description: "KOREA SIM/eSIM e-commerce with automation",
    tags: ["PHP","WordPress","HTML","CSS","JS"], bgColor: "bg-blue-100", logoColor: "text-blue-500",
    image: "https://yconnectkorea.com/wp-content/uploads/2025/04/YCK_logo_01.png" },
  { id: "skuniv", title: "skuniv-clubfair test page", description: "club fair MBTI mini app",
    tags: ["spring boot","react","figma"], bgColor: "bg-sky-200", logoColor: "text-sky-700",
    subtitle: "club fair MBTI", image: "/images/livfit-logo.png" },
  { id: "skuniv_festival", title: "skuniv-festival page", description: "festival landing & schedule",
    tags: ["HTML","CSS","JS","figma"], bgColor: "bg-gray-100", logoColor: "text-gray-700",
    image: "/images/livfit-logo.png" },
  { id: "zinus", title: "ZINUS DREAM VIBE", description: "B2B website for Hyundai Zinus DreamVibe collection",
    tags: ["PHP","WordPress","figma","HTML","CSS","JS"], bgColor: "bg-emerald-100", logoColor: "text-emerald-600",
    image: "/images/livfit-logo.png" },
  { id: "rainfm", title: "RAIN FM", description: "24/7 K-POP radio site: schedule & live module",
    tags: ["Next.js","Tailwind","WordPress"], bgColor: "bg-purple-100", logoColor: "text-purple-600",
    image: "/images/livfit-logo.png" },
]

export default function ProjectsPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const emblaOptions: EmblaOptionsType = {
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)

  const getStep = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 0
    if (w >= 1024) return 3
    if (w >= 640) return 2
    return 1
  }
  const [step, setStep] = useState(1)
  useEffect(() => {
    const updateStep = () => setStep(getStep())
    updateStep()
    window.addEventListener("resize", updateStep)
    return () => window.removeEventListener("resize", updateStep)
  }, [])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    })
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    const target = Math.max(emblaApi.selectedScrollSnap() - step, 0)
    emblaApi.scrollTo(target)
  }, [emblaApi, step])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    const last = emblaApi.scrollSnapList().length - 1
    const target = Math.min(emblaApi.selectedScrollSnap() + step, last)
    emblaApi.scrollTo(target)
  }, [emblaApi, step])

  return (
    <div className="min-h-screen bg-white text-[15px] sm:text-base">
      {/* progress bar */}
      <div
        className="fixed top-0 left-0 h-[3px] md:h-1 bg-orange-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black tracking-tight">
              Projects
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              that i am proud of ... and lead me for getting jobs
            </p>
            <div className="w-full h-px bg-gray-200" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev/Next (desktop) */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full border bg-white/80 backdrop-blur border-gray-200 hover:bg-white transition shadow"
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full border bg-white/80 backdrop-blur border-gray-200 hover:bg-white transition shadow"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Edge fade (mobile/tablet) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent md:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent md:hidden" />

          {/* Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Track */}
            <div className="flex">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="
                    min-w-0
                    flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]
                    pr-3 sm:pr-4 md:pr-6
                  "
                >
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl md:rounded-2xl overflow-hidden">
                    <Link href={`/projects/${project.id}`} className="block h-full">
                      <CardContent className="p-0 h-full flex flex-col min-h-0">
                        {/* Thumb */}
                        <div className={`${project.bgColor} h-32 sm:h-40 md:h-48 flex items-center justify-center relative overflow-hidden`}>
                          <div className="text-center px-3">
                            {project.image ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="max-w-full h-14 sm:h-20 md:h-24 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            ) : (
                              <h3 className={`text-xl sm:text-3xl md:text-4xl font-bold ${project.logoColor} group-hover:scale-110 transition-transform duration-300`}>
                                {project.title}
                              </h3>
                            )}
                            {project.subtitle && (
                              <p className="text-xs sm:text-sm text-gray-600 mt-2">{project.subtitle}</p>
                            )}
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col min-h-0">
                          <h4 className="text-base sm:text-xl md:text-2xl font-bold text-black">
                            {project.title}
                          </h4>

                          <p className="text-sm sm:text-base text-gray-600 break-words hyphens-auto">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                              <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-3 sm:pt-4">
                            <span className="text-sm sm:text-base text-gray-600 group-hover:text-orange-500 transition-colors">
                              View More
                            </span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition transform ${
                  selectedIndex === idx ? "bg-orange-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
