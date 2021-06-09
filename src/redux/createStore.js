/**
 *
 * @param {*} reducer 处理器
 * @param {*} preloadedState 仓库的初始状态
 * @returns
 */
const createStore = (reducer, preloadedState) => {
  let state = preloadedState;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((l) => l());
    return action; // 99%是没用的,只发现react ssr一个地方用到了
  }
  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    }; // 返回取消订阅函数，方便后面取消订阅 当卸载组件时执行
  }
  dispatch({ type: "@@REDUX/INIT" });
  return {
    getState,
    dispatch,
    subscribe,
  };
};
export default createStore;
