import React from 'react'
import Logo from './Logo'
import Navigation, { NavigationFooter } from './Navigation'
    
const Sidebar = () => {
  return (
    <div className='flex flex-col h-full w-full'>
      <Logo />
      {/* Sidebar content can go here */}
      <div className='mt-3 flex flex-col h-full mb-4'>
        <Navigation />
        <div className='flex-1'></div>
        <NavigationFooter />
      </div>

    </div>
  )
}

export default Sidebar
