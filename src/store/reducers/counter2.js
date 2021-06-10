import * as types from "../action-types";

let initialState = { number: 2 };

export default function (oldState = initialState, action) {
  switch (action.type) {
    case types.ADD2:
      return { number: oldState.number + 2 };
    case types.MINUS2:
    case types.MINUS:
      return { number: oldState.number - 2 };
    default:
      return oldState;
  }
}
