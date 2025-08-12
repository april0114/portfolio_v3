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
    <div className="min-h-screen bg-white">
      {/* 언어 전환 버튼 */}
      <button
        onClick={toggleLang}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-gray-200 hover:bg-orange-400"
      >
        {lang === "en" ? "한국어" : "English"}
      </button>

      <div className="container mx-auto px-8 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.back}
          </Link>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">{t.title}</h1>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
            <div className="w-full h-px bg-gray-300" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-600">{t.intro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/journey_rim/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Instagram className="w-12 h-12 text-pink-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-pink-500 transition-colors">
                    {t.ig}
                  </h3>
                  <p className="text-gray-600">@journey_rim</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:businessrim00@gmail.com"
                className="group p-8 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Mail className="w-12 h-12 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
                    {t.email}
                  </h3>
                  <p className="text-gray-600">businessrim00</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Linkedin className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-blue-500 transition-colors">
                    {t.linkedin}
                  </h3>
                  <p className="text-gray-600">kyungrimha</p>
                </div>
              </a>
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-500">{t.footer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
