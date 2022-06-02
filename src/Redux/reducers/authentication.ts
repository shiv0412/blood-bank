/* eslint-disable no-lone-blocks */
import { initialstate } from "./initialState";

const authentication = (state = initialstate.adminaccount, action: any) => {
  switch (action.type) {

    case "Login":
       // return [...state, { ...action.values}];
         state.map((cvalue: any) => {
                if(cvalue.email===action.values.email && cvalue.password===action.values.password){ {
                    cvalue.key = action.values.key;
                    cvalue.email = action.values.email;
                    cvalue.password = action.values.password;
                    cvalue.isLogin = true;
                  }}
          });
          return state; 

    case "Logout":
      state.map((cvalue: any) => {
        if (cvalue.key === action.key) {
          {
            cvalue.key = "";
            cvalue.email = cvalue.email;
            cvalue.password = cvalue.password;
            cvalue.isLogin = false;
          }
        }
      });
      return state;

    default:
      console.log("default");
      return state;
  }
};

export default authentication;
