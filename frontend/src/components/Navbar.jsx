import { Link } from "react-router-dom"
import { PlusIcon } from "lucide-react"

const Navbar = () => {
  return (
    <header className="bg-slate-50 shadow-xl">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-mono tracking-tighter text-yellow-600">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link
              to="/create"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-700 transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
