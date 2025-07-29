import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const experiences = [
  {
    company: "The Korea Times",
    position: "Server Engineer Intern",
    period: "2024.10 - Now",
    href: "/experience/korea-times",
  },
    {
    company: "Advice Digital Marketing Inc.",
    position: "A/S Center",
    period: "2025.04 - Now",
    href: "/experience/adm",
  },
    {
    company: "Skeong University",
    position: "A/S Center",
    period: "2023.03 - 2024.06",
    href: "/experience/skeong-1",
  },
  {
    company: "Scanderm",
    position: "Business Manager",
    period: "2022.10 - 2022.12",
    href: "/experience/scanderm",
  },
]

export default function ExperiencePage() {
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
    </div>
  )
}
