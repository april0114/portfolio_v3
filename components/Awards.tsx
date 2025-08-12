"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";

type Lang = "en" | "ko";

const awardsData: Record<Lang, Array<{
  title: string;
  organization: string;
  description: string;
  date: string;
  icon: any;
  color: string;
}>> = {
  en: [
    {
      title: "3rd Place",
      organization: "LikeLion 2024",
      description: "Developed a workout posture measurement service using Mediapipe, recognized for web development innovation.",
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
      description: "Created a mobile app that suggests meal combinations using convenience store ingredients, awarded for creativity and practical impact.",
      date: "2024.12",
      icon: Award,
      color: "text-orange-500",
    },
    {
      title: "First Prize",
      organization: "Employment Club",
      description: "Built and launched a university festival web page, recognized for significant contributions to user engagement and digital experience.",
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

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ko" : "en"));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-12">

        {/* 언어 전환 버튼 */}
        <button
          onClick={toggleLang}
          className="fixed top-4 right-4 px-4 py-2 rounded bg-gray-200 hover:bg-orange-400"
        >
          {lang === "en" ? "한국어" : "English"}
        </button>

        <div className="mb-12">

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">
              {lang === "en" ? "Awards" : "수상"}
            </h1>
            <p className="text-xl text-gray-600">
              {lang === "en"
                ? "Recognition for my work and achievements ..."
                : "저의 활동과 성과로 받은 수상 내역입니다"}
            </p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="space-y-8">
          {awardsData[lang].map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-3 rounded-full bg-gray-50 group-hover:bg-orange-50 transition-colors`}>
                    <IconComponent className={`w-8 h-8 ${award.color} group-hover:scale-110 transition-transform`} />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-black group-hover:text-orange-500 transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-gray-500 text-sm font-medium">{award.date}</span>
                    </div>

                    <p className="text-lg font-medium text-gray-700">{award.organization}</p>
                    <p className="text-gray-600 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
