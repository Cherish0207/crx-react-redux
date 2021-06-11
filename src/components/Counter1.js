import React, { Component } from "react";
import actions from "../store/actions/counter1";
import { connect } from "../react-redux";
class Counter1 extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add1}>+</button>
        <button onClick={this.props.minus1}>-</button>
        <button onClick={this.props.minus}>-</button>
        <button
          onClick={() => {
            setTimeout(() => {
              this.props.add1();
            }, 1000);
          }}
        >
          1秒后加5
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => state.counter1;
// 这是一个映射函数,可以把仓库的状态进行映射出来分状态,分状态会成为组件属性对象
export default connect(mapStateToProps, actions)(Counter1);
/**
 * connect负责把仓库和组件进行关联 通过 Context获取store
 * actions也会进行绑定,成为当前组件属性对象
 */
