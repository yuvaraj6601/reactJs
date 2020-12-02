import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/root.reducer';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

store.subscribe(() => store.getState())

export default store
