import { Search, HelpCircle } from 'lucide-react'

export function Header() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <HelpCircle className="w-5 h-5 text-gray-600" />
      </button>
    </header>
  )
}

