export default function HeroPage() {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center p-8 bg-white relative"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-8xl md:text-9xl font-bold text-black leading-tight">
                Hi, I am April,
              </h1>
              <p className="text-3xl md:text-4xl text-gray-600 leading-relaxed">
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasdf
                <br />
                asdfasdfasdfasdfasd
              </p>
            </div>
          </div>

          {/* 오른쪽 원 */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-96 h-96 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
