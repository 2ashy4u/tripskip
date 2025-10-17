'use client'

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Stats */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Bookings</h3>
          <p className="text-3xl font-bold text-indigo-600">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Listings</h3>
          <p className="text-3xl font-bold text-indigo-600">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-indigo-600">$0</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
            Create Listing
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
            View Bookings
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium">
            Account Settings
          </button>
        </div>
      </div>
    </div>
  )
}
