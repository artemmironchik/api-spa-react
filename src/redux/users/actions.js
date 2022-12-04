import { getUser, getUserAlbums, getUsers } from "../../api/usersApi";

export const fetchUser = id => async (dispatch) => {
  dispatch({ type: 'USER/FETCH/START'})
  try {
    const user = await getUser(id)
    dispatch( {type: 'USER/FETCH/SUCCESS', payload: user})
  } catch (e) {
    console.error(e)
    dispatch({ type: 'USER/FETCH/ERROR', payload: e})
  }
}

export const fetchUserAlbums = id => async (dispatch) => {
  dispatch({ type: 'USER/ALBUMS/FETCH/START'})
  try {
    const userAlbums = await getUserAlbums(id)
    dispatch( {type: 'USER/ALBUMS/FETCH/SUCCESS', payload: userAlbums})
  } catch (e) {
    console.error(e)
    dispatch({ type: 'USER/ALBUMS/FETCH/ERROR', payload: e})
  }
}

export const fetchUsers = async (dispatch) => {
  dispatch({ type: 'USERS/FETCH/START'})
  try {
    const users = await getUsers()
    dispatch( {type: 'USERS/FETCH/SUCCESS', payload: users})
  } catch (e) {
    console.error(e)
    dispatch({ type: 'USERS/FETCH/ERROR', payload: e})
  }
}