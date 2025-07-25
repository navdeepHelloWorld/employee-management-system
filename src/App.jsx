import React, { useContext, useEffect } from 'react';
import { useState } from "react";
import Login from './components/Auth/login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.jsx';
import { AuthContext } from './context/AuthProvider.jsx';
const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  
  useEffect(() => {

     
      const loggedInUser = localStorage.getItem("loggedInUser")
     
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    


  }, [])
 
  
  const handleLogin = (email, password) => {
    if (authData  && authData.admin.find((e) => e.email == email && e.password == password)) {
      const admin =authData.admin.find((e) => e.email == email && e.password == password);
      if(admin){
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data:admin}))
        setUser("admin")
        setLoggedInUserData(admin)
      }

    } else if (authData && authData.employees.find((e) => e.email == email && e.password == password) ) {
      const employee=authData.employees.find((e) => e.email == email && e.password == password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' , data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
      
    }


  }



  return (

    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard data={loggedInUserData} /> : ""}
      {user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : ""}
    </>

  );
}
export default App;