import rootReducer from "./Redux/reducers";

import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;