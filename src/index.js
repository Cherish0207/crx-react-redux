import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "./redux";

const ADD = "ADD";
const MINUS = "MINUS";
let initState = { number: 0 };

const reducer = (oldState = initState, action) => {
  switch (action.type) {
    case ADD:
      return { number: oldState.number + action.payload };
    case MINUS:
      return { number: oldState.number - 1 };
    default:
      return oldState;
  }
};
let store = createStore(reducer /* , initState */);
function add(payload) {
  return { type: "ADD", payload };
}
function minus() {
  return { type: "MINUS" };
}
const actions = { add, minus };
const boundActions = bindActionCreators(actions, store.dispatch);
class Counter extends Component {
  unsubscribe;
  state = { number: store.getState().number };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // 进行订阅
    this.unsubscribe = store.subscribe(() =>
      this.setState({ number: store.getState().number })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => boundActions.add(2)}>+</button>
        <button onClick={boundActions.minus}>-</button>
        <button
          onClick={() => {
            setTimeout(() => {
              boundActions.add();
            }, 1000);
          }}
        >
          1秒后加1
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
