import { getAlbum, getAlbums, getPhotos } from "../../api/albumsApi";

export const fetchAlbums = () => async (dispatch) => {
  dispatch({ type: 'ALBUMS/FETCH/START'})
  try {
    const albums = await getAlbums()
    dispatch( {type: 'ALBUMS/FETCH/SUCCESS', payload: albums})
  } catch (e) {
    console.error(e)
    dispatch({ type: 'ALBUMS/FETCH/ERROR', payload: e})
  }
}

export const fetchAlbum = () => async (dispatch) => {
  dispatch({ type: 'ALBUM/FETCH/START'})
  try {
    const albums = await getAlbum()
    dispatch( {type: 'ALBUM/FETCH/SUCCESS', payload: albums})
  } catch (e) {
    console.error(e)
    dispatch({ type: 'ALBUM/FETCH/ERROR', payload: e})
  }
}

export const fetchPhotos = () => async (dispatch) => {
  dispatch({ type: 'PHOTOS/FETCH/START'})
  try {
    const albums = await getPhotos()
    dispatch( {type: 'PHOTOS/FETCH/SUCCESS', payload: albums})
  } catch (e) {
    console.error(e)
    dispatch({ type: 'PHOTOS/FETCH/ERROR', payload: e})
  }
}