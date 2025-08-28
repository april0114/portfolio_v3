"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Mail } from "lucide-react"

export default function KoreaTimesPage() {
  const router = useRouter()

  useEffect(() => {
    // 페이지 로드 시 body overflow를 auto로 설정
    document.body.style.overflow = "auto"

    return () => {
      // 페이지 언마운트 시에도 auto 유지
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleBackClick = () => {
    router.push("/#experience")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-12">
        <div className="mb-12">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">Kyung rim</h1>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">Server Engineer Internship</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-green-600">
                <Mail className="w-4 h-4" />
                <span className="font-semibold">The Korea Times</span>
              </div>
              <span className="text-gray-500">2024.10 - Present</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-black mb-4">Role Description</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  As a Server Engineer Intern at The Korea Times, I am responsible for developing and maintaining
                  backend systems, working with databases, and ensuring optimal server performance. I collaborate with
                  cross-functional teams to deliver scalable solutions for digital media platforms.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-black mb-4">Key Achievements</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Optimized database queries resulting in 30% improvement in response times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implemented automated testing procedures reducing deployment errors by 25%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Collaborated on microservices architecture migration project</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-black mb-4">Technologies Used</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Express.js", "PostgreSQL", "Redis", "Docker", "AWS", "Git", "Jest"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
