import React from 'react'
import { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

function Header(props) {

  // const[username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')//removes loggedinuser data from local storage of that windw
    props.changeUser('')//when logout button is clicked it sets user as empty which opens the login page
    // window.location.reload()//reloads the window on click
  }
  
  return (
    
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'> {props.firstName} 👋</span> </h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded'>Log Out</button>
        </div>
      
    
  )
}

export default Header
