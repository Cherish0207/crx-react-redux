import React from "react";
import { useSelector, useDispatch } from "../react-redux";
/**
 * 前面redux的工作流程是由dispatch触发action后，直接去reducer执行相应的动作 --- 同步操作
 *
 * 但在某些复杂的业务逻辑中，这种同步的实现方式并不能很好的解决问题。
 *
 * 比如我们有一个这样的需求，点击按钮 -> 获取服务器数据 -> 渲染视图
 * 因为获取服务器数据需要异步实现，这时候就需要引入中间件改变redux同步执行的流程，形成异步流程
 * 有了中间件，redux的工作流程就变成 action -> middlewares -> reducer，
 * 点击按钮dispatch触发action -> 获取服务器数据 middlewares 的执行，
 * 当 middlewares 成功获取到服务器数据再触发reducer对应的动作，更新视图数据
 * 中间件机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。
 */
function Counter1() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.list);
  return (
    <div>
      <button
        onClick={() =>
          dispatch((dispatch, getState) => {
            setTimeout(() => {
              dispatch({ type: "SEARCH" });
            }, 1000);
          })
        }
      >
        1秒后显示数据
      </button>
      {state.list.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}
export default Counter1;
