import { legacy_createStore, applyMiddleware, combineReducers } from "redux"

import thunk from "redux-thunk"
import { AuthReducer } from "./Auth.reducer"
const rootReducer = combineReducers({
    Auth:AuthReducer
})

export const Store=legacy_createStore(rootReducer,applyMiddleware(thunk))
