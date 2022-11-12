import { BASE_URL } from "../constants"

export const getUsers = () => fetch(
    `${BASE_URL}/users`
).then((r) => {
    if(r.ok) return r.json()
    else throw new Error('there is no such a user')
})

export const getUser = (id) => fetch(
    `${BASE_URL}/users/${id}`
).then((r) => {
    if(r.ok) return r.json()
    else throw new Error('there is no such a user')
})

export const getUserAlbums = (id) => fetch(
    `${BASE_URL}/users/${id}/albums`
).then((r) => {
    if(r.ok) return r.json()
    else throw new Error('there is no such a user')
})