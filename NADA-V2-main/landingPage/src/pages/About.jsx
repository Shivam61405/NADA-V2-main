
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo1122 from '../Logo1122.png';

import { Link } from "react-router-dom";
export default function Home() {
  // const handleClick = () => {
  //   // Create a link element to trigger the download
  //   const link = document.createElement('a');
  //   link.href = DVMSPDF; // Reference the imported PDF file
  //   link.download = "DVMS.pdf"; // Set the default file name
  //   link.click();
  // };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#F7E7CE]">
      <main className="flex-grow">
        <section className="relative h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-black text-6xl font-bold tracking-wider mb-6">
                Doping Violation Investigation Management System
              </h1>
              <p className="text-black text-xl font-medium text-center mb-6 px-4 max-w-3xl">
                Doping Violation Investigation Management System, India is an autonomous body under the Ministry of Youth Affairs & Sports, Government of India. DVIMS India implements the anti-doping program in India and it is a secure online platform for investigators to manage doping violation cases. It works towards investigating and promoting clean sport practices in sports across the country.
              </p>
              {/* <button
                onClick={handleClick}
                className="mt-4 bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-700"
              >
                Read More
              </button> */}
              <a
              href="/files/DVMS.pdf"
              download
              className="text-lg font-semibold text-black underline hover:text-blue-600 transition-colors"
            >
               READ MORE
             </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
