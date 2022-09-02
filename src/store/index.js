import { createStore, combineReducers, applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import config from "./config";


const configKeeps = {
    key: 'config',
    storage: storage,
    whitelist: ['currency', 'currencySymbol', 'themeOn']
}

const rootReducer = combineReducers({
    config: persistReducer(configKeeps, config)
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)