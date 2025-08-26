"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Experience = {
  company: string;
  position: string;
  period: string;
  href: string;
};

const experiences: Experience[] = [
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
];

export default function ExperiencePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

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
      {/* progress bar (Projects 와 동일 스타일) */}
      <div
        className="fixed top-0 left-0 h-[3px] md:h-1 bg-orange-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="container px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-left">
        {/* 헤더 (Projects 헤더와 동일한 스케일) */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black leading-tight tracking-tighter">
              Experience
            </h1>
            <div className="w-full h-0.5 bg-black" />
          </div>
        </div>

        {/* 2열 레이아웃 (Projects 섹션의 좌우 여백/간격과 맞춤) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* 왼쪽 소개 텍스트 */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              I&apos;ve worked at companies
              <br />
              and shipped freelance stuff.
              <br />
              Now I&apos;m ready for the next big one.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-prose">
              Backend &amp; infra leaning, with lots of WordPress/Next.js in production. I like clean deployments,
              stable servers, and measurable outcomes.
            </p>
          </div>

          {/* 오른쪽 리스트 (Projects 카드 대비: 라인형 아이템) */}
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {experiences.map((exp, i) => (
              <Link
                key={i}
                href={exp.href}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <div className="py-4 sm:py-5 md:py-6">
                  <div className="flex items-start justify-between gap-4 min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-black truncate group-hover:text-orange-500 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base break-words">{exp.position}</p>
                    </div>
                    <span className="text-gray-500 text-xs sm:text-sm md:text-base flex-shrink-0">{exp.period}</span>
                  </div>

                  {/* 우측 화살표 & 호버 인터랙션 (Projects 'View More' 느낌 맞춤) */}
                  <div className="mt-2 sm:mt-3 flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-600 group-hover:text-orange-500 transition-colors">
                      View More
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
