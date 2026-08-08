import React from 'react'
import { Search, X } from 'lucide-react'

const Searchfilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl shadow-gray-800/50">
      <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800">
        <Search className="w-5 h-5 text-gray-500 ml-4 shrink-0" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm || ''}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 outline-none text-white bg-gray-800 placeholder-gray-500 text-base font-medium"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="mr-4 text-gray-400 hover:text-white p-1 hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Searchfilter
