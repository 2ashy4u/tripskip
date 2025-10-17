'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">TripSkip</div>
          <div className="flex gap-4">
            <a href="/pricing" className="px-4 py-2 text-gray-700 hover:text-indigo-700 font-medium hidden sm:inline">
              Pricing
            </a>
            <a href="/signin" className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
              Sign In
            </a>
            <a href="/signup" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium">
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover unique listings from hosts worldwide. Book with confidence, travel with ease.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/signup" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-lg">
              Get Started as Guest
            </a>
            <a href="/signup?role=host" className="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 font-medium text-lg">
              List Your Property
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">Unique Listings</h3>
            <p className="text-gray-600">Browse thousands of verified listings from trusted hosts.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Book with confidence with our verified payment system.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-gray-600">Connect with hosts and travelers from around the world.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 TripSkip. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
