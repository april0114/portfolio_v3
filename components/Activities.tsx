import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const activities = [
  {
    title: "LikeLion Coding Club",
    description: "Provided backend development training with Django and Spring, organized workshops for student developers.",
    period: "2023.03 - 2024.12",
    category: "Development / Education",

  },
  {
    title: "Kakao Cloud Edu",
    description: "Served as an assistant instructor, teaching R programming to high school students.",
    period: "2024.09 - 2024.12",
    category: "Education / Volunteering",
  },
  {
    title: "CodeClub Committee",
    description: "Volunteered as a coding mentor, teaching Scratch to elementary school students for 3 months.",
    period: "2022.09 - 2022.12",
    category: "Development / Education / Volunteering",
  },
  {
    title: "MAKE Education Volunteer",
    description: "Volunteered to teach elementary school students Arduino for one month.",
    period: "2024.01 - 2024.02",
    category: "Development / Education / Volunteering",
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
