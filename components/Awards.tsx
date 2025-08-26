"use client";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Trophy, Medal, Award, X } from "lucide-react";

type Lang = "en" | "ko";

type AwardItem = {
  title: string;
  organization: string;
  description: string;
  date: string;
  icon: LucideIcon; // ← any → LucideIcon (타입 안전)
  color: string; // Tailwind text color class
};

const awardsData: Record<Lang, AwardItem[]> = {
  en: [
    {
      title: "3rd Place",
      organization: "LikeLion 2024",
      description:
        "Developed a workout posture measurement service using Mediapipe, recognized for web development innovation.",
      date: "2024.08",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "President’s Award of Kyungpook National University",
      organization: "2023 Daegu Media Grand Festival",
      description: "Led a project plan for developing a virtual stage for creators.",
      date: "2023.12",
      icon: Medal,
      color: "text-gray-500",
    },
    {
      title: "Outstanding Award",
      organization: "Youth Employment Academy SESAC in Campus",
      description:
        "Created a mobile app that suggests meal combinations using convenience store ingredients, awarded for creativity and practical impact.",
      date: "2024.12",
      icon: Award,
      color: "text-orange-500",
    },
    {
      title: "First Prize",
      organization: "Employment Club",
      description:
        "Built and launched a university festival web page, recognized for significant contributions to user engagement and digital experience.",
      date: "2023.07",
      icon: Award,
      color: "text-green-500",
    },
  ],
  ko: [
    {
      title: "우수상",
      organization: "멋쟁이사자처럼 2024",
      description: "Mediapipe를 활용한 운동 자세 측정 서비스를 개발하여 웹 개발 혁신 부문에서 인정받았습니다",
      date: "2024.08",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "경북대학교 총장상",
      organization: "2023 대구 미디어대제전 ",
      description: "창작자를 위한 가상 무대 개발 프로젝트 기획을 주도하였습니다.",
      date: "2023.12",
      icon: Medal,
      color: "text-gray-500",
    },
    {
      title: "우수상",
      organization: "청년고용아카데미 SESAC in Campus",
      description: "편의점 재료로 식단을 추천하는 모바일 앱을 제작하여 창의성과 실용성을 인정받았습니다.",
      date: "2024.12",
      icon: Award,
      color: "text-orange-500",
    },
    {
      title: "최우수상",
      organization: "취업 동아리",
      description: "대학교 축제 웹페이지를 제작·배포하여 사용자 참여도와 디지털 경험 향상에 크게 기여하였습니다.",
      date: "2023.07",
      icon: Award,
      color: "text-green-500",
    },
  ],
};

export default function AwardsPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const list = awardsData[lang];

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ko" : "en"));

  // 상단 진행바
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

  // 모바일 모달 시 배경 스크롤 잠금
  useEffect(() => {
    if (activeIdx !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [activeIdx]);

  return (
    <div className="min-h-screen bg-white text-[15px] sm:text-base flex flex-col">
      {/* progress bar (Projects/Experience/Activities와 동일) */}
      <div
        className="fixed top-0 left-0 h-[3px] md:h-1 bg-orange-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* 언어 전환 버튼 */}
      <button
        onClick={toggleLang}
        className="
          fixed z-50 rounded-full shadow-sm
          top-[max(0.75rem,env(safe-area-inset-top))]
          right-[max(0.75rem,env(safe-area-inset-right))]
          px-3 py-1.5 sm:px-4 sm:py-2
          bg-gray-200 hover:bg-orange-400
          text-sm sm:text-base
          focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
        "
      >
        {lang === "en" ? "한국어" : "English"}
      </button>

      {/* 헤더 (스케일 통일) */}
      <header className="container px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-18 md:pb-12 text-left">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black leading-tight tracking-tighter">
            {lang === "en" ? "Awards" : "수상"}
          </h1>
          <p className="mt-0 text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-3xl">
            {lang === "en" ? "Recognition for my work and achievements ..." : "저의 활동과 성과로 받은 수상 내역입니다"}
          </p>
          <div className="w-full h-0.5 bg-black" />
        </div>
      </header>

      {/* === 모바일/태블릿: 2×2 그리드 + 모달 === */}
      <main className="container px-4 sm:px-6 md:px-8 flex-1 pb-10 md:hidden">
        <div className="grid max-w-5xl mx-auto grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
          {list.map((a, i) => {
            const Icon = a.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="
                  group relative aspect-square
                  rounded-none border border-gray-200
                  hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5
                  transition-all duration-300
                  p-3 sm:p-4
                  flex flex-col items-center justify-center text-center
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
                "
                aria-haspopup="dialog"
                aria-label={`${a.title} – ${a.organization}`}
              >
                <div className="p-2.5 sm:p-3 bg-gray-50 group-hover:bg-orange-50 transition-colors mb-2 sm:mb-3">
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${a.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black truncate w-full">{a.title}</h3>
                <p className="text-[12px] sm:text-sm text-gray-600 truncate w-full">{a.organization}</p>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-1">{a.date}</span>
                <span className="absolute bottom-2 right-2 text-[10px] sm:text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {lang === "en" ? "Tap for details" : "자세히 보기"}
                </span>
              </button>
            );
          })}
        </div>
      </main>

      {/* 모바일 모달 */}
      {activeIdx !== null && (
        <div className="md:hidden">
          <Modal onClose={() => setActiveIdx(null)}>
            {(() => {
              const a = list[activeIdx!];
              const Icon = a.icon;
              return (
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gray-50">
                      <Icon className={`w-7 h-7 ${a.color}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 id="award-title" className="text-lg sm:text-xl md:text-2xl font-bold text-black break-words">
                        {a.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm">{a.date}</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg font-medium text-gray-800 break-words">{a.organization}</p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{a.description}</p>
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveIdx(null)}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-black text-white text-sm sm:text-base hover:bg-black/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                    >
                      {lang === "en" ? "Close" : "닫기"}
                    </button>
                  </div>
                </div>
              );
            })()}
          </Modal>
        </div>
      )}

      {/* === 데스크탑(≥ md): 라인 리스트 뷰 (Projects 카드 톤과 조화) === */}
      <main className="hidden md:block container px-6 lg:px-10 xl:px-16 2xl:px-24 flex-1 pb-16">
        <div className="mx-auto max-w-7xl space-y-4 lg:space-y-6">
          {list.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="
                  group border border-gray-200 rounded-none
                  hover:border-gray-300 hover:shadow-lg transition-all
                "
              >
                {/* 아이콘 | 본문 | 날짜 */}
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 lg:gap-8 p-5 lg:p-6">
                  {/* 아이콘 */}
                  <div className="p-3 bg-gray-50 group-hover:bg-orange-50 transition-colors">
                    <Icon className={`w-9 h-9 ${a.color}`} />
                  </div>

                  {/* 본문 */}
                  <div className="min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-black group-hover:text-orange-500 transition-colors truncate">
                      {a.title}
                    </h3>
                    <p className="text-gray-700 text-sm lg:text-base font-medium truncate">{a.organization}</p>
                    <p className="hidden xl:block text-gray-600">{a.description}</p>
                  </div>

                  {/* 날짜 */}
                  <div className="text-right text-gray-500 text-sm font-medium pl-4">{a.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

/** 간단 모달 컴포넌트 (모바일 전용으로 렌더) */
function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  // ESC로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="award-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative z-10 w-[min(92vw,680px)] bg-white p-5 sm:p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        {children}
      </div>
    </div>
  );
}
