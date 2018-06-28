const initialState = {
  fetchting: false,
  fetched: false,
  userDetails: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case "FETCH_USER_DETAILS_START":
      return {
        ...state,
        fetchting: true, fetched: false
      }
    case "CLEAR_USER_DETAILS":
      return {
        ...state,
        fetchting: false,
        fetched: false,
        userDetails: {},
        error: null
      }
    case "FETCH_USERS_ERROR":
      return {
        ...state,
        fetchting: false,
        error: action.payload
      }
    case "RECIEVE_USER_DETAILS":
      return {
        ...state,
        fetchting: false,
        fetched: true,
        userDetails: action.payload.data
      }
    default:
      return state
  }
}
