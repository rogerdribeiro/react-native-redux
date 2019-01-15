const INITIAL_STATE = ["fazer café", "estudar react native"];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
}
