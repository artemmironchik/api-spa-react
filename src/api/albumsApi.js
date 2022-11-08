const BASE_URL = 'https://jsonplaceholder.typicode.com/albums'

export const getAlbums = () => fetch(
    BASE_URL
).then((r) => r.json())

export const getAlbum = (id) => fetch(
    `${BASE_URL}/${id}`
).then((r) => r.json())

export const getPhotos = (id) => fetch(
    `${BASE_URL}/${id}/photos`
).then((r) => r.json())



