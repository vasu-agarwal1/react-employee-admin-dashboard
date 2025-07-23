import React from 'react'

function Header({data}) {
  console.log(data)
  return (
    
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'> {data.firstName} 👋</span> </h1>
            <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded'>Log Out</button>
        </div>
      
    
  )
}

export default Header
