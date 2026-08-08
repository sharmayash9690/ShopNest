import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/Cartcontext'

const Navbar = () => {
  const { totalItems } = useCart()

  return (
    <>
    <header className='bg-gray-950 sticky top-0 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900 z-50'>
     <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <Home className='w-8 h-8 text-orange-400 drop-shadow-lg' />
            <h1 className='text-4xl font-extrabold tracking-widest uppercase'>
              WDM<span className='text-orange-400'>STORE</span>
            </h1>
          </div>
        </Link>
        <nav className='flex items-center space-x-6'>
            <Link to={"/cart"}
             className='relative p-3 bg-orange-500/10 hover:bg-orange-500/20 rounded-xl transition-colors duration-200 border border-orange-400/50 shadow-lg cursor-pointer flex items-center justify-center'>
              <ShoppingCart className='w-6 h-6 text-orange-400' />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-950 animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
        </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar
