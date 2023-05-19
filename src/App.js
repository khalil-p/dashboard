import './App.css';
import CategoryTable from './components/CategoryTable';
import ProductTable from './components/products/ProductTable';
import Dashboard from './components/Dashboard.js';
import Root from './components/Root'
import { Link, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import DashboardContainer from './components/DashboardContainer';
import LoginForm from './components/LoginForm/LoginForm'
import KeepMountedModal from './components/CreateModal';


// redux store
import { Provider } from 'react-redux';
function App() {

  // Set the timeout duration in minutes (e.g. 30 minutes)
  const TIMEOUT_DURATION = 30;

  // Get the current time in milliseconds
  let currentTime = new Date().getTime();

  // Set the expiration time for the timeout
  let expirationTime = currentTime + (TIMEOUT_DURATION * 60 * 1000);

  // Listen for user activity on the page
  document.addEventListener('mousemove', () => {
    // Update the current time when the user moves the mouse
    currentTime = new Date().getTime();

    // Reset the expiration time to TIMEOUT_DURATION minutes from now
    expirationTime = currentTime + (TIMEOUT_DURATION * 60 * 1000);
  });

  // Set an interval to check the expiration time and log the user out if it has passed
  setInterval(() => {
    // Get the current time
    currentTime = new Date().getTime();

    // If the expiration time has passed, log the user out
    if (currentTime >= expirationTime) {
      // Remove the token from local storage or perform any other logout actions
      localStorage.removeItem('token');
      // Redirect the user to the login page
      window.location.href = '/login';
    }
  }, 1000);



  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route >
  //       <Route path='/' element={<Dashboard />}  >
  //         <Route path='dashBoard/categoryList' element={<CategoryTable />} />
  //         <Route path='dashBoard/productList' element={<ProductTable />} />
  //         <Route path='login' element={<LoginForm />} />
  //       </Route>
  //     </Route>
  //   )
  // )


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path='/' element={<Dashboard />}  >
          <Route path='dashBoard/categoryList' element={<CategoryTable />} />
          <Route path='dashBoard/productList' element={<ProductTable />} />
          {/* <Route path='dashBoard' element={<Dashboard />} /> */}
          <Route path='login' element={<LoginForm />} />
        </Route>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
