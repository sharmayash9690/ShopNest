import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { MapPin, Package, ArrowLeft, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/Cartcontext'

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save snapshot of cart items for confirmation page before clearing
    const orderSnapshot = { formData, cart: [...cart], totalPrice }
    clearCart()
    navigate('/confirmation', { state: orderSnapshot })
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-2xl flex flex-col items-center">
          <div className="w-20 h-20 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center mb-6">
            <Package className="w-10 h-10 text-orange-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2">No Items to Checkout</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Your cart is empty. Please add items to your cart before proceeding to checkout.
          </p>
          <Link to="/">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm uppercase rounded-xl shadow-lg shadow-orange-600/30 flex items-center space-x-2 transition duration-300 cursor-pointer">
              <ShoppingBag className="w-5 h-5" />
              <span>Return to Shop</span>
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 max-w-6xl">
      <Link to="/cart">
        <button className="flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-6 font-semibold text-sm space-x-1 cursor-pointer">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Cart</span>
        </button>
      </Link>

      <h1 className="text-4xl font-extrabold text-white mb-8">Finalize Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Shipping Information */}
        <div className="lg:col-span-7 bg-gray-900/90 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-orange-500 mb-6 flex items-center space-x-2">
            <MapPin className="w-6 h-6 text-orange-500" />
            <span>Shipping Information</span>
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter street address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-xl p-3.5 text-white placeholder-gray-500 outline-none focus:border-orange-500 transition-colors"
                placeholder="Enter zip / postal code"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 px-6 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm md:text-base tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/30 transition duration-300 cursor-pointer"
            >
              PAY AND CONFIRM ORDER (₹{totalPrice.toFixed(2)})
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 bg-gray-900/90 border border-orange-500/40 rounded-2xl p-6 md:p-8 h-fit shadow-xl flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <Package className="w-6 h-6 text-orange-500" />
            <span>Summary</span>
          </h2>

          <div className="flex flex-col gap-3 max-h-64 overflow-y-auto border-b border-gray-800 pb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm text-gray-300 gap-2">
                <span className="truncate font-medium">
                  {item.name} <span className="text-gray-400 text-xs">(x{item.quantity})</span>
                </span>
                <span className="font-bold text-white shrink-0">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-gray-400 text-sm">
              <span>Subtotal:</span>
              <span className="font-bold text-white">₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400 text-sm">
              <span>Shipping:</span>
              <span className="font-bold text-green-400">Free</span>
            </div>
            <div className="border-t border-gray-800 pt-4 flex justify-between items-baseline">
              <span className="text-2xl font-extrabold text-white">Total Due:</span>
              <span className="text-3xl font-extrabold text-orange-400">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
