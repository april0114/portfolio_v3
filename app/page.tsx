"use client"

import { useState, useEffect } from "react"
import ActivitiesPage from "@/components/Activities"
import AwardsPage from "@/components/Awards"
import ContactPage from "@/components/Contact"
import ProjectsPage from "@/components/Projects"
import ExperiencePage from "@/components/Experience"
import HeroPage from "@/components/Hero"


export default function HomePage() {
  const [lang, setLang] = useState("en")
  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ko" : "en"))
  }

  return (
    <div>
      {/* 언어 스위치 버튼 */}
      <button
        onClick={toggleLang}
        className="fixed top-4 right-4 px-4 py-2 rounded bg-gray-200 hover:bg-orange-400"
      >
        {lang === "en" ? "한국어" : "English"}
      </button>
      {/* Hero Section - 비행기 애니메이션 속도 조정 */}
      <HeroPage />
      {/*Project Section */}
      <ProjectsPage />
      {/* Experience Section */}
      <ExperiencePage />
      {/* Activities Section */}
      <ActivitiesPage />
      {/* Awards Section  */}
      <AwardsPage />
      {/* Contact Section */}
      <ContactPage />
    </div>
  )
}
