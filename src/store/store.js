import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'

const middleWare = applyMiddleware(thunk);
const store = createStore(rootReducer, middleWare);
store.subscribe(() => {
  console.log("store changes G", store.getState())
});

// store.dispatch({ type: "DEPT_LIST", payload: 1 })
// store.dispatch({ type: "EMP_BY_DEPT", payload: 1 })
// store.dispatch((dispatch) => {
//   dispatch({});
//   dispatch({});

// })
export default store;