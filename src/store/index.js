import { createStore, applyMiddleware } from "../redux";
import rootReducer from "./reducers";
import thunk from "./middleware/thunk";
import logger from "./middleware/logger";
import promise from "./middleware/promise";
const store = applyMiddleware(thunk, logger, promise)(createStore)(rootReducer);
export default store;
