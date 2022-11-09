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
    <div className='pt-16 text-xl w-100'>
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
                          <div className='text-base'>
                            Created by:{' '}
                            <Link
                              to={`/users/${user.id}`}
                              className="text-blue-700 underline cursor-pointer ml-0.5"
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
      <div className="grid min-[320px]:grid-cols-2 min-[400px]:grid-cols-3 min-[560px]:grid-cols-4 min-[720px]:grid-cols-5 min-[900px]:grid-cols-6 lg:grid-cols-8 gap-4 mt-6">
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
    </div>
  );
}
