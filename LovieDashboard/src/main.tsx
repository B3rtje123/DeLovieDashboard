import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/tailwind.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import User from './routes/User'
import Breadcrumbs from './components/breadCrumbs'


const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/user/:id', element: <User/> },
  { path: '*', element: <div>Not found</div>}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)