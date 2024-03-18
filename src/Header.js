import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='z-10 bg-white'>
      <nav className='bg-blue-300 fixed w-full z-10  top-0 border-b-2 border-black-200 flex justify-between p-4 px-16  '>
        <div>
            <img className='w-[150px] h-auto' src='assets\images\logo.png' alt='logo'></img>
        </div>
        <div className='flex p-4 pt-8 justify-between gap-x-[5rem]'> 
        <Link to='/' className='navLink'>Home</Link>
        <Link to='/about' className='navLink'>About Us</Link>
        <Link to='/login' className='navLink'>Login</Link>
        <Link to='/products' className='navLink'>Products</Link>
        <Link to='/contact' className='navLink'>Contact Us</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header;

