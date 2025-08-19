export default function HeroPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <section
        id="home"
        className="flex-1 w-full flex items-center justify-center p-6 sm:p-8 bg-white relative"
      >
        {/* 데스크탑 전용: 상단 라인 (살짝 더 얇고 반투명) */}
        <span
          aria-hidden
          className="hidden lg:block pointer-events-none absolute top-20 left-10 right-10 h-px bg-black/70"
        />

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div className="space-y-6 sm:space-y-8">
            {/* 모바일/태블릿 전용: 텍스트 블록 위/아래 라인 */}
            <div className="relative space-y-4 sm:space-y-6 px-3 sm:px-4 md:px-6 py-6 lg:py-0">
              {/* 위 라인 */}
              <span
                aria-hidden
                className="block lg:hidden absolute inset-x-3 sm:inset-x-4 top-0 h-px bg-black/70"
              />

              {/* 타이틀: 모바일 확 줄임 → 화면 커질수록 점진 확대 */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight tracking-tight">
                Hi, I am April,
              </h1>

              {/* 본문: 모바일 text-base부터 시작 */}
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 leading-relaxed">
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasd
              </p>

              {/* 아래 라인 */}
              <span
                aria-hidden
                className="block lg:hidden absolute inset-x-3 sm:inset-x-4 bottom-0 h-px bg-black/70"
              />
            </div>
          </div>

          {/* 오른쪽 원: 모바일 작게 → 점진 확대 + 살짝 리치한 스타일 */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80
                rounded-full
                bg-gradient-to-br from-blue-400 to-blue-500
                ring-1 ring-black/10 shadow-xl
                motion-safe:animate-[pulse_6s_ease-in-out_infinite]
              "
            />
          </div>
        </div>

        {/* 데스크탑 전용: 하단에서 40px 위 라인 */}
        <div
          aria-hidden
          className="hidden lg:block absolute bottom-40 left-10 right-10 h-px bg-black/70"
        />
      </section>

      {/* 페이지 맨 끝 라인(항상 노출, 더 얇게) */}
      <div aria-hidden className="w-full h-px bg-black/80" />
    </div>
  )
}
