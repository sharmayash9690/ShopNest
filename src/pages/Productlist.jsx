import React, { useState } from 'react'
import Searchfilter from '../components/Searchfilter'
import Categoryfilter from '../components/Categoryfilter'
import Productcard from '../components/Productcard'
import { useCart } from '../context/Cartcontext'
import { PackageSearch } from 'lucide-react'

const Productlist = () => {
  const { products } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = (products || []).filter((product) => {
    const query = searchTerm.trim().toLowerCase()

    // If search term is present, search across all items
    if (query) {
      const normalizedQuery = query.replace(/macbook/gi, 'mackbook').replace(/mac/gi, 'mack')
      const name = product.name?.toLowerCase() || ''
      const desc = product.description?.toLowerCase() || ''
      const cat = product.category?.toLowerCase() || ''

      return (
        name.includes(query) ||
        name.includes(normalizedQuery) ||
        desc.includes(query) ||
        cat.includes(query)
      )
    }

    // Otherwise filter by selected category
    return (
      selectedCategory === 'All' ||
      product.category?.toLowerCase() === selectedCategory.toLowerCase()
    )
  })

  const handleReset = () => {
    setSearchTerm('')
    setSelectedCategory('All')
  }

  return (
    <div className="container mx-auto px-4 md:px-8 pt-8 min-h-[70vh]">
      <Searchfilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Categoryfilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      <div className="flex items-center justify-between my-6">
        <h2 className="text-2xl font-extrabold text-white">
          {selectedCategory === 'All' ? 'Featured Gear' : `${selectedCategory}s`} ({filteredProducts.length} Items)
        </h2>
        {(searchTerm || selectedCategory !== 'All') && (
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-orange-400 hover:text-orange-300 underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Productcard key={product.id || index} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center my-8 max-w-md mx-auto shadow-xl flex flex-col items-center">
          <PackageSearch className="w-12 h-12 text-orange-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No Products Found</h3>
          <p className="text-gray-400 text-sm mb-6">
            We couldn't find anything matching your search or selected category.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase rounded-xl transition duration-200 cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default Productlist
