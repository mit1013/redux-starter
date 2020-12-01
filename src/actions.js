//used to refactor dipatch calls
import * as actions from "./actionTypes";

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
}

//or as arrow:
// use () around return as we are returning an object
export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: { id: id },
});

// note use shorthand for id: id (as key, value var are the same)
export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: { id },
});
