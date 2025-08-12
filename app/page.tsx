"use client";

import { useRef, useCallback, useMemo, useState } from "react";
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

  const scrollToIndex = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(sectionIds.length - 1, i));
    const el = document.getElementById(sectionIds[clamped]);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIndex(clamped);
  }, [sectionIds]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const dir = Math.sign(e.deltaY);
    scrollToIndex(index + dir);
  }, [index, scrollToIndex]);

  const handleKey = useCallback((e: React.KeyboardEvent) => {
    if (["ArrowDown", "PageDown", " "].includes(e.key)) {
      e.preventDefault();
      scrollToIndex(index + 1);
    } else if (["ArrowUp", "PageUp"].includes(e.key)) {
      e.preventDefault();
      scrollToIndex(index - 1);
    }
  }, [index, scrollToIndex]);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onKeyDown={handleKey}
      tabIndex={0}
      className="h-[100svh] overflow-y-scroll scroll-smooth"
      style={{ overscrollBehaviorY: "contain" }}
    >
      <section id="hero" className="h-[100svh]"><HeroPage /></section>
      <section id="projects" className="h-[100svh]"><ProjectsPage /></section>
      <section id="experience" className="h-[100svh]"><ExperiencePage /></section>
      <section id="activities" className="h-[100svh]"><ActivitiesPage /></section>
      <section id="awards" className="h-[100svh]"><AwardsPage /></section>
      <section id="contact" className="h-[100svh]"><ContactPage /></section>
    </div>
  );
}
