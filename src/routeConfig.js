import Albums from './routes/Albums';
import Users from './routes/Users';
import User from './components/User';
import Album, {loader as albumLoader} from './components/Album';
import NotFound from './routes/NotFound'
import Main from './routes/Main'

export const routes = [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/albums',
        element: <Albums />,
    },
    {
        path: '/users',
        element: <Users />,
    },
    {
        path: '/users/:id',
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
]