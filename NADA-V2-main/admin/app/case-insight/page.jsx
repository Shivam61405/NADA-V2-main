'use client'

import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import Image from 'next/image'

const caseData = {
  totalCases: 450,
  solvedCases: 85,
  violationTypes: [
    { type: 'Presence', count: 6 },
    { type: 'Use', count: 89 },
    { type: 'Attempted Use', count: 2 },
    { type: 'Trafficking', count: 2 },
  ],
  athletes: [
    { name: 'Sophie B.', violation: 'Use', image: '/placeholder.svg' },
    { name: 'Anne Marie', violation: 'Trafficking', image: '/placeholder.svg' },
    { name: 'Ivanna', violation: 'Attempted use', image: '/placeholder.svg' },
    { name: 'Peterson', violation: 'Attempted use', image: '/placeholder.svg' },
    { name: 'Nick Daniel', violation: 'Attempted use', image: '/placeholder.svg' },
  ],
  laboratories: [
    { name: 'Lab A', testsConducted: 120, positiveResults: 5 },
    { name: 'Lab B', testsConducted: 200, positiveResults: 10 },
    { name: 'Lab C', testsConducted: 150, positiveResults: 7 },
  ],
}

const violationRatioData = [
  { name: 'Use', value: 89 },
  { name: 'Presence', value: 6 },
  { name: 'Trafficking', value: 2 },
  { name: 'Attempted use', value: 2 },
]

const caseAnalyticsData = [
  { month: 'Apr', cases: 280 },
  { month: 'May', cases: 300 },
  { month: 'Jun', cases: 400 },
  { month: 'Jul', cases: 380 },
  { month: 'Aug', cases: 300 },
  { month: 'Sep', cases: 380 },
  { month: 'Oct', cases: 450 },
  { month: 'Nov', cases: 400 },
  { month: 'Dec', cases: 500 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function CaseInsightPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-black">Case Insight</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="flex space-x-6">
            <div className="bg-black text-white rounded-xl shadow-sm p-6 flex-1">
              <h2 className="text-xl mb-2">Total Cases</h2>
              <p className="text-4xl font-bold">{caseData.totalCases}</p>
            </div>
            <div className="bg-blue-600 text-white rounded-xl shadow-sm p-6 flex-1">
              <h2 className="text-xl mb-2">Cases Solved</h2>
              <p className="text-4xl font-bold">{caseData.solvedCases}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Ratio of Violation</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={violationRatioData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {violationRatioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Case Analytics</h2>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={caseAnalyticsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cases" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 text-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl mb-2">Type of Violation</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {caseData.violationTypes.map((violation, index) => (
                <div key={index} className="bg-gray-700 rounded p-2">
                  <p className="text-sm">{violation.type}</p>
                  <p className="text-lg font-semibold">{violation.count.toString().padStart(2, '0')}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">Athletes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseData.athletes.map((athlete, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-100 rounded-lg p-4">
                  <Image
                    src={athlete.image}
                    alt={athlete.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-black">{athlete.name}</h3>
                    <p className="text-sm text-black">Violation: {athlete.violation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
