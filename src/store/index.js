import { createStore } from "../redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);

/**
 * 实现一个日志中间件・状态改变前和改变后打印一些日志
 * --- 切片 
 * 中间件的核心：重写dispatch方法
 */
let dispatch = store.dispatch;
store.dispatch = function (action) {
  console.log("prev state", store.getState());
  dispatch(action);
  console.log("next state", store.getState());
  return action;
};

store.dispatch = function (action) {
  setTimeout(() => {
    dispatch(action);
  }, 3000);
  return action;
};
export default store;
