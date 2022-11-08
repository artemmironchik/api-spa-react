const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = () => fetch(
    BASE_URL
).then((r) => r.json())

export const getUser = (id) => fetch(
    `${BASE_URL}/${id}`
).then((r) => r.json())

export const getUserAlbums = (id) => fetch(
    `${BASE_URL}/${id}/albums`
).then((r) => r.json())