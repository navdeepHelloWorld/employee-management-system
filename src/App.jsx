import React from 'react';
import Login from './components/Auth/login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
const App = () => {
  return (
   
      <>
     {/* <Login/> */}
     <EmployeeDashboard/>
     {/* <AdminDashboard/> */}
      </>
   
  );
}
export default App;