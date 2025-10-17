'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function ExplorePage() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [searchInput, setSearchInput] = useState('')
  const [markers, setMarkers] = useState<google.maps.Marker[]>([])

  // Initialize Google Map
  useEffect(() => {
    if (!mapRef.current) return

    const googleMap = new google.maps.Map(mapRef.current, {
      zoom: 12,
      center: { lat: 40.7128, lng: -74.006 }, // Default to NYC
      mapTypeControl: true,
      fullscreenControl: true,
      streetViewControl: true,
    })

    setMap(googleMap)
  }, [])

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!map || !searchInput.trim()) return

    const geocoder = new google.maps.Geocoder()

    geocoder.geocode({ address: searchInput }, (results, status) => {
      if (status === 'OK' && results?.[0]) {
        const location = results[0].geometry.location
        map.setCenter(location)
        map.setZoom(15)

        // Clear existing markers
        markers.forEach(marker => marker.setMap(null))

        // Add new marker
        const marker = new google.maps.Marker({
          map,
          position: location,
          title: searchInput,
        })

        setMarkers([marker])
      } else {
        alert('Could not find location: ' + searchInput)
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">TripSkip</div>
          <div className="flex gap-4">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
            <Link href="/signin" className="text-gray-700 hover:text-indigo-600 font-medium">Sign In</Link>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for a location, neighborhood, or address..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div
          ref={mapRef}
          style={{
            width: '100%',
            height: '600px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Info Section */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Listings</h2>
          <p className="text-gray-600">
            Use the search bar above to find listings in any location. Click on markers to view property details.
          </p>
        </div>
      </div>
    </div>
  )
}
