import { ZapIcon } from "lucide-react"

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-slate/10 border border-slate/30 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center p-6">
                <div className="shrink-0 bg-slate/20 rounded-full p-4 mb-4 md:mb-0">
                    <ZapIcon className="h-12 w-12 text-yellow-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
                    <p className="text-slate-content mb-1">
                        You've made too many requests in a short period. Please wait a moment.
                    </p>
                    <p className="text-sm text-slate-content-70">
                        Try again in a few seconds for the best experience.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RateLimitedUI