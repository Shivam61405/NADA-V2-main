'use client'

import Image from 'next/image'

const athleteData = {
  name: 'Saurabh Parmar',
  sport: 'Weight Lifter',
  accountId: 'Athlete ID: A01AF23',
  caseId: 'Case ID: C10W23',
  sampleId: 'Sample ID: S01A54',
  achievements: [
    'National Gold Medalist',
    'Continental Podium Finisher',
    'Record Breaking Performance',
  ],
  connections: [
    { name: 'Sophie B', image: '/placeholder.svg' },
    { name: 'Anne Marie', image: '/placeholder.svg' },
    { name: 'Ivanna', image: '/placeholder.svg' },
    { name: 'Peterson', image: '/placeholder.svg' },
    { name: 'Nick Daniel', image: '/placeholder.svg' },
  ],
  tests: [
    { name: 'SCR', description: 'Sample Collection report', image: '/placeholder.svg' },
    { name: 'UTR', description: 'Urine Test Report', image: '/placeholder.svg' },
    { name: 'BTR', description: 'Blood Test Report', image: '/placeholder.svg' },
  ],
  profileInfo: {
    fullName: 'Ankur Sharma',
    dob: '20 Nov 1998',
    mobile: '(44) 123 1234 123',
    email: 'alexthompson@gmail.com',
    address: 'sector 10A, gurgaon',
    social: {
      facebook: '/placeholder.svg',
      twitter: '/placeholder.svg',
      instagram: '/placeholder.svg',
    },
    description: "Ankur Sharma is India's one of the promising young athletes, known for his weight lifting skills.",
  },
}

export default function AthleteDataPage() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-semibold mb-6 text-black">Athlete Data</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="relative h-48 bg-blue-600">
          <Image
            src="/mountains.jpg"
            alt="Mountains"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/placeholder.svg"
              alt={athleteData.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-md"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{athleteData.name}</h2>
              <p className="text-gray-500">{athleteData.sport}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">Platform Settings</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>{athleteData.accountId}</li>
                <li>{athleteData.caseId}</li>
                <li>{athleteData.sampleId}</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-2 text-gray-700">Achievements</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {athleteData.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">Profile Information</h3>
              <p className="text-sm text-gray-600 mb-2">{athleteData.profileInfo.description}</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><strong>Full Name:</strong> {athleteData.profileInfo.fullName}</li>
                <li><strong>DOB:</strong> {athleteData.profileInfo.dob}</li>
                <li><strong>Mobile:</strong> {athleteData.profileInfo.mobile}</li>
                <li><strong>Email:</strong> {athleteData.profileInfo.email}</li>
                <li><strong>Permanent Address:</strong> {athleteData.profileInfo.address}</li>
                <li><strong>Social Media:</strong></li>
                <li><Image src={athleteData.profileInfo.social.facebook} alt="Facebook" width={20} height={20} /> Facebook</li>
                <li><Image src={athleteData.profileInfo.social.twitter} alt="Twitter" width={20} height={20} /> Twitter</li>
                <li><Image src={athleteData.profileInfo.social.instagram} alt="Instagram" width={20} height={20} /> Instagram</li>
              </ul>
            </div>
          </div>
          <h3 className="font-semibold mt-4 mb-2 text-gray-700">Athlete Connections</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {athleteData.connections.map((connection, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={connection.image}
                  alt={connection.name}
                  width={32}
                  height={32}
                  className="rounded-full border border-gray-300"
                />
                <span className="text-sm text-gray-600">{connection.name}</span>
              </div>
            ))}
          </div>
          <h3 className="font-semibold mt-4 mb-2 text-gray-700">Test and Results</h3>
          <div className="grid grid-cols-3 gap-4">
            {athleteData.tests.map((test, index) => (
              <div key={index} className="text-center">
                <Image
                  src={test.image}
                  alt={test.name}
                  width={100}
                  height={100}
                  className="rounded-lg mb-2"
                />
                <h4 className="font-semibold text-gray-700">{test.name}</h4>
                <p className="text-sm text-gray-600">{test.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
