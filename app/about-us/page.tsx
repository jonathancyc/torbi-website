"use client"

import Header from "@/components/header"
import Link from "next/link"

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* About Us Hero Section */}
      <header className="relative overflow-hidden bg-[#003049] pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="absolute top-0 right-0 -mt-16 opacity-10">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c2"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c2)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
              Meet the Team Behind Torbi
            </h1>
            <p className="text-base text-white text-opacity-90 max-w-3xl mx-auto">
              We're a group of passionate UC Berkeley students combining our knowledge of chemistry and computer science
              to make learning more accessible.
            </p>
          </div>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-24 bg-[#F2F7F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="max-w-3xl mx-auto text-gray-700">
              <p className="mb-4">
                Torbi began as a project in our Advanced Chemistry Visualization course at UC Berkeley. Frustrated by
                the limitations of traditional chemistry education tools, we set out to create something that would make
                complex molecular concepts more intuitive and engaging.
              </p>
              <p className="mb-4">
                What started as a class project quickly evolved into something bigger as we saw how our fellow students
                responded to our early prototypes. Chemistry professors took notice, and with their encouragement and
                guidance, we expanded our vision to create a comprehensive learning platform.
              </p>
              <p>
                Today, we're committed to making chemistry more accessible to students everywhere, combining rigorous
                scientific accuracy with intuitive design and interactive learning experiences. Our team continues to
                grow as we work toward our mission of transforming how chemistry is taught and understood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} Torbi. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-300 hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white">
                Privacy
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
