import React, { useContext, useEffect } from 'react';
import { useState } from "react";
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { loginApi } from './utils/api.js';
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
 
  const handleLogin = async (email, password) => {
    setLoginError("")
    
    // Try backend login first
    try {
      const resp = await loginApi(email, password)
      if (resp?.token) {
        localStorage.setItem('authToken', resp.token)
        const userPayload = { role: resp.role, data: { _id: resp._id, name: resp.name, email: resp.email, role: resp.role } }
        localStorage.setItem('loggedInUser', JSON.stringify(userPayload))
        setUser(resp.role)
        setLoggedInUserData(userPayload.data)
        return
      }
    } catch (e) {
      // fall through to local demo auth
    }

    // Demo fallback: local seeded auth
    if (!authData) {
      setLoginError("System is still loading, please wait...")
      return
    }
    try { setLocalStorage() } catch {}
    const currentAdmins = authData.admin ?? getLocalStorage().admin ?? []
    const admin = currentAdmins.find((e) => e.email === email && e.password === password)
    if (admin) {
      const userData = { role: 'admin', data: admin }
      localStorage.setItem('loggedInUser', JSON.stringify(userData))
      setUser("admin")
      setLoggedInUserData(admin)
      return
    }
    const employee = authData.employees?.find((e) => e.email === email && e.password === password)
    if (employee) {
      const userData = { role: 'employee', data: employee }
      localStorage.setItem('loggedInUser', JSON.stringify(userData))
      setUser("employee")
      setLoggedInUserData(employee)
      return
    }
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
