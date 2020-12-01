import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

//subscribe - fires whenever store changeed, for UI component
// returns unsubscribe function out of the box to be used elsewhere
const unsubscribe = store.subscribe(() => {
  console.log("store change", store.getState());
});

//dispatch - update store
store.dispatch(bugAdded("Bug one"));

//unsubscribe();

//store.dispatch(bugRemoved(1));

//dispatch - resolve bug
store.dispatch(bugResolved(1));

console.log(store.getState());
