export interface IAccountDetails {
  key: string;
  isLogin: boolean;
  id:string;
  bloodbank_name:string;
  contact_person:string;
  phone:number;
  state: string;
  city: string;
  address: string;
  pincode: number;
  email: string;
  password: string;
  stocks:object
}

export interface IRegisteredDonor {
  id: string;
  name: string;
  phone: Number;
  DateOfBirth: Date;
  Bloodgroup: string;
  Gender: string;
  City: string;
  State: string;
  Pincode: Number;
  RegDate: string;
  Address: string;
  Bloodbank: string;
  medical: string;
  Status: string;
}


export interface IBloodbankStock {
  Apos: number;
  Aneg: number;
  Bpos: number;
  Bneg: number;
  ABpos: number;
  ABneg: number;
  Opos: number;
  Oneg: number 
}

export interface IBloodStockInfo {
  quantity: number;
  bloodgroup: string;
}
export interface IDashboardInfo {
  info: number;
  headtext: string;
  infoimg: string;
}

export interface IUserRequest {
  patient_name:string;
  bloodgroup:string;
  units:number;
  phone:number;
  requiredDate:string;
  requestDate:string;
  bloodbank:string;
  reason:string;
  requestProcessing:{
    requestStatus:string,
    updatingDate:string,
    comment:string
  }
}
