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
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={userPromise}>
          {(user) => {
            return (
              <div>
                <div>
                  <p>{user.name}</p>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={userAlbumsPromise}>
          {(albums) => {
            return albums.map((album) => {
              return (
                <Link
                  key={album.id}
                  to={`/albums/${album.id}`}
                  className="text-sky-600 hover:text-red-400 cursor-pointer"
                >
                  <div>{album.title}</div>
                </Link>
              );
            });
          }}
        </Await>
      </Suspense>
    </div>
  );
}
