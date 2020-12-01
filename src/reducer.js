//reducer - 1 per 'slice' of state
//return state, provide logic for dispatch actions
import * as actions from "./actionTypes"; // gives actions.BUG_ADDED etc

let lastId = 0;

export default function reducer(state = [], action) {
  //more common to use switch... case
  if (action.type == actions.BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type == actions.BUG_REMOVED) {
    return state.filter((bug) => bug.id != action.payload.id);
  } else if (action.type == actions.BUG_RESOLVED) {
    return state.map((bug) =>
      bug.id != action.payload.id ? bug : { ...bug, resolved: true }
    );
  } else {
    return state;
  }
}
