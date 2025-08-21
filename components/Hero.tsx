"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type Sign = { name: string; range: string; blurb: string; house: string; deg: string };

const SIGNS: Sign[] = [
  { name: "aa", range: "", blurb: "", house: "", deg: "" },
  { name: "bb", range: "", blurb: "", house: "", deg: "" },
  { name: "cc", range: "", blurb: "", house: "", deg: "" },
  { name: "dd", range: "", blurb: "", house: "", deg: "" },
  { name: "ee", range: "", blurb: "", house: "", deg: "" },
];

const ARC = {
  cx: 500,
  cy: 2000,
  rxOuter: 3100,
  ryOuter: 2500,
  rxInner: 2500,
  ryInner: 2000,
  startDeg: 200,
  endDeg: 340,
};

const OFFSET_Y = 0;

function estimateLabelBox(name: string, fontSize: number) {
  const width = name.length * fontSize * 0.6;
  const height = fontSize * 1.1;
  const padX = fontSize * 0.35;
  const padY = fontSize * 0.25;
  return {
    w: width + padX * 2,
    h: height + padY * 2,
    rx: (height + padY * 2) / 2,
    ry: (height + padY * 2) / 2,
    offsetX: -((width + padX * 2) / 2),
    offsetY: -((height + padY * 2) / 2),
  };
}

export default function ZodiacSemicircleFlushBottom() {
  // 초기 active(표시용 텍스트). 선택 고정은 selectedIdx로 관리
  const [active, setActive] = useState<Sign>({
    name: "aa",
    range: "",
    blurb: "aaaaaaaaaaaaaaaaaaa.",
    house: "aaaaaaaaaaa",
    deg: "",
  });
  const defaultActiveRef = useRef<Sign>(active);

  // 모바일 감지
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 선택(클릭 고정) 및 호버 인덱스
const [hoverIdx, setHoverIdx] = useState<number | null>(null);
const [selectedIdx, setSelectedIdx] = useState<number>(0); // 클릭 고정


  // viewBox
  const vb = useMemo(() => {
    const topY = ARC.cy - ARC.ryOuter + OFFSET_Y;
    const bottomY = ARC.cy + OFFSET_Y;
    const padTop = 40, padBottom = 0;
    const minY = topY - padTop;
    const height = (bottomY + padBottom) - minY;
    return { minX: 0, minY, width: 1000, height };
  }, []);

  // 라벨 좌표
  const labels = useMemo(() => {
    const { cx, cy, rxOuter, ryOuter, rxInner, ryInner } = ARC;
    const startDeg = isMobile ? 240 : ARC.startDeg;
    const endDeg   = isMobile ? 300 : ARC.endDeg;

    const rLabelX = (rxOuter + rxInner) / 2;
    const rLabelY = ((ryOuter + ryInner) / 2) - 100; // 필요시 미세조정

    const delta = endDeg >= startDeg ? endDeg - startDeg : endDeg + 360 - startDeg;

return SIGNS.map((s, i) => {
  const t = i / (SIGNS.length - 1);   // 0~1
  const deg = startDeg + (delta * t);
  const rad = (deg * Math.PI) / 180;

  const x = cx + rLabelX * Math.cos(rad);
  const y = cy + rLabelY * Math.sin(rad) + OFFSET_Y;

  let rot = deg - 90;
  if (rot > 90) rot -= 180;

  return { index: i, sign: s, x, y, rotate: rot, deg, t }; // ← index, t 추가
});
  }, [isMobile]);

  // 현재 보여줄(하이라이트가 따라갈) 타겟 인덱스: 호버 중이면 호버, 아니면 선택
const currentIdx = hoverIdx ?? selectedIdx;

  // 중앙 내용: 호버 동안에는 해당 라벨로 보여주고, 호버 해제 시 선택값 유지
  useEffect(() => {
    const target = labels[currentIdx]?.sign;
    if (target) setActive(target);
  }, [currentIdx, labels]);

  return (
    <section className="relative min-h-[100svh] bg-white text-black overflow-hidden">
<div className="absolute top-12 left-1/2 -translate-x-1/2 text-center space-y-5">
        <div className="font-serif font-bold leading-none text-[40px] sm:text-[64px] lg:text-[108px]">
          April's Portfolio
        </div>
        </div>
      {/* 우측 메타 */}
      <div className="absolute right-6 top-6 text-sm leading-6 text-right opacity-90">
        <div className="opacity-60">Currently at</div>
        <div>Los Angeles,</div>
        <div>California, USA</div>
      </div>

      {/* 중앙 타이포 */}
      <div className="absolute inset-x-6 top-[30%] sm:top-[55%] -translate-y-[6%] text-center space-y-5">
        <div className="font-serif font-bold leading-none text-[40px] sm:text-[64px] lg:text-[108px]">
          {active.name}
        </div>
        <div className="text-xl sm:text-2xl lg:text-3xl">
          Sun <span className="opacity-60">|</span> {active.deg || "—"}
          <span className="opacity-60"> | </span>
          {active.house || "—"} House
        </div>
        <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base leading-relaxed text-black/80">
          {active.blurb ||
            `Tasdasdasdasd ${active.name}.`}
        </p>
      </div>

      {/* 반원 SVG */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[40svh] sm:h-[66svh] md:h-[70svh] lg:h-[74svh] w-full"
        viewBox={`${vb.minX} ${vb.minY} ${vb.width} ${vb.height}`}
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Zodiac semicircle"
        shapeRendering="geometricPrecision"
      >
        {/* 바깥/안쪽 호 */}
        <g transform={`translate(0, ${OFFSET_Y})`}>
          <path
            d={`M ${ARC.cx - ARC.rxOuter} ${ARC.cy} A ${ARC.rxOuter} ${ARC.ryOuter} 0 0 1 ${ARC.cx + ARC.rxOuter} ${ARC.cy}`}
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={`M ${ARC.cx - ARC.rxInner} ${ARC.cy} A ${ARC.rxInner} ${ARC.ryInner} 0 0 1 ${ARC.cx + ARC.rxInner} ${ARC.cy}`}
            fill="none"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>

{/* 하이라이트 링: 상자 대신 원형. 호버 시 이동, 클릭 후 고정 */}
{(() => {
  if (labels.length === 0) return null;

  // 호버 중엔 hoverIdx를, 아니면 selectedIdx를 따라감 (너의 currentIdx 사용)
  const showRing = (hoverIdx !== null) || (selectedIdx !== null);
  if (!showRing) return null;

  const target = labels[currentIdx];
  const fontSize = isMobile ? 120 : 200;
  const r = fontSize * 0.68; // 글자 크기 기준 원 반지름 (원하면 0.6~0.75로 조절)

  return (
    <g
      transform={`translate(${target.x}, ${target.y}) rotate(${target.rotate})`}
      style={{
        transition: "transform 260ms cubic-bezier(.2,.8,.2,1)",
        pointerEvents: "none",
      }}
    >
      <circle
        r={r}
        fill={hoverIdx !== null ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.05)"}
        stroke="black"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
})()}



        {/* 플로팅 하이라이트 캡슐: 중간 반지름(라벨 위치)만 움직임 */}
        {(() => {
          if (labels.length === 0) return null;
          const moving = hoverIdx !== null;
          if (!moving) return null; // 평소에는 표시하지 않음

          const target = labels[currentIdx];
          const fontSize = isMobile ? 120 : 200;
          const box = estimateLabelBox(target.sign.name, fontSize);

          return (
            <g
              transform={`translate(${target.x}, ${target.y}) rotate(${target.rotate})`}
              style={{ transition: "transform 260ms cubic-bezier(.2,.8,.2,1)", pointerEvents: "none" }}
            >

            </g>
          );
        })()}

        {/* 왼쪽 세로 “Leo” + 포인터(고정요소) */}
        <g transform={`translate(${ARC.cx - ARC.rxInner + 30}, ${ARC.cy + OFFSET_Y - 10}) rotate(-90)`}>
          <text textAnchor="middle" className="font-serif" style={{ fontSize: 26, letterSpacing: "0.06em" }} fill="black">
            Leo
          </text>
        </g>
        <circle
          cx={ARC.cx - ARC.rxInner + 100}
          cy={ARC.cy + OFFSET_Y - 90}
          r={16}
          fill="none"
          stroke="black"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
        />
        <circle cx={ARC.cx - ARC.rxInner + 100} cy={ARC.cy + OFFSET_Y - 90} r={5} fill="black" />

        {/* 라벨: 평소엔 텍스트만, 이동 중에도 텍스트만 (상자는 없음) */}
        {labels.map(({ sign, x, y, rotate, index }) => {
          const fontSize = isMobile ? 120 : 200;
          return (
            <g
              key={sign.name}
              transform={`translate(${x}, ${y}) rotate(${rotate})`}
              className="select-none cursor-pointer"
              tabIndex={0}
              onMouseEnter={() => setHoverIdx(index)}
              onMouseLeave={() => setHoverIdx(null)}
              onFocus={() => setHoverIdx(index)}
              onBlur={() => setHoverIdx(null)}
              onClick={() => {
                setSelectedIdx(index);      // 클릭 고정
                setHoverIdx(null);          // 이동 종료 → 배경 숨김
                setActive(sign);            // 중앙 내용 고정 반영
              }}
              style={{ transition: "transform 200ms ease" }}
            >
              <text
                textAnchor="middle"
                className="font-serif"
                fill="black"
                opacity={0.95}
                style={{
                  fontSize,
                  letterSpacing: "0.03em",
                  transition: "transform 180ms ease, opacity 180ms ease",
                  transform: (hoverIdx === index || selectedIdx === index) ? "scale(1.05)" : "scale(1)",
                }}
              >
                {sign.name}
              </text>
            </g>
          );
        })}
      </svg>
    </section>
  );
}
