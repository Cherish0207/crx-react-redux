// 让dispatch支持传递函数
const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};
export default thunk;
