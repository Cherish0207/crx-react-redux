// 让dispatch支持传递传递promise
const promise = (store) => (next) => (action) => {
  if (typeof action.then === "function") {
    // 这里只能用store.dispatch，不能用next，因为有可能嵌套
    return action.then((newAction) => store.dispatch(newAction));
  } else {
    return next(action);
  }
};
export default promise;
