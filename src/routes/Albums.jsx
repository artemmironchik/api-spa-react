import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../redux/albums/actions';
import { ListElement } from '../components/ListElement';

export default function Albums() {
  const dispatch = useDispatch();
  const {album: albumsData} = useSelector(state => state)
  const albums = albumsData.albums

  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])

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
