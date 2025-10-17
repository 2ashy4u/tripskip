'use client'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">TripSkip</div>
          <div className="flex gap-4 items-center">
            <a href="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium">Dashboard</a>
            <a href="/listings" className="text-gray-700 hover:text-indigo-600 font-medium">Listings</a>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
