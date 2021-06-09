import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "./redux";

const ADD = "ADD";
const MINUS = "MINUS";
let initState = { number: 0 };

const reducer = (oldState = initState, action) => {
  switch (action.type) {
    case ADD:
      return { number: oldState.number + 1 };
    case MINUS:
      return { number: oldState.number - 1 };
    default:
      return oldState;
  }
};
let store = createStore(reducer /* , initState */);

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
         <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
         <button onClick={() => store.dispatch({ type: "MINUS" })}>-</button>
         <button
           onClick={() => {
             setTimeout(() => {
               store.dispatch({ type: "ADD" });
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
