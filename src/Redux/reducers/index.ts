import { combineReducers} from "redux";

import dataReducer from "./dataReducer";
import authentication from "./authentication";


const rootReducer = combineReducers({
    dataReducer,
    authentication
});

export default rootReducer;

