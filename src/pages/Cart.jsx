import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowRight, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/Cartcontext'
import Cartitem from '../components/Cartitem'

const Cart = () => {
  const { cart, totalItems, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-2xl flex flex-col items-center">
          <div className="w-20 h-20 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mb-6">
            <ShoppingCart className="w-10 h-10 text-orange-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2">Your Cart is Empty</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Looks like you haven't added anything to your cart yet. Explore our awesome products!
          </p>
          <Link to="/">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm uppercase rounded-xl shadow-lg shadow-orange-600/30 flex items-center space-x-2 transition duration-300 cursor-pointer">
              <ShoppingBag className="w-5 h-5" />
              <span>Explore Products</span>
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <h1 className="text-3xl font-extrabold text-white mb-8 flex items-center space-x-3">
        <ShoppingCart className="w-8 h-8 text-orange-400" />
        <span>Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <Cartitem key={item.id} item={item} />
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-fit shadow-xl flex flex-col gap-6">
          <h2 className="text-xl font-extrabold text-white border-b border-gray-800 pb-4">
            Order Summary
          </h2>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Items ({totalItems})</span>
              <span className="font-semibold text-white">₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span className="font-semibold text-green-400">FREE</span>
            </div>
            <div className="border-t border-gray-800 pt-3 flex justify-between text-lg font-extrabold text-white">
              <span>Total Amount</span>
              <span className="text-orange-400">₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <Link to="/checkout" className="w-full">
            <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm uppercase rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center space-x-2 transition duration-300 cursor-pointer">
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
