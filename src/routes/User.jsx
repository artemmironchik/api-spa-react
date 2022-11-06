import { useEffect, useState, Suspense, useCallback } from "react";
import { useParams, useLoaderData, useNavigate, Await } from "react-router-dom";

export const loader = ({
    params: {id}
}) => {
    const userPromise = fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((r) => r.json())
    return { userPromise }
}

export default function User() {
    const [albums, setAlbums] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then((response) => response.json())
        .then((albums) => setAlbums(albums))
    }, [id])
    const { userPromise } = useLoaderData()
    const navigate = useNavigate()
    const goToAlbum = useCallback(
        (id) => {
        return () => navigate(`/albums/${id}`)
        },
        [navigate]
    )

    return <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={userPromise}>
            {
                (user) => {
                    return (<div>
                        <div>
                            <p>{user.name}</p>
                            <p>
                                Username:{" "}
                                <span>{user.username}</span>
                            </p>
                            <p>
                                Email:{" "}
                                <span>{user.email}</span>
                            </p>
                            <p>
                                Phone:{" "}
                                <span>{user.phone}</span>
                            </p>
                            <p>
                                Site:{" "}
                                <span>{user.username}</span>
                            </p>
                        </div>
                        {albums.map((album) => {
                            return (
                            <div
                                key={album.id}
                                onClick={goToAlbum(album.id)}
                                className="text-sky-600 hover:text-red-400 cursor-pointer"
                            >
                                {album.title}
                            </div>
                            )
                        })}
                    </div>  
                )}
            } 
        </Await>
    </Suspense>
}