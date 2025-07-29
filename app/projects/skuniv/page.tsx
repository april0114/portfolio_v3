"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function SkunivProjectPage() {
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
    router.push("/#projects")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-12">
        <div className="mb-12">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-gray-600 hover:text-sky-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="space-y-6">
            <div className="bg-sky-200 rounded-lg p-8 mb-8">
              <h1 className="text-6xl font-bold text-sky-700 mb-2">skuniv.</h1>
              <p className="text-sky-600 text-xl mb-4">club fair MBTI</p>
              <p className="text-gray-600 text-lg">2024.03 - 2024.06</p>
            </div>
          </div>
        </div>

        <div className="space-y-12 text-black">
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Skuniv Club Fair MBTI is an innovative web application designed to help university students discover the
                perfect clubs and organizations based on their personality types. Using MBTI personality assessment, the
                platform matches students with clubs that align with their interests and personality traits.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• MBTI personality assessment</li>
                    <li>• Smart club matching</li>
                    <li>• Interactive interface</li>
                    <li>• Detailed club information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Spring Boot", "React", "Chart.js", "Bootstrap"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UI Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">UI</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">MBTI Test Interface</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[MBTI Test Screenshot]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Results Dashboard</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[Results Dashboard Screenshot]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Club Recommendations</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[Club Recommendations Screenshot]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Club Details</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[Club Details Screenshot]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Solving Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Problem Solving</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge 1: MBTI Algorithm Accuracy</h3>
                  <p className="mb-4 text-gray-700">
                    Creating a reliable MBTI assessment that could accurately determine personality types with limited
                    questions.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      Researched and implemented validated MBTI question sets from psychological literature. Added
                      weighted scoring system and validation checks to improve accuracy to 85%.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge 2: Club Matching Logic</h3>
                  <p className="mb-4 text-gray-700">
                    Developing an algorithm that could effectively match personality types with appropriate club
                    activities.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      Created a comprehensive club categorization system based on MBTI preferences. Implemented a
                      scoring algorithm that considers multiple personality dimensions.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge 3: User Engagement</h3>
                  <p className="mb-4 text-gray-700">
                    Ensuring students would complete the full assessment and explore recommended clubs.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      Designed an engaging, gamified interface with progress indicators and interactive elements. Added
                      detailed explanations and visual representations of results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
