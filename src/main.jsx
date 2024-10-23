import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home';
import About from './routes/About';
import Mission from './routes/Mission';
import ErrorPage from './components/error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/missionandvision",
    element: <Mission />,
    errorElement: <ErrorPage />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
