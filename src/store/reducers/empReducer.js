export default (state = [], action) => {
  switch (action.type) {
    case "EMP_BY_DEPT":
      if (action.payload === 1) {
        return {
          ...state, empList: [
            { key: 1, text: 'Employee1' },
            { key: 2, text: 'Employee2' },
            { key: 3, text: 'Employee3' },
            { key: 4, text: 'Employee4' },
            { key: 5, text: 'Employee5' }
          ]
        }

      } else if (action.payload === 2) {
        return {
          ...state, empList: [
            { key: 6, text: 'Employee6' },
            { key: 7, text: 'Employee7' },
            { key: 8, text: 'Employee8' },
            { key: 9, text: 'Employee9' },
            { key: 10, text: 'Employee10' }
          ]
        }
      }
    default:
      return state
  }
}
