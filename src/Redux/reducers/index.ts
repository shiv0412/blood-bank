import { combineReducers} from "redux";

import {dataReducer as registeredDonars} from "./dataReducer";
import {authentication as adminAccount } from "./authentication";


const rootReducer = combineReducers({
    registeredDonars,
    adminAccount
});

export default rootReducer;

