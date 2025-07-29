import Link from "next/link"
import { ArrowLeft, Instagram, Mail, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">Contact me</h1>
            <p className="text-xl text-gray-600">I need money and friends ...</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-600">
                Feel free to reach out to me through any of these platforms. I'm always open to discussing new
                opportunities, collaborations, or just having a friendly chat!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Instagram className="w-12 h-12 text-pink-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-pink-500 transition-colors">
                    Instagram
                  </h3>
                  <p className="text-gray-600">@april_dev</p>
                </div>
              </a>

              <a
                href="mailto:april@example.com"
                className="group p-8 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <Mail className="w-12 h-12 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">Email</h3>
                  <p className="text-gray-600">april@example.com</p>
                </div>
              </a>

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
                  <h3 className="text-xl font-bold text-black group-hover:text-blue-500 transition-colors">LinkedIn</h3>
                  <p className="text-gray-600">april-developer</p>
                </div>
              </a>
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-500">Looking forward to hearing from you! 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
