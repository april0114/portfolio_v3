"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function UConnectProjectPage() {
  const router = useRouter()

  useEffect(() => {
    document.body.style.overflow = "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleBackClick = () => {
    router.push("/#projects")
  }

  return (
    <div className="min-h-screen bg-[#D6F2FF]">
      <div className="container mx-auto px-8 py-12 text-white">
        <div className="mb-12">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-gray-600 hover:text-[#EC008C] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 mb-8">
              <a href="https://yconnectkorea.com/en" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://yconnectkorea.com/wp-content/uploads/2025/04/YCK_logo_01.png"
                  alt="Yconnect Logo"
                  className="h-16 mb-4"
                />
              </a>
              <a
                href="https://yconnectkorea.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline font-semibold"
              >Visit Website →</a>
              <p className="text-gray-600 text-lg">2025.04 - 2024.07</p>
            </div>
          </div>
        </div>

        <div className="space-y-12 text-gray-600">
          {/* About Section */}
          <section>
            <h2 className="text-3xl text-black font-bold mb-6">About</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Y Connect is a web platform built for people who are planning to visit South Korea. It allows users to easily purchase eSIM and USIM mobile plans in advance, ensuring seamless mobile connectivity as soon as they arrive in Korea.
                Designed with both Korean and English interfaces, the platform offers a convenient experience for a wide range of users. With a simple and intuitive ordering process, travelers can select a data plan, enter their travel information, and complete their order within minutes.
                Once an order is placed, an automated confirmation email is sent to both the user and the admin, eliminating the need for manual processing and reducing delays.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Easy eSIM/USIM pre-ordering for Korea-bound travelers</li>
                    <li>• Bilingual support (Korean & English)</li>
                    <li>• Automated email confirmation for orders</li>
                    <li>• Mobile-friendly responsive design</li>
                    <li>• REST API integration for fulfillment automation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["php", "Word Press", "GoDaddy", "CPanel"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Solving Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-black">Problem Solving</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge 1: Fault-tolerant API Architecture for Mission-critical eSIM Activation</h3>
                  <p className="mb-4 text-gray-700">
                    The eSIM/USIM provider required real-time API calls upon WooCommerce order completion. Any failure in this step would cause missed service delivery and user frustration. The system had to guarantee delivery, resilience, and transaction traceability — even in the face of API timeouts, network instability, or malformed input.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      I architected a decoupled API integration layer that listens to WooCommerce's order_status_completed hook and asynchronously sends a POST request to the provider’s API. To ensure robustness, I implemented retry logic, timeout handling, and server-side logging for each transaction.
                      In failure scenarios, the user still received a success screen, while a custom email alert was automatically sent to the admin with detailed logs and error context for immediate intervention.
                      This setup eliminated user-facing errors and gave the admin full backend visibility without relying on external dashboards or real-time monitoring tools.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge 2: Long-term Log Management & Server Performance Optimization</h3>
                  <p className="mb-4 text-gray-700">
                    The system generated detailed logs for every API interaction, including request payloads, responses, and error events. While this was essential for debugging and traceability, the growing volume of logs over time started to impact server storage and overall performance.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">Solution:</h4>
                    <p className="text-gray-700">
                      To ensure long-term scalability and stability, I implemented a cron-based log maintenance system. Every 3 months, a scheduled job is executed to automatically purge outdated logs from the database and file system. The retention period was carefully set to balance traceability with performance, and the script was tested to run safely in production without downtime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-black">UI</h2>
            <div className="bg-white rounded-lg p-8 shadow">
              <div className="relative w-full max-w-4xl mx-auto">
                <img
                  src="/tabletmockup.png"
                  alt="PC Frame"
                  className="w-full"
                />
                <div className="absolute top-[8%] left-[7%] w-[86%] h-[78%] overflow-hidden rounded-xl">
                  <Swiper spaceBetween={30} pagination={{ clickable: true }}>
                    {["placeholder.jpg", "placeholder-logo.png"].map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={`/${img}`}
                          alt={`UI ${idx + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
