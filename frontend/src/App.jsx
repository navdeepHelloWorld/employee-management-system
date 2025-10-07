import React, { useContext, useEffect } from 'react';
import { useState } from "react";
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [loginError, setLoginError] = useState("")
  const authData = useContext(AuthContext)
  
  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem("loggedInUser")
      
      if (loggedInUser && loggedInUser !== "null" && loggedInUser !== "") {
        const userData = JSON.parse(loggedInUser)
        if (userData && userData.role && userData.data) {
          setUser(userData.role)
          setLoggedInUserData(userData.data)
        }
      }
    } catch (error) {
      console.error('Error parsing stored user data:', error)
      localStorage.removeItem("loggedInUser")
    }
  }, [])
 
  const handleLogin = (email, password) => {
    setLoginError("")
    
    if (!authData) {
      setLoginError("System is still loading, please wait...")
      return
    }

    // Check admin login
    const admin = authData.admin?.find((e) => e.email === email && e.password === password)
    if (admin) {
      const userData = { role: 'admin', data: admin }
      localStorage.setItem('loggedInUser', JSON.stringify(userData))
      setUser("admin")
      setLoggedInUserData(admin)
      return
    }

    // Check employee login
    const employee = authData.employees?.find((e) => e.email === email && e.password === password)
    if (employee) {
      const userData = { role: 'employee', data: employee }
      localStorage.setItem('loggedInUser', JSON.stringify(userData))
      setUser("employee")
      setLoggedInUserData(employee)
      return
    }

    // Invalid credentials
    setLoginError("Invalid email or password")
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(null)
    setLoggedInUserData(null)
    setLoginError("")
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} error={loginError} />
      ) : (
        <>
          {user === "admin" && (
            <AdminDashboard 
              changeUser={handleLogout} 
              data={loggedInUserData} 
            />
          )}
          {user === "employee" && (
            <EmployeeDashboard 
              changeUser={handleLogout} 
              data={loggedInUserData} 
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
