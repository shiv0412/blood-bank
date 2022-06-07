/* eslint-disable no-lone-blocks */
import { IAccountDetails } from "../../models/models";
import { initialstate } from "./initialState";

export const authentication = (adminAccounts = initialstate.adminAccount, action: any) => {
  switch (action.type) {

    case "Login":
         adminAccounts?.map((cvalue: IAccountDetails) => {
                if(cvalue.email===action.values.email && cvalue.password===action.values.password){ {
                    cvalue.key = action.values.key;
                    cvalue.email = action.values.email;
                    cvalue.password = action.values.password;
                    cvalue.isLogin = true;
                    cvalue.Bloodbank = action.values.Bloodbank;
                  }}
          });

          return adminAccounts; 

    case "Logout":
      adminAccounts?.map((cvalue: IAccountDetails) => {
        if (cvalue.key === action.key) {
          {
            cvalue.key = "";
            cvalue.email = cvalue.email;
            cvalue.password = cvalue.password;
            cvalue.isLogin = false;
          }
        }
      });
      return adminAccounts;

    default:
      return adminAccounts;
  }
};


