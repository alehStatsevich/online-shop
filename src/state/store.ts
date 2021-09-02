import {combineReducers, createStore} from 'redux';
import {productReducer} from "./product-reducer";


const rootReducer = combineReducers({
    products: productReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
