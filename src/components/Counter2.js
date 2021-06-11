import React, { Component } from "react";
import actions from "../store/actions/counter2";
import { connect } from "../react-redux";
class Counter2 extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add2}>+</button>
        <button onClick={this.props.minus2}>-</button>
        <button onClick={this.props.minus}>-</button>
        <button
          onClick={() => {
            setTimeout(() => {
              this.props.add2();
            }, 1000);
          }}
        >
          1秒后加5
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => state.counter2;
// 这是一个映射函数,可以把仓库的状态进行映射出来分状态,分状态会成为组件属性对象
export default connect(mapStateToProps, actions)(Counter2);
