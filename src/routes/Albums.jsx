import { useLoaderData, Link } from "react-router-dom";
export const loader = async () => {
    const albums = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
    ).then((r) => r.json());
    return {albums};
};

export default function Albums() {
    const {albums} = useLoaderData()

    return (
        <div>
            <p>Albums</p>
            {albums.map(album => 
                (<Link
                  key={album.id}
                  to={`/albums/${album.id}`}
                >
                    <div>{album.title}</div>
                </Link>
            ))}
        </div>
    )
}