"use client"

import Header from "@/components/header"
import Link from "next/link"

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg">
              <p>Last updated: April 13, 2025</p>

              <h2>1. Information We Collect</h2>
              <p>We collect information to provide better services to our users. This includes:</p>
              <ul>
                <li>Information you provide to us (such as name, email address, academic information)</li>
                <li>Information we get from your use of our services (log information, device information)</li>
              </ul>

              <h2>2. How We Use Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to develop new ones,
                and to protect Torbi and our users.
              </p>

              <h2>3. Information Sharing</h2>
              <p>
                We do not share personal information with companies, organizations, or individuals outside of Torbi
                except in the following cases:
              </p>
              <ul>
                <li>With your consent</li>
                <li>For legal reasons</li>
                <li>With our service providers</li>
              </ul>

              <h2>4. Changes to This Policy</h2>
              <p>
                We may change this privacy policy from time to time. We will provide notice of any changes on this page.
              </p>

              <h2>5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please{" "}
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
