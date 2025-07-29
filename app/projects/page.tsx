"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
    tags: ["spring boot", "react", "figma"],
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

export default function ProjectsPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header with orange progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="container mx-auto px-8 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">Projects</h1>
            <p className="text-xl text-gray-600">that i am proud of ... and lead me for getting jobs</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <Link href={`/projects/${project.id}`}>
                <CardContent className="p-0">
                  <div className={`${project.bgColor} h-48 flex items-center justify-center relative overflow-hidden`}>
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
                      <span className="text-gray-600 group-hover:text-orange-500 transition-colors">View More</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
