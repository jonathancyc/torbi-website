"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Link from "next/link"
import { Mail, MessageSquare, MapPin } from "lucide-react"
import FormSubmissionFeedback from "@/components/form-feedback"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the data to your backend
      // For demo purposes, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
      setSubmitError("There was a problem sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about Torbi? Want to join our beta program? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="bg-[#F2F7F2] rounded-xl p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="mt-1 text-gray-600">info@torbi.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                      <p className="mt-1 text-gray-600">Available Monday-Friday, 9am-5pm PT</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Location</h3>
                      <p className="mt-1 text-gray-600">Berkeley, CA 94720</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <FormSubmissionFeedback status={submitStatus} error={submitError} />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      disabled={isSubmitting || submitStatus === "success"}
                    />
                  </div>

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
                      disabled={isSubmitting || submitStatus === "success"}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      disabled={isSubmitting || submitStatus === "success"}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "success"}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#003049] to-[#004066] text-white font-medium rounded-md shadow-sm hover:from-[#002539] hover:to-[#003556] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003049] transition-all duration-200 disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : submitStatus === "success" ? "Message Sent!" : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
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
