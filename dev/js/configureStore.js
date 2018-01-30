import { createStore ,applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';


import allReducers from './reducers';

 
const persistConfig = {
  key: 'root',
  storage: storage,
}
 

const logger = createLogger();


const persistedReducer = persistReducer(persistConfig, allReducers)
 
export default () => {

  let store = createStore(persistedReducer,applyMiddleware(thunk, promise, logger))
  let persistor = persistStore(store)
  return { store, persistor }
}