

export default (state = [], action) => {
  switch (action.type) {
    case "DEPT_LIST":
      return {
        ...state, deptList: [
          { key: 1, text: 'HR' },
          { key: 2, text: 'ENGINEERING' }
        ]
      }
    default:
      return state
  }
}
