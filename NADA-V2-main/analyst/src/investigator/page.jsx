'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

const laboratories = [
  {
    name: 'National Dope Testing Laboratory',
    location: 'New Delhi',
    email: 'NDTL@labinfo.com',
    lidNumber: 'FBR1235476',
  },
  {
    name: 'National Anti Doping Laboratory',
    location: 'New Delhi zone 1',
    email: 'NADL@labinfo.com',
    lidNumber: 'FBR1235479',
  },
  {
    name: 'Dope Control Laboratory',
    location: 'New DELHI',
    email: 'DCL@labinfo.com',
    lidNumber: 'FBR1235476',
  },
]

const testResults = [
  { id: '#AID23', code: '#MS145464', format: 'PDF' },
  { id: '#AID23', code: '#RV126749', format: 'PDF' },
  { id: '#AID23', code: '#FB212562', format: 'PDF' },
  { id: '#AID23', code: '#OW103578', format: 'PDF' },
  { id: '#AID23', code: '#AR803481', format: 'PDF' },
]

const updatedReports = [
  { name: 'ABP', date: '27 March 2020, at 12:30 PM', status: 'Download' },
  { name: 'ABP Module', date: '27 March 2020, at 04:30 AM', status: 'Download' },
  { name: 'ABP', date: '26 March 2020, at 11:45 PM', status: 'See more' },
  { name: 'ABP', date: '26 March 2020, at 12:30 PM', status: 'See more' },
  { name: 'ABP', date: '26 March 2020, at 08:30 AM', status: 'See more' },
  { name: 'ABP', date: '26 March 2020, at 05:00 AM', status: 'Pending' },
]

export default function LaboratoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredLabs = laboratories.filter(lab =>
    lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lab.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 bg-gray-100 text-black">
      <h1 className="text-2xl font-semibold mb-6 text-black">Laboratories</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 flex flex-col justify-between bg-blue-500 text-white p-4 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold mb-4">Laboratories Authorized</h2>
              <div className="text-4xl font-bold mb-6">654</div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Search laboratories"
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Test Results</h2>
            <div className="space-y-4">
              {testResults.map((result, index) => (
                <div key={index} className="flex justify-between items-center border rounded-lg p-4">
                  <p className="text-sm">AID {result.id}</p>
                  <p className="text-sm">Code: {result.code}</p>
                  <a href="#" className="text-blue-500 underline">{result.format}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Laboratories</h2>
            <div className="space-y-4">
              {filteredLabs.map((lab, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{lab.name}</h3>
                  <p className="text-sm">Location: {lab.location}</p>
                  <p className="text-sm">Email: {lab.email}</p>
                  <p className="text-sm">LID Number: {lab.lidNumber}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Updated Reports</h2>
            <div className="space-y-4">
              {updatedReports.map((report, index) => (
                <div key={index} className="flex justify-between items-center border rounded-lg p-4">
                  <div>
                    <h3 className="font-semibold">{report.name}</h3>
                    <p className="text-sm">{report.date}</p>
                  </div>
                  <a href="#" className="text-blue-500 underline">{report.status}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
