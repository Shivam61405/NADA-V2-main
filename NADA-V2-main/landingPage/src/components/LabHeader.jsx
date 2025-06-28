import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function LabHeader() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-14 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link
            to="/lab/info"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/lab/info' && 'text-blue-600'}`}
          >
            Laboratories Information
          </Link>
          <Link
            to="/lab/athlete"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/lab/athlete' && 'text-blue-600'}`}
          >
            Athlete Profile
          </Link>
          <Link
            to="/lab/upload"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/lab/upload' && 'text-blue-600'}`}
          >
            Upload report
          </Link>
        </div>
      </div>
    </header>
  );
}
