"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentType: "",
    graduationYear: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Using the Google Apps Script URL
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbwk55dFyvTf5rzza8PZ6TZJPeetDG8NH5rvEPQuOtbk3xVTZ5Li1PBu3-GIhG_VpZqdug/exec"

      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors", // Important for CORS issues with Google Apps Script
      })

      // Show success message
      alert("Thank you for your interest! We'll be in touch soon.")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        studentType: "",
        graduationYear: "",
      })
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitError("There was a problem submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header is now a separate component */}
      <Header />

      {/* Hero Section - Reduced vertical padding by another 10% */}
      <header className="relative overflow-hidden bg-[#003049] pt-25 pb-25 sm:pt-40 sm:pb-40">
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/5 flex flex-col justify-center h-full">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Chemistry made simple to see and understand
                </h1>
                <p className="text-base sm:text-lg text-white text-opacity-90 max-w-2xl">
                  Torbi helps students break down complex chemistry with guided visuals and intuitive tools to develop a
                  deeper understanding
                </p>
              </div>

              {/* Get Started button */}
              <div className="mt-8">
                <a
                  href="#get-started-form"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-[#F2F7F2] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F2F7F2] transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("get-started-form")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Video demo - Fixed to fill container */}
            <div className="lg:w-3/5 flex flex-col relative">
              <div className="relative overflow-visible h-full flex flex-col justify-center">
                <div className="rounded-2xl shadow-xl overflow-hidden mb-4 relative z-10 w-full h-full">
                  {/* Fixed video container to properly fill space */}
                  <div className="w-full h-0 pb-[56.25%] relative bg-gray-800 rounded-xl">
                    <iframe
                      src="https://youtu.be/OnJPpW33fZY"
                      title="Torbi Demo V1"
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <p className="text-center text-white text-sm mt-2">Torbi Demo V1</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Get Started Form Section */}
      <section id="get-started-form" className="py-24 bg-[#F2F7F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Try Our Demo</h2>
              <p className="text-gray-600 mt-2 text-sm font-medium">
                Session 2025, April 10 - 30th | Last Chance to Register
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8">
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">{submitError}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Student Type Dropdown */}
                <div>
                  <label htmlFor="studentType" className="block text-sm font-medium text-gray-700 mb-1">
                    What type of student are you?
                  </label>
                  <select
                    id="studentType"
                    name="studentType"
                    value={formData.studentType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="highSchool">High School Student</option>
                    <option value="undergraduate">Undergraduate Student</option>
                    <option value="graduate">Graduate Student</option>
                    <option value="teacher">Teacher/Professor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Graduation Year */}
                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Graduation Year
                  </label>
                  <select
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  >
                    <option value="" disabled>
                      Select a year
                    </option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="notApplicable">Not Applicable</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#003049] to-[#004066] text-white font-medium rounded-md shadow-sm hover:from-[#002539] hover:to-[#003556] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003049] transition-all duration-200 disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

            {/* V2 Information */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Currently, we are in the process of building V2 which will include interactive features like
                step-by-step visualization of chemical reactions for users to click through. This enhanced version will
                allow students to explore molecular structures and chemical processes at their own pace.
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