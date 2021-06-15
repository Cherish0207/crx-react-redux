import { createStore, applyMiddleware } from "../redux";
import rootReducer from "./reducers";
import thunk from "./middleware/thunk";
const store = applyMiddleware(thunk)(createStore)(rootReducer);
export default store;
