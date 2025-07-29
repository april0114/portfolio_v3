import Link from "next/link"
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react"

const awards = [
  {
    title: "3rd Place",
    organization: "LikeLion 2024 ",
    description: "Developed a workout posture measurement service using Mediapipe, recognized for web development innovation.",
    date: "2024.08",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    title: "President’s Award of Kyungpook National University",
    organization: "2023 Daegu Media Grand Festival",
    description: "led a project plan for developing a virtual stage for creators",
    date: "2023.12",
    icon: Medal,
    color: "text-gray-500",
  },
  {
    title: "Outstanding award",
    organization: "Youth Employment Academy SESAC in Campus",
    description: "Created a mobile app that suggests meal combinations using convenience store ingredients, awarded for creativity and practical impact.",
    date: "2024.12",
    icon: Award,
    color: "text-orange-500",
  },
  {
    title: "First Prize",
    organization: "Employment Club.",
    description: "Built and launched a university festival web page, recognized for significant contributions to user engagement and digital experience.",
    date: "2023.07",
    icon: Award,
    color: "text-green-500",
  },
]

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-5xl font-bold text-black">Awards</h1>
            <p className="text-xl text-gray-600">Recognition for my work and achievements ...</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="space-y-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <div
                key={index}
                className="group p-8 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-3 rounded-full bg-gray-50 group-hover:bg-orange-50 transition-colors`}>
                    <IconComponent className={`w-8 h-8 ${award.color} group-hover:scale-110 transition-transform`} />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-black group-hover:text-orange-500 transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-gray-500 text-sm font-medium">{award.date}</span>
                    </div>

                    <p className="text-lg font-medium text-gray-700">{award.organization}</p>
                    <p className="text-gray-600 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
