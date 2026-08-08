import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { CheckCircle2, ShoppingBag, Home } from 'lucide-react'

const Orderconfirmation = () => {
  const location = useLocation()
  const { formData, cart, totalPrice } = location.state || {}

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 max-w-3xl">
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Order Confirmed!
        </h1>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Thank you for your purchase{formData?.name ? `, ${formData.name}` : ''}! Your order has been placed successfully.
        </p>

        {formData && (
          <div className="w-full bg-gray-950 border border-gray-800 rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-lg font-bold text-orange-400 mb-3 border-b border-gray-800 pb-2">
              Shipping Address
            </h3>
            <p className="text-gray-300 font-semibold">{formData.name}</p>
            <p className="text-gray-400 text-sm">{formData.address}</p>
            <p className="text-gray-400 text-sm">{formData.city}, {formData.zipCode}</p>
          </div>
        )}

        {cart && cart.length > 0 && (
          <div className="w-full bg-gray-950 border border-gray-800 rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-lg font-bold text-white mb-3 border-b border-gray-800 pb-2">
              Order Items
            </h3>
            <div className="flex flex-col gap-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm text-gray-300">
                  <span>{item.name} (x{item.quantity})</span>
                  <span className="font-bold text-white">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-3 mt-3 flex justify-between text-base font-extrabold">
              <span className="text-white">Total Paid:</span>
              <span className="text-orange-400">₹{totalPrice ? totalPrice.toFixed(2) : '0.00'}</span>
            </div>
          </div>
        )}

        <Link to="/">
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm uppercase rounded-xl shadow-lg shadow-orange-600/30 flex items-center space-x-2 transition duration-300 cursor-pointer">
            <Home className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Orderconfirmation
