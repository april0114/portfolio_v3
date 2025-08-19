"use client";
import { useState } from "react";

type Lang = "en" | "ko";

const activities: Record<
  Lang,
  Array<{ title: string; description: string; period: string; category: string }>
> = {
  en: [
    {
      title: "LikeLion Coding Club",
      description:
        "Provided backend development training with Django and Spring, organized workshops for student developers.",
      period: "2023.03 - 2024.12",
      category: "Development / Education",
    },
    {
      title: "Kakao Cloud Edu",
      description:
        "Served as an assistant instructor, teaching R programming to high school students.",
      period: "2024.09 - 2024.12",
      category: "Education / Volunteering",
    },
    {
      title: "CodeClub Committee",
      description:
        "Volunteered as a coding mentor, teaching Scratch to elementary school students for 3 months.",
      period: "2022.09 - 2022.12",
      category: "Education / Volunteering",
    },
    {
      title: "MAKE Education Volunteer",
      description:
        "Volunteered to teach elementary school students Arduino for one month.",
      period: "2024.01 - 2024.02",
      category: "Education / Volunteering",
    },
  ],
  ko: [
    {
      title: "멋쟁이사자처럼 코딩 동아리",
      description:
        "장고와 스프링으로 백엔드 교육을 진행하고, 2년동안 동아리 운영을 맡았습니다.",
      period: "2023.03 - 2024.12",
      category: "개발 / 교육",
    },
    {
      title: "카카오 클라우드 에듀",
      description:
        "보조 강사로 참여해 고등학생에게 R 프로그래밍을 가르쳤습니다.",
      period: "2024.09 - 2024.12",
      category: "교육 / 봉사",
    },
    {
      title: "코드클럽 운영위원",
      description:
        "초등학생 대상 스크래치 멘토로 3개월간 봉사했습니다.",
      period: "2022.09 - 2022.12",
      category: "교육 / 봉사",
    },
    {
      title: "MAKE 교육 봉사",
      description: "초등학생에게 한 달간 아두이노를 가르쳤습니다.",
      period: "2024.01 - 2024.02",
      category: "교육 / 봉사",
    },
  ],
};

export default function ActivitiesPage() {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ko" : "en"));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 현재 언어 디버그 뱃지 (모바일에서 더 작게) */}
      <span className="fixed top-3 left-3 z-50 text-[10px] sm:text-xs bg-black/70 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
        lang: {lang}
      </span>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12">
        {/* 언어 전환 버튼 (모바일에서 터치 영역/폰트 축소) */}
        <button
          onClick={toggleLang}
          className="fixed top-3 right-3 z-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-gray-200 hover:bg-orange-400 text-sm sm:text-base"
        >
          {lang === "en" ? "한국어" : "English"}
        </button>

        <div className="mb-8 sm:mb-12">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
              {lang === "en" ? "Activities" : "활동"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {lang === "en"
                ? "Things I've been involved in ..."
                : "대외활동 ..."}
            </p>
            <div className="w-full h-px bg-gray-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {activities[lang].map((activity, index) => (
            <div
              key={index}
              className="group p-4 sm:p-5 md:p-6 border border-gray-200 rounded-xl md:rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-1 bg-orange-100 text-orange-700 text-xs sm:text-sm rounded-full">
                    {activity.category}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm">
                    {activity.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black group-hover:text-orange-500 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 여백: 모바일에서 살짝 줄이고 데스크탑에서 넉넉하게 */}
        <div className="h-10 sm:h-12" />
      </div>
    </div>
  );
}
