import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reports = [
  {
    id: "AID6456",
    name: "Aaryan",
    time: "5 min ago",
    date: "20/05/2024",
    avatar: "/placeholder.svg",
    file: "/files/aa.docx" // Corrected file path
  },
  {
    id: "AID6491",
    name: "Ritika Singh",
    time: "1 hour ago",
    date: "20/05/2024",
    avatar: "/placeholder.svg",
    file: "/files/rr.docx" // Corrected file path
  },
  {
    id: "AID6494",
    name: "Vishal",
    time: "15 days ago",
    date: "20/05/2024",
    avatar: "/placeholder.svg",
    file: "/files/vv.docx" // Corrected file path
  },
  {
    id: "AID6497",
    name: "Aryaan Mishra",
    time: "17 days ago",
    date: "20/05/2024",
    avatar: "/placeholder.svg",
    file: "/files/rr.docx" // Corrected file path
  },
];

export default function AnalystReports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">For further findings analyst reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Analyst Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div
                key={`${report.id}-${index}`}  // Combining report.id with index to ensure uniqueness
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={report.avatar} alt={report.name} />
                    <AvatarFallback>{report.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <p className="text-sm text-muted-foreground">{report.time}</p>
                  </div>
                  <div className="ml-4 text-sm text-muted-foreground">
                    {report.id}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {report.date}
                  </span>
                  <a
                    href={report.file}
                    download
                    className="text-lg font-semibold text-black underline hover:text-blue-600 transition-colors"
                  >
                    <button className="text-sm text-primary hover:underline">
                      See more
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
