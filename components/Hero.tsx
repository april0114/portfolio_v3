export default function HeroPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <section
        id="home"
        className="flex-1 w-full flex items-center justify-center p-8 bg-white relative"
      >
        {/* 데스크탑용: 섹션 위쪽 라인 (full-bleed, 좌우 40px 여백) */}
        <span className="hidden lg:block pointer-events-none absolute top-20 left-10 right-10 h-[2px] bg-black" />

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div className="space-y-8">
            {/* 모바일/태블릿 전용: 텍스트 블록 위/아래 라인 (텍스트 컨테이너 기준으로 절대배치) */}
            <div className="relative space-y-6 px-4 md:px-6 py-8 lg:py-0">
              {/* 위 라인 (모바일/태블릿) */}
              <span className="block lg:hidden absolute inset-x-4 top-0 h-[2px] bg-black" />

              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-tight">
                Hi, I am April,
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 leading-relaxed">
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasd
              </p>

              {/* 아래 라인 (모바일/태블릿) */}
              <span className="block lg:hidden absolute inset-x-4 bottom-0 h-[2px] bg-black" />
            </div>
          </div>

          {/* 오른쪽 원 */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-400 rounded-full" />
          </div>
        </div>

        {/* 데스크탑용: 섹션 하단에서 40px 위 라인 (full-bleed, 좌우 40px 여백) */}
        <div className="hidden lg:block absolute bottom-40 left-10 right-10 h-[2px] bg-black" />
      </section>

      {/* 페이지 맨 끝 라인(항상 노출) */}
      <div className="w-full h-[2px] bg-black" />
    </div>
  )
}
