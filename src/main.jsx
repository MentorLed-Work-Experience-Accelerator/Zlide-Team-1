import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { GoogleOAuthProvider } from '@react-oauth/google'



ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_WEB_CLIENT_ID">
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
  </GoogleOAuthProvider>
)
