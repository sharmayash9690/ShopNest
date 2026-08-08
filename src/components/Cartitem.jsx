import React from 'react'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/Cartcontext'

const Cartitem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-2xl gap-4 shadow-lg">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <div className="w-20 h-20 bg-white p-2 rounded-xl flex items-center justify-center shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white line-clamp-1">{item.name}</h3>
          <span className="text-xs text-orange-400 font-semibold bg-gray-800 px-2.5 py-0.5 rounded-full inline-block mt-1">
            {item.category}
          </span>
          <p className="text-orange-400 font-extrabold text-base mt-1">
            ₹{Number(item.price).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end space-x-6 w-full sm:w-auto border-t sm:border-t-0 border-gray-800 pt-3 sm:pt-0">
        <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-2 py-1 space-x-3">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="p-1 hover:bg-gray-700 rounded-lg text-gray-300 transition-colors cursor-pointer"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-extrabold text-white text-sm min-w-[20px] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="p-1 hover:bg-gray-700 rounded-lg text-gray-300 transition-colors cursor-pointer"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="text-right">
          <p className="text-lg font-extrabold text-white">
            ₹{(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors cursor-pointer"
          title="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default Cartitem
