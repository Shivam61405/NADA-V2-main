import { Inter } from 'next/font/google'
import { AppSidebar } from "@/components/sidebar"
import { Search } from 'lucide-react'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dvms-background`}>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1">
            <header className="bg-white h-16 flex items-center px-6 shadow-sm">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dvms-blue focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </header>
            <main className="p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

