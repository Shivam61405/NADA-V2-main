'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart2, FlaskRoundIcon as Flask, User, Users, FileText } from 'lucide-react'

const navItems = [
  { title: 'Analytics', icon: BarChart2, href: '/' },
  { title: 'Laboratories', icon: Flask, href: '/laboratories' },
  { title: 'Athlete Data', icon: User, href: '/athlete-data' },
  { title: 'Investigator', icon: Users, href: '/investigator' },
  { title: 'Case Insight', icon: FileText, href: '/case-insight' },
  { title: 'Athelete Profile', icon: FileText, href: '/athlete-profile' }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r h-screen">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-blue-600">DVMS</span>
        </Link>
      </div>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

