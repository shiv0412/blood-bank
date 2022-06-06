
export const autoClose:number=1500; 
export interface blooddata{
    quantity:number,
    bloodgroup:string
}
export interface dashboardinfo {
    info:number;
    headtext:string;
    infoimg:string;
}

export const bloodinfo:Array<blooddata> = [
    {
      quantity: 10,
      bloodgroup: "A+",
    },
    {
      quantity: 7,
      bloodgroup: "A-",
    },
    {
      quantity: 6,
      bloodgroup: "B+",
    },
    {
      quantity: 0,
      bloodgroup: "B-",
    },
    {
      quantity: 12,
      bloodgroup: "AB+",
    },
    {
      quantity: 13,
      bloodgroup: "AB-",
    },
    {
      quantity: 2,
      bloodgroup: "O+",
    },
    {
      quantity: 11,
      bloodgroup: "O-",
    },
  ];

  export const dashboarddata:Array<dashboardinfo>=[{
    info:90,
    headtext:"Total Donars",
    infoimg:"images/total.png",
  },{
    info:18,
    headtext:"Today Donars",
    infoimg:"images/donars.png",
  },{
    info:5,
    headtext:"Pending Requests",
    infoimg:"images/request.png",
  },{
    info:9,
    headtext:"Approved Today",
    infoimg:"images/approved.png",
  }]

  export interface Data_Value {
    id: string;
    name: string;
    phone: number;
    DateOfBirth: Date;
    Bloodgroup: string;
    Gender: string;
    City: string;
    State: string;
    Pincode: number;
    RegDate: string;
    Address: string;
    Bloodbank: string;
    medical: string;
    Status: string;
  }
