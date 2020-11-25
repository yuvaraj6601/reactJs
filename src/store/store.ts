import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
   applyMiddleware(thunk))
);

store.subscribe(()=>store.getState())


export default store