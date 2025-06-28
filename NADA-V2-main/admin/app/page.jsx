'use client'

import { useState } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'

const stats = [
  { title: 'Athlete Registered for RTR', value: '281', change: '+12' },
  { title: 'Cases solved', value: '2,300', change: '+4.5%' },
  { title: 'Reports Added', value: '34k', change: '+11.4%' },
  { title: 'Investigators Active', value: '91', change: '+2' },
]

const chartData = [
  { month: 'Apr', AAF: 100, cases: 150 },
  { month: 'May', AAF: 200, cases: 200 },
  { month: 'Jun', AAF: 150, cases: 180 },
  { month: 'Jul', AAF: 300, cases: 250 },
  { month: 'Aug', AAF: 200, cases: 220 },
  { month: 'Sep', AAF: 250, cases: 300 },
  { month: 'Oct', AAF: 400, cases: 380 },
  { month: 'Nov', AAF: 300, cases: 320 },
  { month: 'Dec', AAF: 350, cases: 400 },
]

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('AAF')

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-600">{stat.title}</p>
            <div className="flex items-end gap-2 mt-2">
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
              <span className="text-sm text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">AAF</h3>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 rounded ${activeTab === 'AAF' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
                onClick={() => setActiveTab('AAF')}
              >
                AAF
              </button>
              <button
                className={`px-3 py-1 rounded ${activeTab === 'Officers' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
                onClick={() => setActiveTab('Officers')}
              >
                Officers
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Adverse Analytical Findings</p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="AAF" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Case Reports</h3>
          <p className="text-sm text-gray-600 mb-4">Track case reports</p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cases" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

