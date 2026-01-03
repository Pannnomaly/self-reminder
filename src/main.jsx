import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Page_1 from './pages/Page_1'

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
          { path: "page_1", element: <Page_1 /> },
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
