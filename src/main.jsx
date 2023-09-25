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
import Banner from './Header/Banner/Banner';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>

    </div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/cardDetails.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
