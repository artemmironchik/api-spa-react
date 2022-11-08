import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Layout from './routes/Layout';
import Albums, {loader as albumsLoader} from './routes/Albums';
import Users, {loader as usersLoader} from './routes/Users';
import User, {loader as userLoader} from './routes/User';
import Album, {loader as albumLoader} from './routes/Album';
import NotFound from './routes/NotFound'
import Main from './routes/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
          path: '/',
          loader: albumsLoader,
          element: <Main />,
      },
      {
          path: '/albums',
          loader: albumsLoader,
          element: <Albums />,
      },
      {
          path: '/users',
          loader: usersLoader,
          element: <Users />,
      },
      {
          path: '/users/:id',
          loader: userLoader,
          element: <User />,
      },
      {
          path: '/albums/:id',
          loader: albumLoader,
          element: <Album />,
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

