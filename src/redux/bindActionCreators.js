/**
 * store.dispatch({ type:'ADD' }) ---> boundActions.add(2)
 * @param {*} actionCreator add or minus方法
 * @param {*} dispatch store.dispatch
 * @returns 
 */
function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}
/**
 * 绑定action创建者和store.dispatch方法
 * @param {*} actionCreators 
 * @param {*} dispatch 
 * @returns 
 */
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  const boundActionCreators = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
