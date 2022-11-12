import { BASE_URL } from "../constants"

export const getAlbums = () => fetch(
    `${BASE_URL}/albums`
).then((r) => {
    if(r.ok) return r.json()
    else throw new Error('there is no such an album')
})

export const getAlbum = (id) => fetch(
    `${BASE_URL}/albums/${id}`
).then((r) => {
    if(r.ok) return r.json()
    else throw new Error('there is no such an album')
})


export const getPhotos = (id) => fetch(
    `${BASE_URL}/albums/${id}/photos`
).then((r) => {
    if(r.ok) return r.json()
    else throw new Error('there is no such an album')
})

