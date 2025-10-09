import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Tailwind (and custom layers)
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
