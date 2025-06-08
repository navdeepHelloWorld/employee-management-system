import React from 'react';
import Login from './components/Auth/login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
const App = () => {
  return (
    <div>
      <>
     {/* <Login/> */}
     <EmployeeDashboard/>
      </>
    </div> 
  );
}
export default App;