import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/Cartcontext'

const Productcard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col group hover:scale-[1.02] transition duration-300 border border-gray-800 relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-64 p-3 flex items-center justify-center bg-white relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition duration-300 group-hover:scale-105" 
          />
          <div className="absolute bottom-0 left-0 bg-orange-600 text-white px-4 py-1.5 font-extrabold text-lg rounded-tr-xl shadow-md">
            ₹{Number(product?.price).toFixed(2)}
          </div>
        </div>
      </Link>

      <div className="p-5 bg-gray-900 flex flex-col gap-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-base font-bold text-orange-400 group-hover:text-white transition-colors duration-200 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div>
          <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-orange-400 text-xs rounded-full font-semibold inline-block">
            {product.category}
          </span>
        </div>

        <button 
          onClick={() => addToCart && addToCart(product)}
          className="w-full mt-1 py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center space-x-2 transition duration-300 cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  )
}

export default Productcard
