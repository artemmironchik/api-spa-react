import { useLoaderData, Link } from "react-router-dom";
import { getAlbums } from "../api/albumsApi";
export const loader = async () => {
    const albums = await getAlbums();
    return {albums};
};

export default function Albums() {
    const {albums} = useLoaderData()

    return (
        <div>
            {albums.map(album => 
                (
                <div>
                    <img src="album-icon.png" alt="album-icon" />
                    <Link
                    key={album.id}
                    to={`/albums/${album.id}`}
                    >
                        <div>{album.title}</div>
                    </Link>
                </div>
            ))}
        </div>
    )
}