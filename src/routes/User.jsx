import { useEffect, useState, Suspense, useCallback } from "react";
import { useParams, useLoaderData, useNavigate, Await, Link } from "react-router-dom";

export const loader = ({
    params: {id}
}) => {
    const userPromise = fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((r) => r.json())
    const userAlbumsPromise = fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
    ).then((r) => r.json())
    return { userPromise, userAlbumsPromise }
}

export default function User() {
    const { userPromise, userAlbumsPromise } = useLoaderData()

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={userPromise}>
                    {
                        (user) => {
                            return (
                            <div>
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
                                        <span>{user.website}</span>
                                    </p>
                                </div>
                            </div>  
                        )}
                    } 
                </Await>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={userAlbumsPromise}>
                    {
                        (albums) => {
                            return albums.map((album) => {
                                return (
                                    <Link
                                        key={album.id}
                                        to={`/albums/${album.id}`}
                                        className="text-sky-600 hover:text-red-400 cursor-pointer"
                                    >
                                        <div>{album.title}</div>
                                    </Link>
                                )
                            })
                        }
                    }
                </Await>
            </Suspense>
        </div>
    )
}