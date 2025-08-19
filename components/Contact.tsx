"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Instagram, Mail, Linkedin } from "lucide-react";

type Lang = "en" | "ko";

const copy: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    intro: string;
    back: string;
    ig: string;
    email: string;
    linkedin: string;
    footer: string;
  }
> = {
  en: {
    title: "Contact me",
    subtitle: "I need money and friends ...",
    intro:
      "Feel free to reach out to me through any of these platforms. I'm always open to discussing new opportunities, collaborations, or just having a friendly chat!",
    back: "Back",
    ig: "Instagram",
    email: "Email",
    linkedin: "LinkedIn",
    footer: "Looking forward to hearing from you! 🚀",
  },
  ko: {
    title: "연락하기",
    subtitle: "돈과 친구가 필요합니다 ...",
    intro:
      "아래 채널로 언제든 편하게 연락 주세요. 새로운 기회, 협업, 혹은 가벼운 수다도 환영합니다!",
    back: "뒤로가기",
    ig: "인스타그램",
    email: "이메일",
    linkedin: "링크드인",
    footer: "연락 기다릴게요! 🚀",
  },
};

export default function ContactPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];

  const toggleLang = () => setLang((p) => (p === "en" ? "ko" : "en"));

  return (
    <div className="min-h-screen bg-white text-[15px] sm:text-base">
      {/* 언어 전환 버튼 (모바일 더 작게, iOS safe-area 반영) */}
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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-600">
              {t.subtitle}
            </p>
            <div className="w-full h-px bg-gray-300" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {t.intro}
              </p>
            </div>

            {/* 모바일 1열 → md부터 3열 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/journey_rim/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group text-center rounded-xl md:rounded-2xl
                  border border-gray-200 hover:border-pink-300
                  transition-all duration-300 hover:shadow-lg
                  p-5 sm:p-6 md:p-8
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400
                  block
                "
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-center">
                    <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-pink-500 transition-colors">
                    {t.ig}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base break-words">@journey_rim</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:businessrim00@gmail.com"
                className="
                  group text-center rounded-xl md:rounded-2xl
                  border border-gray-200 hover:border-orange-300
                  transition-all duration-300 hover:shadow-lg
                  p-5 sm:p-6 md:p-8
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
                  block
                "
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-center">
                    <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
                    {t.email}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    businessrim00@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kyungrim-ha-96a921252"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group text-center rounded-xl md:rounded-2xl
                  border border-gray-200 hover:border-blue-300
                  transition-all duration-300 hover:shadow-lg
                  p-5 sm:p-6 md:p-8
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                  block
                "
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-center">
                    <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-blue-500 transition-colors">
                    {t.linkedin}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base break-words">
                    kyungrimha
                  </p>
                </div>
              </a>
            </div>

            <div className="text-center pt-6 sm:pt-8">
              <p className="text-gray-500 text-sm sm:text-base">{t.footer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
