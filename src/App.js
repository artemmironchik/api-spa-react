import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from './routes/Layout';
import Albums from './routes/Albums';
import Users, {loader as usersLoader} from './routes/Users';
import User, {loader as userLoader} from './routes/User';
import Album from './routes/Album';
import NewUser from './routes/NewUser'
import NotFound from './routes/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
          path: '/albums',
          element: <Albums />,
      },
      {
          path: '/users',
          loader: usersLoader,
          element: <Users />,
      },
      {
          path: '/users/:id',
          element: <User />,
      },
      {
          path: '/albums/:id',
          element: <Album />,
      },
      {
          path: '/users/new',
          element: <NewUser />,
      },
      {
          path: '*',
          element: <NotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}/>
}

