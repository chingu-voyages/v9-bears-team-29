import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import any new middlewares here 

const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(
        ///add any new middlewares here
        thunkMiddleware,
        loggerMiddleware
    )
);

let persistor = persistStore(store);

export { persistor };
export default store;