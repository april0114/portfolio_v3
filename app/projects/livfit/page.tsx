"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function LivfitProjectPage() {
  const router = useRouter()

  useEffect(() => {
    document.body.style.overflow = "auto"

    return () => {
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
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="space-y-6">
            <div className="bg-orange-100 rounded-lg p-8 mb-8">
              <h1 className="text-6xl font-bold text-orange-500 mb-4">LIVFIT</h1>
              <p className="text-gray-600 text-lg">2024.10 - Present</p>
            </div>
          </div>
        </div>

        <div className="space-y-12 text-black">
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                LIVFIT is a web-based fitness application that utilizes MediaPipe technology to provide real-time
                workout guidance and form correction for people who work out. The application helps users maintain
                proper exercise form through computer vision and machine learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Real-time pose detection</li>
                    <li>• AI-powered form correction</li>
                    <li>• Progress tracking</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Spring Boot", "React", "MediaPipe", "TensorFlow"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
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
                  <h3 className="text-xl font-semibold">Main Dashboard</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[Dashboard Screenshot]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Workout Interface</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[Workout Interface Screenshot]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Progress Analytics</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[Analytics Screenshot]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Mobile View</h3>
                  <div className="bg-gray-200 rounded-lg p-4 h-48 flex items-center justify-center">
                    <p className="text-gray-500">[Mobile Screenshot]</p>
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
                  <h3 className="text-xl font-semibold mb-4 text-red-600">
                    Challenge 1: Real-time Pose Detection Accuracy
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Initial MediaPipe implementation had accuracy issues with complex workout poses, especially during
                    rapid movements.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      Implemented custom pose filtering algorithms and added confidence thresholds to improve detection
                      accuracy by 35%. Also integrated multiple camera angles support for better pose recognition.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge 2: Performance Optimization</h3>
                  <p className="mb-4 text-gray-700">
                    The application was experiencing lag during real-time processing, affecting user experience.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      Optimized the processing pipeline by implementing frame skipping techniques and reducing model
                      complexity. This resulted in 60% performance improvement while maintaining accuracy.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge 3: Cross-platform Compatibility</h3>
                  <p className="mb-4 text-gray-700">
                    MediaPipe had different behaviors across various browsers and devices, causing inconsistent user
                    experiences.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      Created a compatibility layer with fallback mechanisms and device-specific optimizations.
                      Implemented comprehensive testing across 15+ device/browser combinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Impact */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Project Impact</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2 text-orange-500">500+</div>
                  <div className="text-lg text-gray-700">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-orange-500">95%</div>
                  <div className="text-lg text-gray-700">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-orange-500">10k+</div>
                  <div className="text-lg text-gray-700">Workouts Tracked</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
