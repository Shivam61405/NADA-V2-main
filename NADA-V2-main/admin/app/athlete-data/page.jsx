'use client';

import { useEffect, useState } from 'react';
import { fetchAthletes } from '../state/api';

export default function AthleteDataPage() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAthleteData = async () => {
      try {
        const data = await fetchAthletes();
        console.log(data)
        setAthletes(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    
    getAthleteData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 font-sans">
      <h2 className="text-xl font-semibold mb-6 text-black">Updation</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Athlete Id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updates</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {athletes.map((athlete) => (
            <tr key={athlete._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{athlete.athlete_id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{athlete.created_at}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{athlete.athlete_name
              }</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{athlete.nationality}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">open</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 hover:text-indigo-900">
                <a
                  href={`/athlete-profile/${athlete._id}`}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  More
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
};
