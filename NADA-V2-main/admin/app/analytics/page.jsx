import { Header } from '@/components/header'
import { BarChart, LineChart } from 'recharts'
import { FaRunning, FaBriefcase, FaChartLine, FaUsers } from 'react-icons/fa'

const stats = [
  {
    title: 'Athlete Registered for RTR',
    value: '281',
    change: '+12',
    icon: <FaRunning />,
  },
  {
    title: 'Cases solved',
    value: '2,300',
    change: '+4.5%',
    icon: <FaBriefcase />,
  },
  {
    title: 'Reports Added',
    value: '34k',
    change: '+11.4%',
    icon: <FaChartLine />,
  },
  {
    title: 'Investigators Active',
    value: '91',
    change: '+2',
    icon: <FaUsers />,
  },
]

const chartData = [
  { month: 'Apr', value: 100 },
  { month: 'May', value: 200 },
  { month: 'Jun', value: 150 },
  { month: 'Jul', value: 300 },
  { month: 'Aug', value: 200 },
  { month: 'Sep', value: 250 },
  { month: 'Oct', value: 400 },
  { month: 'Nov', value: 300 },
  { month: 'Dec', value: 350 },
]

const labReports = [
  { name: 'Nike V22 Running', reports: 82, date: '20/05/2024', type: 'ABP' },
  { name: 'Business Kit (Mug + Notebook)', reports: 12, date: '20/05/2024', type: 'Blood test' },
  { name: 'Black Chair', reports: 12, date: '20/05/2024', type: 'Urine test' },
  { name: 'Wireless Charger', reports: 12, date: '20/05/2024', type: 'ABP' },
  { name: 'Mountain Trip Kit (Camera + Backpack)', reports: 12, date: '20/05/2024', type: 'ABP' },
]

export default function AnalyticsPage() {
  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <Header title="Analytics" />
      <main className="p-6 mt-16 text-black">
        <div className="grid grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm flex items-center text-black">
              <div className="text-4xl text-blue-600 mr-4">{stat.icon}</div>
              <div>
                <p className="text-sm text-black">{stat.title}</p>
                <div className="flex items-end gap-2 mt-2">
                  <h3 className="text-2xl font-semibold text-black">{stat.value}</h3>
                  <span className="text-sm text-green-600">{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl text-black">
            <h3 className="font-semibold mb-4 text-black">AAF</h3>
            <p className="text-sm text-black mb-4">Adverse Analytical Findings</p>
            <div className="h-[300px]">
              <LineChart data={chartData} width={500} height={300}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl text-black">
            <h3 className="font-semibold mb-4 text-black">Reports Overview</h3>
            <div className="h-[300px]">
              <BarChart data={chartData} width={500} height={300}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm text-black">
            <h3 className="font-semibold mb-4 text-black">Lab Reports</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border text-black">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="py-2 px-4 text-left border text-black">Name</th>
                    <th className="py-2 px-4 text-left border text-black">Reports</th>
                    <th className="py-2 px-4 text-left border text-black">Date</th>
                    <th className="py-2 px-4 text-left border text-black">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {labReports.map((report, index) => (
                    <tr key={index} className="border-b text-black">
                      <td className="py-2 px-4 border text-black">{report.name}</td>
                      <td className="py-2 px-4 border text-black">{report.reports}</td>
                      <td className="py-2 px-4 border text-black">{report.date}</td>
                      <td className="py-2 px-4 border text-black">{report.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}