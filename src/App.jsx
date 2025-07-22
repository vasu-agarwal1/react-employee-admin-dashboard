import React, { useContext, useEffect, useState } from 'react'
import Login from "./components/Auth/Login";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage,getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const[user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    }else if(email == 'user@me.com' && password == '123'){
      setUser('employees')
    }
    else{
      alert("Invalid Credentials")
    }
  }

  const data = useContext(AuthContext)
  console.log(data)


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
