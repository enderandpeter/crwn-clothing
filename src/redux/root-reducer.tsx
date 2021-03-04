import { combineReducers } from "redux";
import user from "./user/reducer";
import cart from "./cart/reducer";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    user,
    cart
})

export default rootReducer;