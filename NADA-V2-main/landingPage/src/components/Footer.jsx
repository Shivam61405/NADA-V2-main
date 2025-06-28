import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DVIMS</h3>
            <p className="text-gray-400">DOPING VIOLATION MANAGEMENT SYSTEM</p>
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <p className="text-gray-400">
              Ramp No. 02, Hall No. 103-104, First Floor,
              <br />
              Jawaharlal Nehru Stadium Complex,
              <br />
              Lodhi Road, New Delhi - 110003.
            </p>
          </div>
          <div>
  <h4 className="font-semibold mb-4">Contact</h4>
  <p className="text-blue-400">
    <a href="tel:+911124368274" className="hover:underline">
      +91-11-24368274
    </a>
  </p>
  <p className="text-blue-400">
    <a href="mailto:info.nada@nic.in" className="hover:underline">
      info.nada@nic.in
    </a>
  </p>
</div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/adjudication" className="hover:text-white">Adjudication Process</Link></li>
              <li><Link to="/registration" className="hover:text-white">NSFs Registration</Link></li>
              <li><Link to="/tenders" className="hover:text-white">Tenders</Link></li>
              <li><Link to="/rti" className="hover:text-white">RTI</Link></li>
              <li><Link to="/sitemap" className="hover:text-white">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

