'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Home, Upload } from 'lucide-react'

export function AppSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Investigation Reports",
      icon: Home,
      href: "/",
    },
    {
      title: "Upload Reports",
      icon: Upload,
      href: "/upload",
    },
  ]

  return (
    <div className="w-64 h-screen bg-gray-100 text-gray-800">
      <div className="p-4 border-b border-gray-200">
        <Link href="/" className="text-lg font-semibold">DVMS</Link>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-2 text-base ${
              pathname === item.href
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
