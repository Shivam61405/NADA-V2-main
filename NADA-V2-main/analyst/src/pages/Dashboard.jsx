import React from "react";
import Header from "../components/Header"; // Import the Header component
import { Box, Typography, Button } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Pie as ChartPie } from "react-chartjs-2";
import "chart.js/auto";

const dataBar = [
  { name: "Sat", Cleared: 10, Suspicious: 15 },
  { name: "Sun", Cleared: 12, Suspicious: 18 },
  { name: "Mon", Cleared: 8, Suspicious: 20 },
  { name: "Tue", Cleared: 15, Suspicious: 10 },
  { name: "Wed", Cleared: 5, Suspicious: 25 },
  { name: "Thu", Cleared: 10, Suspicious: 15 },
  { name: "Fri", Cleared: 9, Suspicious: 19 },
];

const dataLine = [
  { name: "Jul", Cases: 15 },
  { name: "Aug", Cases: 20 },
  { name: "Sep", Cases: 18 },
  { name: "Oct", Cases: 25 },
  { name: "Nov", Cases: 22 },
  { name: "Dec", Cases: 30 },
];

const pieData = {
  labels: ["False Positive", "Suspicious Cases", "Cases Solved", "Ongoing Cases"],
  datasets: [
    {
      data: [10, 20, 30, 40],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    },
  ],
};

const Dashboard = () => {
  return (
    <Box display="flex" bgcolor="#f0f2f5" minHeight="100vh">
      <Box flex="1" p={2}>
        <Header title="Dashboard" />
        <Box display="grid" gap={2} gridTemplateColumns="repeat(12, 1fr)" mt={2}>
          {/* Updated Cases section */}
          <Box
            bgcolor="#3B82F6"
            borderRadius={4}
            boxShadow={1}
            gridColumn="span 4"
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
              <Box display="flex" justifyContent="flex-start" alignItems="center" mt="auto">
                <Typography color="white" variant="h2">
                  27
                </Typography>
                <Typography color="white" variant="h6" style={{ marginLeft: "14px" }}>
                  cases
                </Typography>
              </Box>
              <Link to="/cases" style={{ textDecoration: "none", alignSelf: "flex-start" }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ borderRadius: "10px", marginTop: "8px" }}
                >
                  More
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            bgcolor="white"
            borderRadius={4}
            boxShadow={1}
            gridColumn="span 4"
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="column" justifyContent="space-between" flexGrow={1}>
              <Box display="flex" justifyContent="flex-start" alignItems="center" mt="auto">
                <Typography color="textSecondary" variant="h2">
                  7
                </Typography>
                <Typography variant="h6" style={{ marginLeft: "14px" }}>
                  cases Solved
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                style={{ alignSelf: "flex-start", borderRadius: "10px", marginTop: "8px" }}
              >
                More
              </Button>
            </Box>
          </Box>
          {/* Updates section */}
          <Box bgcolor="white" borderRadius={4} boxShadow={1} gridColumn="span 4" p={2}>
            <Typography fontWeight="bold" variant="h6">
              Updates
            </Typography>
            <Box display="flex" flexDirection="column" mt={2} gap={2}>
              <Link to="/athlete-information" style={{ width: "100%" }}>
                <Button variant="contained" fullWidth>
                  Athlete Information
                </Button>
              </Link>
              <Link to="/caselist" style={{ width: "100%" }}>
                <Button variant="contained" fullWidth>
                  Case Report
                </Button>
              </Link>
            </Box>
          </Box>
          {/* Bar Chart */}
          <Box
            bgcolor="white"
            borderRadius={4}
            boxShadow={1}
            gridColumn="span 8"
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography fontWeight="bold" variant="h6" mb={2}>
              Athlete performance Report
            </Typography>
            <BarChart data={dataBar} height={350} width={600}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Cleared" fill="#FF0000" radius={[10, 10, 0, 0]} />
              <Bar dataKey="Suspicious" fill="#add8e6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </Box>
          {/* Pie Chart */}
          <Box
            bgcolor="white"
            borderRadius={4}
            boxShadow={1}
            gridColumn="span 4"
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography fontWeight="bold" variant="h6" mb={2}>
              Case management
            </Typography>
            <ChartPie data={pieData} />
          </Box>
          {/* New Athletes Section */}
          <Box bgcolor="white" borderRadius={4} boxShadow={1} gridColumn="span 6" p={2}>
            <Typography fontWeight="bold" variant="h6">
              New Athletes
            </Typography>
            <Box display="flex" mt={2} gap={3} justifyContent="space-between" flexWrap="wrap">
              {/* Athlete 1 */}
              <Box
                textAlign="center"
                sx={{
                  "&:hover": { transform: "scale(1.05)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" },
                  transition: "0.3s",
                }}
              >
                <Link to="/athlete-profile2">
                  <img
                    alt="Saurabh Singh"
                    src="https://storage.googleapis.com/a1aa/image/EgxNNzpafNwNACvMeyjK3MDU9cnfU1mX4Q5Hw7rbfdsFmFVPB.jpg"
                    height="150"
                    width="150"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                  <Typography fontWeight="bold" mt={1}>
                    Saurabh Singh
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Runner
                  </Typography>
                </Link>
              </Box>
              {/* Athlete 2 */}
              <Box
                textAlign="center"
                sx={{
                  "&:hover": { transform: "scale(1.05)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" },
                  transition: "0.3s",
                }}
              >
                <Link to="/athlete-profile2">
                  <img
                    alt="Chavi Deswal"
                    src="https://storage.googleapis.com/a1aa/image/ZF5mZjvO6gp4Ed579iS8SURceQXqrQL23DkhxG6aApUyso6JA.jpg"
                    height="150"
                    width="150"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                  <Typography fontWeight="bold" mt={1}>
                    Chavi Deswal
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Swimmer
                  </Typography>
                </Link>
              </Box>
              {/* Athlete 3 */}
              <Box
                textAlign="center"
                sx={{
                  "&:hover": { transform: "scale(1.05)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" },
                  transition: "0.3s",
                }}
              >
                <Link to="/athlete-profile2">
                  <img
                    alt="Jatin Nehra"
                    src="https://storage.googleapis.com/a1aa/image/eEwXZvpL4kUgRamVpIY9GJ7lQki5fxNttI7VyREsRvGjZR1TA.jpg"
                    height="150"
                    width="150"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                  <Typography fontWeight="bold" mt={1}>
                    Jatin Nehra
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    Cyclist
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box bgcolor="white" borderRadius={4} boxShadow={1} gridColumn="span 6" p={2}>
            <Typography fontWeight="bold" variant="h6">
              Cases Solved
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Cases"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
