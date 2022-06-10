/* eslint-disable no-lone-blocks */
import { IAccountDetails } from "../../models/models";
import { initialstate } from "./initialState";

export const bloodbankReducer = (
  adminAccounts = initialstate.adminAccount,
  action: any
) => {
  switch (action.type) {
    case "REGISTER_BLOODBANK":
      adminAccounts?.unshift({
        ...action.values,
        stocks: {
          Apos: 0,
          Aneg: 0,
          Bpos: 0,
          Bneg: 0,
          ABpos: 0,
          ABneg: 0,
          Opos: 0,
          Oneg: 0,
        },
      });
      return adminAccounts;

    case "LOGIN_BLOODBANK":
      adminAccounts?.map((cvalue: IAccountDetails) => {
        if (
          cvalue.email === action.values.email &&
          cvalue.password === action.values.password
        ) {
          {
            cvalue.key = action.values.key;
            cvalue.isLogin = true;
          }
        }
      });
      return adminAccounts;

    case "LOGOUT_BLOODBANK":
      adminAccounts?.map((cvalue: IAccountDetails) => {
        if (cvalue.key === action.key) {
          {
            cvalue.key = "";
            cvalue.isLogin = false;
          }
        }
      });
      return adminAccounts;

    case "UPDATE_STOCK":
      const exists = adminAccounts?.findIndex(
        (values: IAccountDetails) =>
          values.bloodbank_name === action.bloodbank_name
      );
      if (exists !== undefined && exists > -1 && adminAccounts) {
        adminAccounts[exists].stocks = action.values;
      }
      return adminAccounts;

    default:
      return adminAccounts;
  }
};
