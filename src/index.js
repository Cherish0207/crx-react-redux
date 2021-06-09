import { createStore } from "redux";
let counterValue = document.getElementById("counter-value");
let incrementBtn = document.getElementById("add-btn");
let decrementBtn = document.getElementById("minus-btn");

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

function render() {
  let newState = store.getState();
  console.log("重新渲染render", newState);
  counterValue.innerHTML = newState.number + "";
}
incrementBtn.addEventListener("click", function () {
  store.dispatch({ type: ADD });
});
decrementBtn.addEventListener("click", function () {
  store.dispatch({ type: MINUS });
});

store.subscribe(render);
render();
