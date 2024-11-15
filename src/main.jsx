import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog/index.jsx'
import Content from './pages/Blog/content.jsx'
import Contato from './pages/Contato/index.jsx'
import Account from './pages/Account/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Blog', element: <Blog /> },
      { path: '/Blog/:id', element: <Content /> },      
      { path: '/Contato', element: <Contato /> },      
    ]
  },{
    path: '/Account',
    element: <Account />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
