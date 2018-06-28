import axios from 'axios';

export const getEmployeeIDs = (deptId) => {
  return {
    type: "EMP_BY_DEPT",
    payload: deptId
  }
}
export const getDeptList = () => {
  return {
    type: "DEPT_LIST"
  }
}
export const clearUserDetails = () => {
  return {
    type: "CLEAR_USER_DETAILS"
  }
}

export const getUserDetailsById = (userId) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_USER_DETAILS_START"
    })
    axios.get(`https://reqres.in/api/users/${userId}`).then((response) => {
      dispatch({
        type: "RECIEVE_USER_DETAILS", payload: response.data
      })
    }).catch(err => {
      dispatch({
        type: "FETCH_USERS_ERROR", payload: err
      })
    })
  }
}