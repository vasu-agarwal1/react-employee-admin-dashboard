import React, { useContext, useEffect, useState } from 'react'
import Login from "./components/Auth/Login";
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage,getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const[user, setUser] = useState(null)
  const[loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])
  
  // useEffect(() => {

  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}) )
    }else if(authData){
      const employee = authData.employees.find((e) =>email == e.email && e.password == password)
      if(employee){
      setUser('employee')
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee', data: employee}) )
      }
    }
    else{
      alert("Invalid Credentials")
    }
  }


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>                                 //due to thiswe can go to login page  when we click on logout button without reloading the page 
  )
}

export default App
