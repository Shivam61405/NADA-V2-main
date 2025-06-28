import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reports = [
  {
    id: "AID4560",
    name: "Jatin",
    time: "5 min ago",
    date: "20/05/2024",
    status: "See more",
  },
  {
    id: "AID4601",
    name: "Ritika Singh",
    time: "1 hour ago",
    date: "20/05/2024",
    status: "See more",
  },
  {
    id: "AID4654",
    name: "Jagjit Singh",
    time: "15 days ago",
    date: "20/05/2024",
    status: "See more",
  },
  {
    id: "AID4507",
    name: "Aryaan Mishra",
    time: "17 days ago",
    date: "20/05/2024",
    status: "See more",
  },
  {
    id: "AID4560",
    name: "Shivam Sharma",
    time: "1 month ago",
    date: "20/05/2024",
    status: "See more",
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">For further findings analyst reports</h1>
      </div>
      <Card className="bg-white shadow-sm">
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-semibold text-gray-700">Analyst Reports</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Athlete Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{report.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      <FileText className="mr-2 h-4 w-4" />
                      {report.status}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
