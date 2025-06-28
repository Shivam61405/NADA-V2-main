import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Logo111Icon from '../logo111.png';
import Logo112Icon from '../logo112.png';
import Logo121Icon from '../logo121.png';
import Logo122Icon from '../logo122.png';

export function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="px-4">
        {/* Navigation Section with light yellow background and bold black text */}
        <div className="py-2 border-b bg-lightyellow">
          <nav className="flex justify-start space-x-6">
            <Link to="/home" className="text-sm font-bold text-black hover:text-gray-900">Home</Link>
            <Link to="/About" className="text-sm font-bold text-black hover:text-gray-900">About us</Link>
            <a href="/files/actRules.pdf" className="text-sm font-bold text-black hover:text-gray-900"
              download>
            Act and Rules</a>
            <Link to="/content" className="text-sm font-bold text-black hover:text-gray-900">Education Awareness</Link>
            <Link to="/whistle" className="text-sm font-bold text-black hover:text-gray-900">Whistle Blower</Link>
            {/* <Link to="/lab" className="text-sm font-bold text-black hover:text-gray-900">LAB</Link> */}
            
            <Link to="/signin" className="text-sm font-bold text-black hover:text-gray-900">Sign In</Link>
            
          </nav>
        </div>
        <div className="flex items-center justify-between w-full">
          {/* Left logos */}
          <div className="flex items-center gap-4">
            <img src={Logo111Icon} alt="Ministry Logo" className="h-24 w-auto" />
            <img src={Logo112Icon} alt="Agency Logo" className="h-24 w-auto" />
          </div>
          {/* Center search box */}
          <div className="flex justify-center flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          {/* Right logos */}
          <div className="flex items-center gap-4">
            <img src={Logo121Icon} alt="Ministry Logo" className="h-24 w-auto" />
            <img src={Logo122Icon} alt="Ministry Logo" className="h-24 w-auto" />
          </div>
        </div>
      </div>
    </header>
  );
}
