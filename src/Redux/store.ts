import rootReducer from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/* store configuration with localStorage */
function saveToLocalStorage(state:any) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("Store", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("Store");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
  const store = createStore(rootReducer, loadFromLocalStorage(), composeWithDevTools());
  store.subscribe(() => saveToLocalStorage(store.getState()));

/* store configuration without localStorage */
//const store = createStore(rootReducer, composeWithDevTools());

export default store;
