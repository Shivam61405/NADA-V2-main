import React from 'react';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Cases</h2>
          <ul className="space-y-2">
            <li>Case #1234 - Under Investigation</li>
            <li>Case #5678 - Pending Review</li>
            <li>Case #9101 - Closed</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <div className="flex justify-center">
            <img
              src="https://www.chartjs.org/img/chartjs-logo.svg"
              alt="Statistics Chart"
              className="w-48 h-48"
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              New Investigation
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

