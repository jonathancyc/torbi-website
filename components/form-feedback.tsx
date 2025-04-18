import { CheckCircle, AlertCircle } from "lucide-react"

interface FormSubmissionFeedbackProps {
  status: "idle" | "success" | "error"
  error?: string
}

export default function FormSubmissionFeedback({ status, error }: FormSubmissionFeedbackProps) {
  if (status === "idle") return null

  if (status === "success") {
    return (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
          <p className="mt-2 text-sm text-green-700">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-medium text-red-800">There was a problem</h3>
          <p className="mt-2 text-sm text-red-700">{error || "Something went wrong. Please try again."}</p>
        </div>
      </div>
    )
  }

  return null
}
