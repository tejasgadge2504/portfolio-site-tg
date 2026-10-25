import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import { Button } from "@/components/ui/button"
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.jsx'

 
function App() {
  return <RouterProvider router={router}/>
  // <RouterProvider router={router}/>
}

export default App
