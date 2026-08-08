import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { initialProducts } from '../data/product'
import { ChevronLeft, ShoppingCart, Tag, Zap } from 'lucide-react'
import { useCart } from '../context/Cartcontext'

const Productdetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const { addToCart } = useCart()

  useEffect(() => {
    setProduct(initialProducts.find(data => String(data.id) === String(id)))
  }, [id])

  if (!product) {
    return (
      <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-[60vh] rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-gray-300 mb-4">Product Not Found</h2>
        <Link to="/">
          <button className="cursor-pointer flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-semibold text-lg">
            <ChevronLeft />
            <span>Back to All products</span>
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
      <Link to="/">
        <button className="cursor-pointer flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-150 mb-8 font-semibold text-lg space-x-1">
          <ChevronLeft />
          <span>Back to All products</span>
        </button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="w-full flex justify-center bg-white p-6 rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-[400px] h-[400px] object-contain rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-orange-400 text-sm rounded-full font-semibold inline-block mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl font-extrabold text-white mb-2">{product.name}</h1>
            <p className="text-3xl font-bold text-orange-400 mb-4">
              ₹{Number(product.price).toFixed(2)}
            </p>
            
          </div>

          <p className="text-gray-300 text-base leading-relaxed">
            {product.description}
          </p>
          

          <button 
            onClick={() => addToCart && addToCart(product)}
            className="mt-4 py-3.5 px-6 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center space-x-2 transition duration-300 cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>ADD TO CART</span>
          </button>

          <Link to="/" className="w-full">
            <button 
              className="w-full py-3.5 px-6 bg-gray-800 hover:bg-gray-700 text-orange-400 border border-gray-700 font-extrabold text-sm tracking-wider uppercase rounded-xl shadow-md flex items-center justify-center space-x-2 transition duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>KEEP SHOPPING</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Productdetail
