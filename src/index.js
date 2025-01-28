// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import store from "./store";
import { bugAdded, bugResolved } from "./actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store chnaged!", store.getState());
// });

store.dispatch(bugAdded("bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());
