import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const activities = [
  {
    title: "University Programming Club",
    description: "Led a team of 15 students in developing web applications",
    period: "2023.03 - 2024.06",
    category: "Leadership",
  },
  {
    title: "Open Source Contribution",
    description: "Contributed to React and Node.js open source projects",
    period: "2023.01 - Present",
    category: "Development",
  },
  {
    title: "Tech Conference Speaker",
    description: "Presented on modern web development practices",
    period: "2024.05",
    category: "Speaking",
  },
  {
    title: "Hackathon Participant",
    description: "Participated in 5+ hackathons, won 2nd place in Seoul Hackathon",
    period: "2023.01 - 2024.12",
    category: "Competition",
  },
]

export default function ActivitiesPage() {
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
            <h1 className="text-5xl font-bold text-black">Activities</h1>
            <p className="text-xl text-gray-600">Things I've been involved in ...</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group p-6 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                    {activity.category}
                  </span>
                  <span className="text-gray-500 text-sm">{activity.period}</span>
                </div>

                <h3 className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
