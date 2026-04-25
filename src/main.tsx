import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Root from './pages/Root'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Signup from './pages/Signup'

const router = createBrowserRouter  ([
{
  path: "/",
  element: <Root/>,
  children: [{
    
      path: "",
      element: <Home/>
    },
    {
    
      path: "about",
      element: <About/>
    },
    {
    
      path: "services",
      element: <Services/>

    },
     {
    
      path: "contact",
      element: <Contact/>
      
    },
    {
    
      path: "signup",
      element: <Signup/>
      
    },

  ]
},
  


],{
  basename:"/Trippy"
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
