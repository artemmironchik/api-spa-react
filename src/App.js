import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from './routes/Layout';
import { routes } from './routeConfig'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router}/>
}

