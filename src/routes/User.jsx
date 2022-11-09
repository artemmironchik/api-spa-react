import { Suspense } from 'react';
import {
  useLoaderData,
  Await,
  Link,
} from 'react-router-dom';
import { getUser, getUserAlbums } from '../api/usersApi';

export const loader = ({ params: { id } }) => {
  const userPromise = getUser(id);
  const userAlbumsPromise = getUserAlbums(id);
  return { userPromise, userAlbumsPromise };
};

export default function User() {
  const { userPromise, userAlbumsPromise } = useLoaderData();

  return (
    <div className='pt-16'>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={userPromise}>
          {(user) => {
            return (
              <div>
                <div className='text-base text-gray-500'>
                  <p className='text-xl text-black'>{user.name}</p>
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
            );
          }}
        </Await>
      </Suspense>
      <p className='pt-8 pb-2 text-xl'>Albums</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={userAlbumsPromise}>
          {(albums) => {
            return albums.map((album) => {
              return (
                <div className='text-xl flex'>
                  <div className='flex-shrink-0 mt-2'>
                    <img src="https://cdn-icons-png.flaticon.com/16/739/739249.png" alt="album-icon" />
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
            });
          }}
        </Await>
      </Suspense>
    </div>
  );
}
