import { initialstate } from "./initialState";

export const stockReducer = (stocks = initialstate.stocks , action:any) =>{
    switch(action.type){
        case "UPDATE_STOCK":            
            return {...stocks,...action.values}
        default:
            return stocks;
    }
}