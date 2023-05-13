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
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route >
        <Route path='/' element={<Dashboard />}  >
          <Route path='dashBoard/categoryList' element={<CategoryTable />} />
          <Route path='dashBoard/productList' element={<ProductTable />} />
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
