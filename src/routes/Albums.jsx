import { useLoaderData } from 'react-router-dom';
import { getAlbums } from '../api/albumsApi';
import { ListElement } from '../components/ListElement';
export const loader = async () => {
  const albums = await getAlbums();
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div className="pt-16 underline text-xl">
      {albums.map((album) => (
        <div className="flex">
          <div className="flex-shrink-0 mt-2 mr-2">
            <img
              src="https://cdn-icons-png.flaticon.com/16/739/739249.png"
              alt="album-icon"
            />
          </div>
          <ListElement
            list={album}
            listName="albums"
          />
        </div>
      ))}
    </div>
  );
}
