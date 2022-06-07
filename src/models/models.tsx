export interface IAccountDetails {
  email: string;
  password: string;
  key: string;
  isLogin: boolean;
  Bloodbank:string;
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