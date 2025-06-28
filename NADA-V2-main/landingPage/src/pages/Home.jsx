// import React from "react";

// import { Link, Navigate } from "react-router-dom";

// import tool1 from "../tool1.png";
// import tool2 from "../tool2.png";
// import tool3 from "../tool3.png";
// import tool4 from "../tool4.png";
// import tool5 from "../tool5.png";
// import tool6 from "../tool6.png";
// import tool7 from "../tool7.png";
// import reach1 from "../reach1.png";
// import reach2 from "../reach2.png";
// import reach3 from "../reach3.png";
// import invests1 from "../invests1.png";
// import invests2 from "../invests2.png";
// import invests3 from "../invests3.png";
// import smartsports1 from "../smartsports1.png";
// import smartsports2 from "../smartsports2.png";
// import smartsports3 from "../smartsports3.png";
// import {
//   Activity,
//   FileText,
//   FlaskRoundIcon as Flask,
//   UserCheck,
//   MapPin,
//   Scale,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Additional actions (e.g., logging)
//     console.log("Button clicked");
//     navigate("/whistle");
//   };
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Main Content */}
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section className="relative h-[600px] w-full">
//           <img
//             src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//             alt="Athletes running on track"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//             <h1 className="text-white text-7xl font-bold tracking-wider">
//               #PLAY FAIR
//             </h1>
//           </div>
//         </section>

//         {/* Doping Violation Investigation Management System Section */}
//         <section className="py-24 bg-[#f9f4ed]">
//           <div className="container mx-auto px-6 lg:px-12">
//             <h1 className="text-4xl lg:text-5xl font-bold text-left mb-6 leading-tight">
//               Doping Violation Investigation Management System
//             </h1>
//             <p className="text-lg text-left leading-relaxed mb-6">
//               Doping Violation Investigation Management System, India is an
//               autonomous body under the Ministry of Youth Affairs & Sports,
//               Government of India. DVIMS India implements the anti-doping
//               program in India and it is a secure online platform for
//               investigators to manage doping violation cases. It works towards
//               investigating and promoting clean sport practices in sports across
//               the country.
//             </p>
//             <a
//               href="/files/DVMS.pdf"
//               download
//               className="text-lg font-semibold text-black underline hover:text-blue-600 transition-colors"
//             >
//               READ MORE
//             </a>
//           </div>
//         </section>

//         {/* 3. Speak Up Section */}
//         <section className="py-16 bg-black text-white">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <h2 className="text-6xl font-bold mb-4">SPEAK UP!</h2>
//               </div>
//               <div className="md:w-1/2">
//                 <p className="text-lg mb-8">
//                   To ensure clean sports, DVIMS India seeks cooperation from all
//                   stakeholders. If you observe any doping related misconduct,
//                   report it immediately at speakup-nada[at]gov[dot]in. Your
//                   identity will be protected.
//                 </p>
//                 <button onClick={handleClick}className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
//                   REPORT NOW
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 4. Smart Sports Section */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-bold mb-8">
//               SMART SPORTS, CLEAN COMPETITION: AI-POWERED SOLUTION
//             </h2>
//             <p className="mb-8 text-lg">
//               Our AI-driven Doping Violation Case Management System leverages
//               machine learning algorithms to
//             </p>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-blue-500 p-6 rounded-lg text-white">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={smartsports1}
//                     className="h-12 w-auto"
//                     size={48}
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     Analyze vast amount of data from various sources
//                   </h3>
//                 </div>
//               </div>
//               <div className="bg-blue-500 p-6 rounded-lg text-white">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={smartsports2}
//                     className="h-12 w-auto"
//                     size={48}
//                     alt="Prediction"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     Predict potential doping cases
//                   </h3>
//                 </div>
//               </div>
//               <div className="bg-blue-500 p-6 rounded-lg text-white">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={smartsports3}
//                     alt="Insights"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     Provide investigators with actionable insights
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 5. Investigator User Guide */}
//         <section className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               INVESTIGATOR USER GUIDE
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={invests1}
//                     alt="Introduction to DVIMS"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     Introduction to DVIMS
//                   </h3>
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={invests2}
//                     alt="System Requirements"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     System Requirements
//                   </h3>
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={invests3}
//                     alt="Registration and Login Process"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     Registration and login Process
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 6. Athlete Toolkit */}
//         <section className="py-16 bg-black text-white">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
//               {/* Main Image */}
//               <div className="lg:w-1/3 flex justify-center">
//                 <img
//                   src={tool7}
//                   alt="Athlete Toolkit Main"
//                   className="w-full h-auto rounded-lg object-cover shadow-lg"
//                 />
//               </div>

//               {/* Title and Toolkit Items */}
//               <div className="lg:w-2/3">
//                 <h2 className="text-4xl font-bold mb-8 lg:mb-6 text-left">
//                   ATHLETE TOOLKIT
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {[
//                     { title: "Athlete profile analyses", icon: tool1 },
//                     { title: "Case management", icon: tool2 },
//                     { title: "Doping Control Process", icon: tool3 },
//                     { title: "Investigator Guidelines", icon: tool4 },
//                     { title: "Whereabouts", icon: tool5 },
//                     { title: "Anti-doping appeal panel", icon: tool6 },
//                   ].map((item, index) => (
//                     <Link
//                       to="#"
//                       key={index}
//                       className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700"
//                     >
//                       <img
//                         src={item.icon}
//                         alt={item.title}
//                         className="w-24 h-24 mb-6 rounded-lg object-contain"
//                       />
//                       <h3 className="text-lg font-semibold leading-snug">
//                         {item.title}
//                       </h3>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 7. Investigation Insights */}
//         <section className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-1/2 mb-8 md:mb-0">
//                 <h2 className="text-4xl font-bold mb-4">
//                   INVESTIGATION INSIGHTS
//                 </h2>
//                 <p className="text-lg mb-4">
//                   Our Doping Violation Investigation Management System (DVIMS)
//                   leverages AI-driven predictive analytics, evidence analysis,
//                   and athlete profiling to identify potential doping activity.
//                   This innovative system enables investigators to assess athlete
//                   risk scores and suspicious patterns, analyze documents,
//                   images, and videos for anomalies, and manage investigation
//                   workflow and track progress. By utilizing machine learning
//                   algorithms and integrating data from various sources, DVIMS
//                   enhances accuracy and efficiency, reducing human error and
//                   providing real-time insights and alerts.
//                 </p>
//                 <a
//                   href="/files/guidelines and rule.pdf"
//                   download
//                   className="text-blue-500 hover:underline uppercase tracking-wider font-semibold"
//                 >
//                   MORE
//                 </a>
//               </div>
//               <div className="md:w-1/2">
//                 <img
//                   src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
//                   alt="Investigation Insights"
//                   className="w-full h-auto rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 8. Reach Out Section */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               REACH OUT AND HELP US!
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-black text-white p-6 rounded-lg">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={reach1}
//                     alt="Helpline"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">HELPLINE</h3>
//                   <p>109-987-675</p>
//                 </div>
//               </div>
//               <div className="bg-black text-white p-6 rounded-lg">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={reach2}
//                     alt="User Guidelines"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     USER GUIDELINES
//                   </h3>
//                   <a
//                     href="/files/guidelines and rule.pdf"
//                     download
//                     className="text-blue-400 hover:underline"
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//               <div className="bg-black text-white p-6 rounded-lg">
//                 <div className="flex flex-col items-center text-center">
//                   <img
//                     src={reach3}
//                     alt="Become a Volunteer"
//                     className="w-24 h-24 mb-4 rounded-full"
//                   />
//                   <h3 className="text-xl font-semibold mb-2">
//                     BECAME A VOLUNTEER
//                   </h3>
//                   <a href="#" className="text-blue-400 hover:underline">
//                     Join Us
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import Logo1122 from '../Logo1122.png';

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Button clicked");
    navigate("/whistle");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7E7CE]">
      <main className="flex-grow">
        <section className="relative h-[800px] w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img 
                src={Logo1122} 
                alt="Agency Logo" 
                className="h-48 w-auto mb-4" 
                draggable="false" /* Prevent interaction */
              />
              <h1 className="text-black text-7xl font-bold tracking-wider">
                National Anti Doping Agency
              </h1>
              <h4 className="text-black text-2xl font-medium mt-4 text-center">
                A robust doping violation management system empowers sports integrity.
              </h4>
              <p className="mt-8 text-lg text-black text-center">
                By seamlessly detecting, investigating, and resolving anti-doping breaches,
                leveraging advanced AI, secure databases, and real-time analytics, it ensures
                transparency, efficiency, and fairness. This system fosters athlete accountability,
                promotes clean competition, and supports global efforts to eliminate doping in
                sports, safeguarding ethical standards.
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 w-full">
            <div className="overflow-hidden whitespace-nowrap">
              <a 
                href="#"
                className="text-blue-600 text-lg inline-block animate-marquee"
              >
                Important: Please check the latest updates here.
              </a>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}