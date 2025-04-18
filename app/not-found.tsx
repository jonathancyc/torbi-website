import Link from "next/link"
import Header from "@/components/header"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F2F7F2]">
      <Header />

      <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 -mt-16">
        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link
          href="/"
          className="px-5 py-2.5 bg-gradient-to-r from-[#003049] to-[#004066] text-white font-medium rounded-md shadow-sm hover:from-[#002539] hover:to-[#003556] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003049] transition-all duration-200"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  )
}
