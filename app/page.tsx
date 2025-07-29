"use client"

import { useState, useEffect } from "react"
import {
  Plane,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Medal,
  Award,
  Instagram,
  Mail,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import ActivitiesPage from "@/components/Activities"
import AwardsPage from "@/components/Awards"

const projects = [
  {
    id: "livfit",
    title: "LIVFIT",
    description: "web based on media pipe for people who work out",
    tags: ["spring boot", "react", "figma"],
    bgColor: "bg-orange-100",
    logoColor: "text-orange-500",
  },
  {
    id: "uconnect",
    title: "Yconnect",
    description: "web based on media pipe for people who work out",
    tags: ["PHP", "WordPress", "figma", "CPanel"],
    bgColor: "bg-blue-100",
    logoColor: "text-blue-500",
  },
  {
    id: "skuniv",
    title: "skuniv.",
    description: "web based on media pipe for people who work out",
    tags: ["spring boot", "react", "figma"],
    bgColor: "bg-sky-200",
    logoColor: "text-sky-700",
    subtitle: "club fair MBTI",
  },
  {
    id: "project4",
    title: "LIVFIT",
    description: "web based on media pipe for people who work out",
    tags: ["spring boot", "react", "figma"],
    bgColor: "bg-gray-100",
    logoColor: "text-gray-700",
  },
  {
    id: "project5",
    title: "LIVFIT",
    description: "web based on media pipe for people who work out",
    tags: ["spring boot", "react", "figma"],
    bgColor: "bg-blue-100",
    logoColor: "text-blue-500",
  },
]

const experiences = [
  {
    company: "The Korea Times",
    position: "Server Engineer Intern",
    period: "2024.10 - Now",
    href: "/experience/korea-times",
  },
  {
    company: "Scanderm",
    position: "Business Manager",
    period: "2022.10 - Now",
    href: "/experience/scanderm",
  },
  {
    company: "Skeong University",
    position: "A/S Center",
    period: "2023.03 - 2024.06",
    href: "/experience/skeong-1",
  },
  {
    company: "Skeong University",
    position: "A/S Center",
    period: "2023.03 - 2024.06",
    href: "/experience/skeong-2",
  },
]


export default function HomePage() {
  const [isFlying, setIsFlying] = useState(false)
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0)

  const handlePlaneClick = () => {
    setIsFlying(true)
    // 6초 후 비행기를 원래 위치로 되돌림 (더 천천히)
    setTimeout(() => {
      setIsFlying(false)
    }, 6000)
  }

  // Projects 슬라이더 함수들
  const nextProjectSlide = () => {
    setCurrentProjectSlide(1)
  }

  const prevProjectSlide = () => {
    setCurrentProjectSlide(0)
  }

  useEffect(() => {
    // 일반 스크롤 허용
    document.body.style.overflow = "auto"

    return () => {
      // 컴포넌트 언마운트 시에도 auto 유지
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div>
      {/* Hero Section - 비행기 애니메이션 속도 조정 */}
      <section id="home" className="min-h-screen w-full flex items-center justify-center p-8 bg-white relative">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-8xl md:text-9xl font-bold text-black leading-tight">Hi, I am April,</h1>
              <p className="text-3xl md:text-4xl text-gray-600 leading-relaxed">
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasd
              </p>
            </div>

            <div className="relative">
              <div
                className={`inline-block cursor-pointer transition-all duration-[6000ms] ease-in-out ${isFlying ? "transform translate-x-[500px] -translate-y-32 rotate-12" : ""
                  }`}
                onClick={handlePlaneClick}
              >
                <Plane className="w-16 h-16 text-gray-700 hover:text-orange-500 transition-colors" />
              </div>

              {/* 점선 트레일 - 더 천천히 나타나도록 */}
              <div
                className={`absolute top-8 left-16 transition-all duration-[6000ms] ease-in-out ${isFlying ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
              >
                <svg width="500" height="150" className="absolute">
                  <path
                    d="M 0 0 Q 250 -50 500 -100"
                    stroke="#f97316"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="8,4"
                    className={`${isFlying ? "animate-pulse" : ""}`}
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-96 h-96 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Projects Section - 카드 크기 고정 */}
      <section id="projects" className="min-h-screen w-full bg-white p-8">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <div className="mb-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-black">Projects</h1>
              <p className="text-xl text-gray-600">that i am proud of ... and lead me for getting jobs</p>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectSlide * 100}%)` }}
              >
                {/* 첫 번째 슬라이드 - 3개 카드 */}
                <div className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project, index) => (
                      <Card
                        key={project.id}
                        className="group cursor-pointer border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                      >
                        <Link href={`/projects/${project.id}`}>
                          <CardContent className="p-0">
                            <div
                              className={`${project.bgColor} h-48 flex items-center justify-center relative overflow-hidden`}
                            >
                              <div className="text-center">
                                <h3
                                  className={`text-3xl font-bold ${project.logoColor} group-hover:scale-110 transition-transform duration-300`}
                                >
                                  {project.title}
                                </h3>
                                {project.subtitle && <p className="text-sm text-gray-600 mt-2">{project.subtitle}</p>}
                              </div>
                            </div>

                            <div className="p-6 space-y-4">
                              <h4 className="text-xl font-bold text-black">{project.title}</h4>
                              <p className="text-gray-600">{project.description}</p>

                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
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
                    ))}
                  </div>
                </div>

                {/* 두 번째 슬라이드 - 2개 카드 (3개 그리드 유지) */}
                <div className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-8">
                    {projects.slice(3, 5).map((project, index) => (
                      <Card
                        key={project.id}
                        className="group cursor-pointer border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                      >
                        <Link href={`/projects/${project.id}`}>
                          <CardContent className="p-0">
                            <div
                              className={`${project.bgColor} h-48 flex items-center justify-center relative overflow-hidden`}
                            >
                              <div className="text-center">
                                <h3
                                  className={`text-3xl font-bold ${project.logoColor} group-hover:scale-110 transition-transform duration-300`}
                                >
                                  {project.title}
                                </h3>
                                {project.subtitle && <p className="text-sm text-gray-600 mt-2">{project.subtitle}</p>}
                              </div>
                            </div>

                            <div className="p-6 space-y-4">
                              <h4 className="text-xl font-bold text-black">{project.title}</h4>
                              <p className="text-gray-600">{project.description}</p>

                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
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
                    ))}
                    {/* 빈 공간을 위한 더미 div */}
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 슬라이더 네비게이션 */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevProjectSlide}
                disabled={currentProjectSlide === 0}
                className={`p-2 rounded-full border-2 transition-all ${currentProjectSlide === 0
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500"
                  }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                <div
                  className={`w-3 h-3 rounded-full transition-colors ${currentProjectSlide === 0 ? "bg-orange-500" : "bg-gray-300"}`}
                />
                <div
                  className={`w-3 h-3 rounded-full transition-colors ${currentProjectSlide === 1 ? "bg-orange-500" : "bg-gray-300"}`}
                />
              </div>

              <button
                onClick={nextProjectSlide}
                disabled={currentProjectSlide === 1}
                className={`p-2 rounded-full border-2 transition-all ${currentProjectSlide === 1
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500"
                  }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen w-full bg-white p-8">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <div className="mb-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-black">Experience</h1>
              <p className="text-xl text-gray-600">I have worked in ...</p>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-black leading-tight">
                  I've worked in companies
                  <br />
                  and as a freelancer akak
                  <br />i want a job give me
                  <br />
                  money
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Link key={index} href={exp.href} className="block group">
                  <div className="border-b border-gray-200 pb-4 hover:border-orange-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-black group-hover:text-orange-500 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-gray-600">{exp.position}</p>
                      </div>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <ActivitiesPage />


      {/* Awards Section  */}
      <AwardsPage />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen w-full bg-white p-8">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <div className="mb-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-black">Contact me</h1>
              <p className="text-xl text-gray-600">I need money and friends ...</p>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-6">
                <p className="text-lg text-gray-600">
                  Feel free to reach out to me through any of these platforms. I'm always open to discussing new
                  opportunities, collaborations, or just having a friendly chat!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Instagram className="w-12 h-12 text-pink-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-pink-500 transition-colors">
                      Instagram
                    </h3>
                    <p className="text-gray-600">@april_dev</p>
                  </div>
                </a>

                <a
                  href="mailto:april@example.com"
                  className="group p-8 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Mail className="w-12 h-12 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
                      Email
                    </h3>
                    <p className="text-gray-600">april@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Linkedin className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-blue-500 transition-colors">
                      LinkedIn
                    </h3>
                    <p className="text-gray-600">april-developer</p>
                  </div>
                </a>
              </div>

              <div className="text-center pt-8">
                <p className="text-gray-500">Looking forward to hearing from you! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
