import React from "react";
import ReactDOM from "react-dom";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
ReactDOM.render(
  <div>
    <p>Counter1：初始值5，每次+-5</p>
    <Counter1 />
    <hr />
    <p>Counter2：初始值2，每次+-2</p>
    <Counter2 />
  </div>,
  document.getElementById("root")
);
