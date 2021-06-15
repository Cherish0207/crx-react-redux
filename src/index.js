// import React from "react";
// import ReactDOM from "react-dom";
// import Counter1 from "./components/Counter1";
// import Counter2 from "./components/Counter2";
import store from "./store";
// import { Provider } from "react-redux";
// ReactDOM.render(
//   <Provider store={store}>
//     <p>Counter1：初始值5，每次+-5</p>
//     <Counter1 />
//     <hr />
//     <p>Counter2：初始值2，每次+-2</p>
//     <Counter2 />
//   </Provider>,
//   document.getElementById("root")
// );
// Error: Actions must be plain objects. 
// Instead, the actual type was: 'Promise'. 
// You may need to add middleware to your store setup to handle dispatching other values, 
// such as 'redux-thunk' to handle dispatching functions.
// 错误：操作必须是普通对象。相反，实际的类型是：“Promise”。
// 您可能需要将中间件添加到存储设置中以处理分派其他值，例如“redux thunk”以处理分派函数。
store.dispatch(
  new Promise((resolve) => {
    resolve();
  })
);