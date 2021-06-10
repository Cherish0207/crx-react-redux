import React, { Component } from "react";
import { bindActionCreators } from "../redux";
import actions from "../store/actions/counter2";
import store from "../store";
const boundActions = bindActionCreators(actions, store.dispatch);
export default class Counter extends Component {
  unsubscribe;
  state = { number: store.getState().counter2.number };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // 进行订阅
    this.unsubscribe = store.subscribe(() =>
      this.setState({ number: store.getState().counter2.number })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={boundActions.add2}>+</button>
        <button onClick={boundActions.minus2}>-</button>
        <button
          onClick={() => {
            setTimeout(() => {
              boundActions.add2();
            }, 1000);
          }}
        >
          1秒后加2
        </button>
      </div>
    );
  }
}
