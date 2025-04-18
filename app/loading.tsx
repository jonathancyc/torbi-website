export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F2F7F2] flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003049]"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}
