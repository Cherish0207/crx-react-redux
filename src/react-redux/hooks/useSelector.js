import React from "react";
import ReactReduxContext from "../ReactReduxContext";
function useSelector(selector) {
  const { store } = React.useContext(ReactReduxContext);
  let state = store.getState();
  let selectedState = selector(state);
  let [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  React.useEffect(() => {
    return store.subscribe(forceUpdate);
  });
  return selectedState;
}
export default useSelector;
