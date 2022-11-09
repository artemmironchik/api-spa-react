import { useLoaderData, Link } from 'react-router-dom';
import { getAlbums } from '../api/albumsApi';
export const loader = async () => {
  const albums = await getAlbums();
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div className="pt-16">
      {albums.map((album) => (
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
      ))}
    </div>
  );
}
