import Albums, {loader as albumsLoader} from './routes/Albums';
import Users, {loader as usersLoader} from './routes/Users';
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