export const ALBUM_DEFAULT_STATE = {
  loading: false,
  error: null,
  albums: [],
  data: {
    id: 0,
    userId: 0,
    title: '',    
  },
  photos: []
}

export const albumReducer = (state = ALBUM_DEFAULT_STATE, { type, payload }) => {
  switch(type) {
    case 'ALBUM/FETCH/START':
      return {...state, loading: true}
    case 'ALBUM/FETCH/SUCCESS':
      return {...state, loading: false, data: payload}
    case 'ALBUM/FETCH/ERROR':
      return {...state, loading: false, error: payload}
    case 'ALBUMS/FETCH/START':
      return {...state, loading: true}
    case 'ALBUMS/FETCH/SUCCESS':
      return {...state, loading: false, albums: payload}
    case 'ALBUMS/FETCH/ERROR':
      return {...state, loading: false, error: payload}
    case 'ALBUM/PHOTOS/FETCH/START':
      return {...state, loading: true}
    case 'ALBUM/PHOTOS/FETCH/SUCCESS':
      return {...state, loading: false, photos: payload }
    case 'ALBUM/PHOTOS/FETCH/ERROR':
      return {...state, loading: false, error: payload}
    default: return state
  }
}