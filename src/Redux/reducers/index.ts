import { combineReducers} from "redux";

import {dataReducer as registeredDonars} from "./dataReducer";
import {bloodbankReducer as adminAccount } from "./bloodbankReducer";

const rootReducer = combineReducers({
    registeredDonars,
    adminAccount
});

export default rootReducer;

