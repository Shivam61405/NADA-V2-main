'use client'

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'

const activityData = [
  { day: 'M', value: 50 },
  { day: 'T', value: 20 },
  { day: 'W', value: 10 },
  { day: 'T', value: 22 },
  { day: 'F', value: 50 },
  { day: 'S', value: 10 },
  { day: 'S', value: 40 },
]

const investigatorRatioData = [
  { name: 'In Investigation', value: 170 },
  { name: 'Other', value: 30 },
]

const caseRatioData = [
  { name: 'Unsolved', value: 71 },
  { name: 'Paused', value: 94 },
  { name: 'Ongoing', value: 151 },
  { name: 'Solved', value: 127 },
  { name: 'Other', value: 28 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function InvestigatorPage() {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6 text-black">Investigator</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Active</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4C51BF" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Investigators Active</h2>
            <button className="text-blue-600">View</button>
          </div>
          <div className="text-center mb-4">
            <p className="text-4xl font-bold text-blue-600">91</p>
            <p className="text-sm text-gray-600">Last 7 days</p>
          </div>
          <div className="mt-4 space-y-2">
            {['Mr. Prakesh Rao - Doping Control Officer', 'Mr. Raghav Singh - Doping Control Officer', 'Mr. Jatin Kumar - Forensic Investigator'].map((name, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-gray-800">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Updates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {[
            { title: 'Investigators', value: 21 },
            { title: 'Collaborations', value: 44 },
            { title: 'Investigation Reports', value: 7 },
            { title: 'Laboratory Reports', value: 17 },
          ].map((update, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-4">{update.title}</h2>
              <p className="text-2xl font-bold">{update.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Investigators Ratio</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={investigatorRatioData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={140}
                  fill="#4C51BF"
                  dataKey="value"
                  cornerRadius={10}
                >
                  {investigatorRatioData.map((entry, index) => (
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
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Ratio of Cases</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={caseRatioData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={140}
                  fill="#4C51BF"
                  dataKey="value"
                  cornerRadius={10}
                >
                  {caseRatioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Investigation Reports</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {['Case Report #23', 'Case Report #27', 'Case Report #29', 'Case Report #67'].map((report, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-4">{report}</h2>
              <p className="text-gray-600">Updated: 2 days ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
