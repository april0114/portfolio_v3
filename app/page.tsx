"use client";

import { useRef, useCallback, useMemo, useState, useEffect } from "react";
import ActivitiesPage from "@/components/Activities";
import AwardsPage from "@/components/Awards";
import ContactPage from "@/components/Contact";
import ProjectsPage from "@/components/Projects";
import ExperiencePage from "@/components/Experience";
import HeroPage from "@/components/Hero";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionIds = useMemo(
    () => ["hero", "projects", "experience", "activities", "awards", "contact"],
    []
  );
  const [index, setIndex] = useState(0);

  // 포인터 종류 감지: 데스크탑(마우스/트랙패드)에서만 휠 가로채기
  const pointerFine = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
  }, []);

  const scrollToIndex = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(sectionIds.length - 1, i));
      const el = document.getElementById(sectionIds[clamped]);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIndex(clamped);
    },
    [sectionIds]
  );

  // 데스크탑 휠 스크롤: 한 칸씩 이동 + 쿨다운
  const wheelLockRef = useRef(false);
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!pointerFine) return; // 모바일/터치에서는 건드리지 않음
      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      const dir = Math.sign(e.deltaY);
      scrollToIndex(index + dir);

      // 빠른 연속 스크롤 방지 (필요 시 시간 조절)
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 650);
    },
    [index, scrollToIndex, pointerFine]
  );

  // 키보드 네비게이션(접근성)
  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(index + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(index - 1);
      }
    },
    [index, scrollToIndex]
  );

  // 스크롤 스냅 상태에 맞춰 현재 index 동기화 (모바일/데스크탑 공통)
  useEffect(() => {
    if (!containerRef.current) return;
    const root = containerRef.current;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        // 가장 화면을 많이 차지하는 섹션을 현재 섹션으로
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) {
          const i = sections.findIndex((s) => s === visible.target);
          if (i !== -1) setIndex(i);
        }
      },
      {
        root,
        threshold: [0.55, 0.75], // 절반 이상 보이면 해당 섹션으로 간주
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [sectionIds]);

  return (
    <div
      ref={containerRef}
      // 데스크탑에서만 onWheel 바인딩
      onWheel={pointerFine ? handleWheel : undefined}
      onKeyDown={handleKey}
      tabIndex={0}
      // 스냅 컨테이너: 세로 스냅 mandatory + 모바일 자연 스크롤
      className="
        h-[100svh]
        overflow-y-scroll
        scroll-smooth
        snap-y snap-mandatory
        overscroll-y-contain
        touch-pan-y
        [scrollbar-gutter:stable]
      "
    >
      {/* 각 섹션: 높이 고정 + 스냅 시작점 + 스냅 정지 always (건너뛰기 방지) */}
      <section id="hero" className="h-[100svh] snap-start [scroll-snap-stop:always]">
        <HeroPage />
      </section>
      <section id="projects" className="h-[100svh] snap-start [scroll-snap-stop:always]">
        <ProjectsPage />
      </section>
      <section id="experience" className="h-[100svh] snap-start [scroll-snap-stop:always]">
        <ExperiencePage />
      </section>
      <section id="activities" className="h-[100svh] snap-start [scroll-snap-stop:always]">
        <ActivitiesPage />
      </section>
      <section id="awards" className="h-[100svh] snap-start [scroll-snap-stop:always]">
        <AwardsPage />
      </section>
      <section id="contact" className="h-[100svh] snap-start [scroll-snap-stop:always]">
        <ContactPage />
      </section>
    </div>
  );
}
