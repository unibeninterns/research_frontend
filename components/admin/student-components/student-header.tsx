import type React from "react"
import { Search, Bell, User } from "lucide-react"

export function StudentHeader(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Student Management</h1>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 sm:flex-initial">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:w-64"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
