/**
 *
 * @param {*} reducers 把一个 reducers 对象变成一个 reducer 函数
 * @returns
 */
export default function combineReducers(reducers) {
  function rootReducer(state = {}, action) {
    let nextState = {};
    for (let key in reducers) {
      // key counter1 counter2
      const reducer = reducers[key];
      const previousState = state[key];
      const nextStateForKey = reducer(previousState, action);
      nextState[key] = nextStateForKey;
      // nextState[key] = reducers[key](state[key], action);
    }
    return nextState;
  }
  return rootReducer;
}
