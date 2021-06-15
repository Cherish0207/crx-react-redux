// 为了实现中间件的级联，调用下一个中间件
const logger = (store) => (dispatch) => (action) => {
  console.log("prev state", store.getState());
  dispatch(action); //如果你只有一个中间件的话，next就是原始的store.dispatch(action)
  console.log("next state", store.getState());
  return action;
};
export default logger;
