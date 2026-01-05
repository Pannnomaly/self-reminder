import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import AboutMe from './pages/AboutMe'
import DeveloperActs from './pages/DeveloperAct'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Homepage /> },
          { path: "about_me", element: <AboutMe /> },
          { path: "developer_acts", element: <DeveloperActs /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router }/>
  </StrictMode>
)
