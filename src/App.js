import CategoryTable from './components/CategoryTable';
import ProductTable from './components/products/ProductTable';
import Dashboard from './components/Dashboard.js';
import LoginForm from './components/LoginForm/LoginForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

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

  return (
    <Router>
      <Routes>
        <Route path='login' element={<LoginForm />} />
        <Route path="/" element={<ProtectedRoute component={<Dashboard />} />} >
          <Route path="dashBoard/productList" element={<ProtectedRoute component={<ProductTable />} />} />
          <Route path="dashBoard/categoryList" element={<ProtectedRoute component={<CategoryTable />} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
