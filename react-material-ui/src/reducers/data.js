const initialState = {
  data: [],
  isFetching: false,
  failed: false,
  error: false,
}
const data = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data,
        failed: false
      }
    case 'DELETE_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorType: action.errorType,
        data: action.data,
        failed: true
      }
    case 'FETCHING_DATA':
      return {
        ...state,
        isFetching: true,
        failed: false
      }
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.data,
        failed: false
      }
    case 'FETCHING_DATA_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorType: action.errorType,
        data: action.data,
        failed: true
      }
    default:
      return state
  }
}

export default data