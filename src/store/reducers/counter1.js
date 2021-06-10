import * as types from "../action-types";

let initialState = { number: 5 };

export default function (oldState = initialState, action) {
  switch (action.type) {
    case types.ADD1:
      return { number: oldState.number + 5 };
    case types.MINUS1:
      return { number: oldState.number - 5 };
    default:
      return oldState;
  }
}
