"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

type Lang = "en" | "ko";

const activities: Record<
  Lang,
  Array<{ title: string; description: string; period: string; category: string }>
> = {
  en: [
    { title: "LikeLion Coding Club",
      description: "Provided backend development training with Django and Spring, organized workshops for student developers.",
      period: "2023.03 - 2024.12",
      category: "Development / Education" },
    { title: "Kakao Cloud Edu",
      description: "Served as an assistant instructor, teaching R programming to high school students.",
      period: "2024.09 - 2024.12",
      category: "Education / Volunteering" },
    { title: "CodeClub Committee",
      description: "Volunteered as a coding mentor, teaching Scratch to elementary school students for 3 months.",
      period: "2022.09 - 2022.12",
      category: "Education / Volunteering" },
    { title: "MAKE Education Volunteer",
      description: "Volunteered to teach elementary school students Arduino for one month.",
      period: "2024.01 - 2024.02",
      category: "Education / Volunteering" },
  ],
  ko: [
    { title: "멋쟁이사자처럼 코딩 동아리",
      description: "장고와 스프링으로 백엔드 교육을 진행하고, 2년동안 동아리 운영을 맡았습니다.",
      period: "2023.03 - 2024.12",
      category: "개발 / 교육" },
    { title: "카카오 클라우드 에듀",
      description: "보조 강사로 참여해 고등학생에게 R 프로그래밍을 가르쳤습니다.",
      period: "2024.09 - 2024.12",
      category: "교육 / 봉사" },
    { title: "코드클럽 운영위원",
      description: "초등학생 대상 스크래치 멘토로 3개월간 봉사했습니다.",
      period: "2022.09 - 2022.12",
      category: "교육 / 봉사" },
    { title: "MAKE 교육 봉사",
      description: "초등학생에게 한 달간 아두이노를 가르쳤습니다.",
      period: "2024.01 - 2024.02",
      category: "교육 / 봉사" },
  ],
};

export default function ActivitiesPage() {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    console.log("clicked, prev:", lang);
    setLang((prev) => (prev === "en" ? "ko" : "en"));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 현재 언어 디버그 뱃지 */}
      <span className="fixed top-4 left-4 z-50 text-xs bg-black/70 text-white px-2 py-1 rounded">
        lang: {lang}
      </span>

      <div className="container mx-auto px-8 py-12">
        {/* 언어 전환 버튼 - 가려짐 방지 z-50 */}
        <button
          onClick={toggleLang}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-gray-200 hover:bg-orange-400"
        >
          {lang === "en" ? "한국어" : "English"}
        </button>

        <div className="mb-12">

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">
              {lang === "en" ? "Activities" : "활동"}
            </h1>
            <p className="text-xl text-gray-600">
              {lang === "en" ? "Things I've been involved in ..." : "대외활동 ..."}
            </p>
            <div className="w-full h-px bg-gray-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities[lang].map((activity, index) => (
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
  );
}
