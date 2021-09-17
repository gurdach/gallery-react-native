import { createStore, applyMiddleware, combineReducers } from 'redux';
import galleryReducer from './reducers/galleryReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    gallery: galleryReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))