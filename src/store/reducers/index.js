import { combineReducers } from "../../redux";
import counter1 from "./counter1";
import counter2 from "./counter2";
import list from "./list";
// 把一个对象变成了一个reducer
let rootReducer = combineReducers({
  counter1,
  counter2,
  list
});
export default rootReducer;
