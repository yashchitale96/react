import {combineReducers, createStore} from 'redux';
import { productReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';

const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

const store = createStore(
    rootReducer
);

export default store;