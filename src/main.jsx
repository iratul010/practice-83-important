import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import router from './Routes/Routes.jsx'
import AuthProvider from './ContextOrProvider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </AuthProvider>
  </React.StrictMode>,
)
