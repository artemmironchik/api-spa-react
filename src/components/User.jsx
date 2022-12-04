import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchUser, fetchUserAlbums } from '../redux/users/actions';

export default function User() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {user: userData} = useSelector(state => state)
  const user = userData.data
  const albums = userData.albums

  useEffect(() => {
    dispatch(fetchUser(id))
    dispatch(fetchUserAlbums(id))
  }, [user, dispatch, id])

  return (
    <div className="pt-16">
      <div>
        <div className="text-base text-gray-500">
          <p className="text-xl text-black">{user.name}</p>
          <p>
            Username: <span>{user.username}</span>
          </p>
          <p>
            Email: <span>{user.email}</span>
          </p>
          <p>
            Phone: <span>{user.phone}</span>
          </p>
          <p>
            Site: <span>{user.website}</span>
          </p>
        </div>
      </div>
      <p className="pt-8 pb-2 text-xl">Albums</p>
      {albums.map((album) => {
        return (
          <div className="text-xl flex">
            <div className="flex-shrink-0 mt-2">
              <img
                src="https://cdn-icons-png.flaticon.com/16/739/739249.png"
                alt="album-icon"
              />
            </div>
            <Link
              key={album.id}
              to={`/albums/${album.id}`}
              className="hover:text-blue-700 underline cursor-pointer pl-2"
            >
              <span>{album.title}</span>
            </Link>
          </div>
        );
      })};
    </div>
  );
}
