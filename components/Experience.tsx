import Link from "next/link"

const experiences = [
  {
    company: "The Korea Times",
    position: "Server Engineer Intern",
    period: "2024.10 - Now",
    href: "/experience/korea-times",
  },
  {
    company: "Advice Digital Marketing Inc.",
    position: "Web Developer",
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
    <div className="min-h-screen bg-white text-[15px] sm:text-base">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Experience</h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">I have worked in ...</p>
            <div className="w-full h-px bg-gray-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 왼쪽 소개 텍스트 */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              I've worked in companies
              <br />
              and as a freelancer akak
              <br />
              i want a job give me
              <br />
              money
            </h2>
          </div>

          {/* 오른쪽 리스트 */}
          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <Link
                key={index}
                href={exp.href}
                className="block group rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <div className="border-b border-gray-200 pb-3 sm:pb-4 hover:border-orange-300 transition-colors">
                  <div className="flex justify-between items-start gap-3 min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-black truncate group-hover:text-orange-500 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base break-words">
                        {exp.position}
                      </p>
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm flex-shrink-0">
                      {exp.period}
                    </span>
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
