'use client'

import { useState } from "react"
import { CalendarIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function UploadReports() {
  const [date, setDate] = useState()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Upload Reports</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white shadow-sm">
          <CardHeader className="border-b bg-gray-100">
            <CardTitle className="text-lg font-semibold text-blue-800">Report Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-gray-50">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="athleteId" className="text-gray-600">Athlete Id</Label>
                <Input id="athleteId" placeholder="Enter athlete ID" className="border-gray-300 bg-white text-gray-800" />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-600">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-300 bg-white text-gray-800",
                        !date && "text-gray-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="file" className="text-gray-600">Upload File</Label>
                <Input id="file" type="file" className="border-gray-300 bg-white text-gray-800" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="caseReport" className="text-gray-600">Case Report</Label>
                <Input id="caseReport" className="border-gray-300 bg-white text-gray-800" />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-sm">
          <CardHeader className="border-b bg-gray-100">
            <CardTitle className="text-lg font-semibold text-blue-800">Reports Description</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6 bg-gray-50">
            {["#12", "#13", "#14"].map((caseId) => (
              <div key={caseId} className="space-y-2">
                <h3 className="font-medium text-gray-800">Case Id {caseId}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">Location:</div>
                  <div>New Delhi</div>
                  <div className="text-gray-600">Email Address:</div>
                  <div>jatin@burrito.com</div>
                  <div className="text-gray-600">Cid Number:</div>
                  <div>CID123456</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Reports section */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="border-b bg-gray-100">
            <CardTitle className="text-lg font-semibold text-blue-800">Reports</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6 bg-gray-50">
            {["#101", "#102", "#103"].map((reportId) => (
              <div key={reportId} className="space-y-2">
                <h3 className="font-medium text-gray-800">Report Id {reportId}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">PDF:</div>
                  <div><a href="#" className="text-blue-600 hover:underline">View PDF</a></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* Updated Reports section */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="border-b bg-gray-100">
            <CardTitle className="text-lg font-semibold text-blue-800">Updated Reports</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6 bg-gray-50">
            {["#21", "#22", "#23"].map((updatedReportId) => (
              <div key={updatedReportId} className="space-y-2">
                <h3 className="font-medium text-gray-800">Updated Report Id {updatedReportId}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">Timestamp:</div>
                  <div>2024-12-12 14:57</div>
                  <div className="text-gray-600">Download:</div>
                  <div><a href="#" className="text-red-600 hover:underline" >Download Link</a></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}