import React from "react";
import ReactReduxContext from "./ReactReduxContext";

function Provider(props) {
  // Provider的下层组件都可以通过 Reactreduxcontext:获取va1ue值
  return (
    <ReactReduxContext.Provider value={{ store: props.store }}>
      {props.children}
    </ReactReduxContext.Provider>
  );
}
export default Provider