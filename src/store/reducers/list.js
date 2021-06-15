import * as types from "../action-types";

let initialState = { list: [] };

export default function counterReducer2(oldState = initialState, action) {
  switch (action.type) {
    case types.SEARCH:
      return { list: [{ name: "cherish" }, { name: "silence" }] };
    default:
      return oldState;
  }
}
