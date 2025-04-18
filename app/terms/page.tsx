"use client"

import Header from "@/components/header"
import Link from "next/link"

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

            <div className="prose prose-lg">
              <p>Last updated: April 13, 2025</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Torbi. These Terms of Service govern your use of our website and services. By accessing or
                using our services, you agree to be bound by these Terms.
              </p>

              <h2>2. Using Our Services</h2>
              <p>
                You must follow any policies made available to you within the Services. You may use our Services only as
                permitted by law. We may suspend or stop providing our Services to you if you do not comply with our
                terms or policies or if we are investigating suspected misconduct.
              </p>

              <h2>3. Privacy</h2>
              <p>
                Our{" "}
                <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800">
                  Privacy Policy
                </Link>{" "}
                explains how we treat your personal data and protect your privacy when you use our Services.
              </p>

              <h2>4. Content Responsibility</h2>
              <p>
                Our Services display content that is not Torbi's. This content is the sole responsibility of the entity
                that makes it available. We may review content to determine whether it is illegal or violates our
                policies, and we may remove or refuse to display content.
              </p>

              <h2>5. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please{" "}
                <Link href="/contact" className="text-indigo-600 hover:text-indigo-800">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

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
