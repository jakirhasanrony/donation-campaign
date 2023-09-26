import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import Navbar from './Header/Navbar/Navbar';

import ErrorPage from './Pages/ErrorPages/ErrorPage';
import Card from './Components/Card/Card';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<div>
      <div>
        <Navbar></Navbar>
        
      </div>
      <div className='py-10'>
        <Outlet></Outlet>
      </div>

    </div>),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/cardDetails.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/cardDetails.json')
      },
      {
        path: "/card/:card_id",
        element: <Card></Card>,
        loader: () => fetch('/cardDetails.json')
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
