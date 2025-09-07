"use client"

import type React from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const TutorHeader: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-lg border">
      <h1 className="text-2xl font-semibold text-gray-900">Tutors</h1>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input type="text" placeholder="Search" className="pl-10 w-full sm:w-64" />
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Add Tutor</Button>
      </div>
    </div>
  )
}

export default TutorHeader
