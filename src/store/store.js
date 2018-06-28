import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'

const middleWare = applyMiddleware(thunk);
const store = createStore(rootReducer, middleWare);
store.subscribe(() => {
  console.log("store changes G", store.getState())
});
export default store;