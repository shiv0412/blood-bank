import { combineReducers} from "redux";

import {dataReducer as registeredDonars} from "./dataReducer";
import {bloodbankReducer as adminAccount } from "./bloodbankReducer";
import {requestsReducer as bloodRequests } from "./requestsReducer";

const rootReducer = combineReducers({
    registeredDonars,
    adminAccount,
    bloodRequests,
});

export default rootReducer;

