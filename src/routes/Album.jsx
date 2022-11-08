import { Suspense } from 'react';
import { useLoaderData, Await, Link } from 'react-router-dom';
import { getAlbum, getPhotos } from '../api/albumsApi';
import { getUser } from '../api/usersApi';

export const loader = ({ params: { id } }) => {
  const albumPromise = getAlbum(id);
  const albumCardsPromise = getPhotos(id);
  return { albumPromise, albumCardsPromise };
};

export default function User() {
  const { albumPromise, albumCardsPromise } = useLoaderData();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={albumPromise}>
          {(album) => {
            return (
              <div>
                <div>
                  <p>{album.title}</p>
                  <Suspense>
                    <Await resolve={getUser(album.userId)}>
                      {(user) => {
                        return (
                          <div>
                            Created by:{' '}
                            <Link
                              to={`/users/${user.id}`}
                              className="text-sky-600 hover:text-red-400 cursor-pointer"
                            >
                              {user.name}
                            </Link>
                          </div>
                        );
                      }}
                    </Await>
                  </Suspense>
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={albumCardsPromise}>
          {(cards) => {
            return cards.map((card) => {
              return (
                <div>
                  <img src={card.thumbnailUrl} alt={card.title} />
                </div>
              );
            });
          }}
        </Await>
      </Suspense>
    </div>
  );
}
