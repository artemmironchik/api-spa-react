import { useEffect, useState, Suspense, useCallback } from "react";
import { useParams, useLoaderData, useNavigate, Await, Link } from "react-router-dom";

export const loader = ({
    params: {id}
}) => {
    const albumPromise = fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
    ).then((r) => r.json())
    const albumCardsPromise = fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    ).then((r) => r.json())
    return { albumPromise, albumCardsPromise }
}

const getUserById = (id) => fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
).then((r) => r.json())

export default function User() {
    const { albumPromise, albumCardsPromise } = useLoaderData()

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={albumPromise}>
                    {
                        (album) => {
                            return (
                            <div>
                                <div>
                                    <p>{album.title}</p>
                                    <Suspense>
                                        <Await resolve={getUserById(album.userId)}>
                                            {
                                                (user) => {
                                                    return (
    
                                                    <div>
                                                        Created by: {" "}
                                                        <Link to={`/users/${user.id}`} className="text-sky-600 hover:text-red-400 cursor-pointer">{user.name}</Link>
                                                    </div>
                                                )}
                                            }
                                        </Await>
                                    </Suspense>
                                </div>
                            </div>  
                        )}
                    } 
                </Await>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={albumCardsPromise}>
                    {
                        (cards) => {
                            return cards.map((card) => {
                                return (
                                    <div>
                                        <img src={card.thumbnailUrl} alt={card.title} />
                                    </div>
                                )
                            })
                        }
                    }
                </Await>
            </Suspense>
        </div>
    )
}