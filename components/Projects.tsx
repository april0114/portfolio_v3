"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaOptionsType } from "embla-carousel"

const projects = [
  {
    id: "livfit",
    title: "LIVFIT",
    description: "web based on media pipe for people who work out",
    tags: ["spring boot", "react", "figma"],
    bgColor: "bg-orange-100",
    logoColor: "text-orange-500",
    image: "/images/livfit-logo.png",
  },
  {
    id: "uconnect",
    title: "Yconnect",
    description: "KOREA SIM/eSIM e-commerce with automation",
    tags: ["PHP", "WordPress", "HTML", "CSS", "JS"],
    bgColor: "bg-blue-100",
    logoColor: "text-blue-500",
    image: "https://yconnectkorea.com/wp-content/uploads/2025/04/YCK_logo_01.png",
  },
  {
    id: "skuniv",
    title: "skuniv-clubfair test page",
    description: "club fair MBTI mini app",
    tags: ["spring boot", "react", "figma"],
    bgColor: "bg-sky-200",
    logoColor: "text-sky-700",
    subtitle: "club fair MBTI",
    image: "/images/livfit-logo.png",
  },
  {
    id: "skuniv_festival",
    title: "skuniv-festival page",
    description: "festival landing & schedule",
    tags: ["HTML", "CSS", "JS", "figma"],
    bgColor: "bg-gray-100",
    logoColor: "text-gray-700",
    image: "/images/livfit-logo.png",
  },
  {
    id: "zinus",
    title: "ZINUS DREAM VIBE",
    description: "B2B website for Hyundai Zinus DreamVibe collection",
    tags: ["PHP", "WordPress", "figma", "HTML", "CSS", "JS"],
    bgColor: "bg-emerald-100",
    logoColor: "text-emerald-600",
    image: "/images/livfit-logo.png",
  },
  {
    id: "rainfm",
    title: "RAIN FM",
    description: "24/7 K-POP radio site: schedule & live module",
    tags: ["Next.js", "Tailwind", "WordPress"],
    bgColor: "bg-purple-100",
    logoColor: "text-purple-600",
    image: "/images/livfit-logo.png",
  },
]

export default function ProjectsPage() {
  // 상단 스크롤 프로그레스
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

  // Embla 기본 옵션
  const emblaOptions: EmblaOptionsType = { align: "start", loop: false, dragFree: false }
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)

  // 반응형 step 계산 (PC=3, Tablet=2, Mobile=1)
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

  // 점 네비/선택 상태
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

  // 버튼 클릭 시 step만큼 점프
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
    <div className="min-h-screen bg-white">
      {/* 상단 스크롤 프로그레스 */}
      <div
        className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="mb-8 md:mb-12">

          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black">Projects</h1>
            <p className="text-lg md:text-xl text-gray-600">
              that i am proud of ... and lead me for getting jobs
            </p>
            <div className="w-full h-px bg-gray-200"></div>
          </div>
        </div>

        {/* 캐러셀 */}
        <div className="relative">
          {/* 좌/우 버튼 (데스크탑에서 표시) */}
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

          {/* 뷰포트 */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* 컨테이너 */}
            <div className="flex">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="
                    flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]
                    pr-4 md:pr-6
                  "
                >
                  <Card className="group h-full cursor-pointer border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                    <Link href={`/projects/${project.id}`} className="block h-full">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div
                          className={`${project.bgColor} h-48 flex items-center justify-center relative overflow-hidden`}
                        >
                          <div className="text-center">
                            {project.image ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="h-20 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            ) : (
                              <h3
                                className={`text-3xl font-bold ${project.logoColor} group-hover:scale-110 transition-transform duration-300`}
                              >
                                {project.title}
                              </h3>
                            )}
                            {project.subtitle && (
                              <p className="text-sm text-gray-600 mt-2">{project.subtitle}</p>
                            )}
                          </div>
                        </div>

                        <div className="p-6 space-y-4 flex-1 flex flex-col">
                          <h4 className="text-xl font-bold text-black">{project.title}</h4>
                          <p className="text-gray-600">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4">
                            <span className="text-gray-600 group-hover:text-orange-500 transition-colors">
                              View More
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* 점 네비 */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  selectedIndex === idx ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
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
