export const USER_DEFAULT_STATE = {
  loading: false,
  error: null,
  albums: [],
  data: {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  },
  users: []
}

export const userReducer = (state = USER_DEFAULT_STATE, { type, payload }) => {
  switch(type) {
    case 'USER/FETCH/START':
      return {...state, loading: true}
    case 'USER/FETCH/SUCCESS':
      return {...state, loading: false, data: payload}
    case 'USER/FETCH/ERROR':
      return {...state, loading: false, error: payload}
    case 'USERS/FETCH/START':
      return {...state, loading: true}
    case 'USERS/FETCH/SUCCESS':
      return {...state, loading: false, users: payload}
    case 'USERS/FETCH/ERROR':
      return {...state, loading: false, error: payload}
    case 'USER/ALBUMS/FETCH/START':
      return {...state, loading: true}
    case 'USER/ALBUMS/FETCH/SUCCESS':
      return {...state, loading: false, albums: payload }
    case 'USER/ALBUMS/FETCH/ERROR':
      return {...state, loading: false, error: payload}
    default: return state
  }
}