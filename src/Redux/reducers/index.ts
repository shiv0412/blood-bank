import { combineReducers} from "redux";

import {dataReducer as registeredDonars} from "./dataReducer";
import {authentication as adminAccount } from "./authentication";
import { stockReducer as  stocks } from "./stocksReducer";


const rootReducer = combineReducers({
    registeredDonars,
    adminAccount,
    stocks
});

export default rootReducer;

