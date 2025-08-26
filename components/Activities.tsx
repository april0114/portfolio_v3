"use client";
import { useEffect, useState } from "react";

type Lang = "en" | "ko";

const activities: Record<Lang, Array<{ title: string; description: string; period: string; category: string }>> = {
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
      description: "Served as an assistant instructor, teaching R programming to high school students.",
      period: "2024.09 - 2024.12",
      category: "Education / Volunteering",
    },
    {
      title: "CodeClub Committee",
      description: "Volunteered as a coding mentor, teaching Scratch to elementary school students for 3 months.",
      period: "2022.09 - 2022.12",
      category: "Education / Volunteering",
    },
    {
      title: "MAKE Education Volunteer",
      description: "Volunteered to teach elementary school students Arduino for one month.",
      period: "2024.01 - 2024.02",
      category: "Education / Volunteering",
    },
  ],
  ko: [
    {
      title: "멋쟁이사자처럼 코딩 동아리",
      description: "장고와 스프링으로 백엔드 교육을 진행하고, 2년동안 동아리 운영을 맡았습니다.",
      period: "2023.03 - 2024.12",
      category: "개발 / 교육",
    },
    {
      title: "카카오 클라우드 에듀",
      description: "보조 강사로 참여해 고등학생에게 R 프로그래밍을 가르쳤습니다.",
      period: "2024.09 - 2024.12",
      category: "교육 / 봉사",
    },
    {
      title: "코드클럽 운영위원",
      description: "초등학생 대상 스크래치 멘토로 3개월간 봉사했습니다.",
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
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ko" : "en"));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[15px] sm:text-base">
      {/* progress bar (Projects/Experience와 동일) */}
      <div
        className="fixed top-0 left-0 h-[3px] md:h-1 bg-orange-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* 현재 언어 디버그 뱃지 */}
      <span className="fixed top-3 left-3 z-50 text-[10px] sm:text-xs bg-black/70 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
        lang: {lang}
      </span>

      {/* 언어 토글 */}
      <button
        onClick={toggleLang}
        className="fixed top-3 right-3 z-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-gray-200 hover:bg-orange-400 text-sm sm:text-base"
      >
        {lang === "en" ? "한국어" : "English"}
      </button>

      <div className="container px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-left">
        {/* 헤더 스케일 맞춤 */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black leading-tight tracking-tighter">
              {lang === "en" ? "Activities" : "활동"}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-3xl">
              {lang === "en" ? "Things I've been involved in ..." : "대외활동 ..."}
            </p>
            <div className="w-full h-0.5 bg-black" />
          </div>
        </div>

        {/* 카드 그리드 (Projects 카드 톤에 맞춰 테두리/호버 조정) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {activities[lang].map((activity, index) => (
            <div
              key={index}
              className="group p-4 sm:p-5 md:p-6 border border-gray-200 rounded-none hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-1 bg-orange-100 text-orange-700 text-xs sm:text-sm rounded-full">
                    {activity.category}
                  </span>
                  <span className="text-gray-500 text-xs sm:text-sm">{activity.period}</span>
                </div>

                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black group-hover:text-orange-500 transition-colors">
                  {activity.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-gray-600 break-words hyphens-auto">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-10 sm:h-12" />
      </div>
    </div>
  );
}
