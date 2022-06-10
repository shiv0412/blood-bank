import { toast } from "react-toastify";
import { autoClose } from "../../constants";

export const dateFinder = () => {
  let today = new Date();
  let day;
  let month;
  if (today.getDate() < 10) {
    day = 0 + "" + today.getDate();
  } else {
    day = today.getDate();
  }

  if (today.getMonth() + 1 < 10) {
    month = 0 + "" + (today.getMonth() + 1);
  } else {
    month = today.getMonth() + 1;
  }
  return today.getFullYear() + "-" + month + "-" + day;
};

export const dashboardInformation = (adminBloodbanksAssociatedData: any) => {
  const dashboardinfo = [
    {
      info: adminBloodbanksAssociatedData[0],
      headtext: "Total Donars",
      infoimg: "images/total.png",
    },
    {
      info: adminBloodbanksAssociatedData[1],
      headtext: "Today Donars",
      infoimg: "images/donars.png",
    },
    {
      info: adminBloodbanksAssociatedData[2],
      headtext: "Pending Requests",
      infoimg: "images/request.png",
    },
    {
      info: adminBloodbanksAssociatedData[3],
      headtext: "Approved Today",
      infoimg: "images/approved.png",
    },
  ];

  return dashboardinfo;
};

export const bloodbankStock = (adminBloodbankStock: any) => {
  const bloodStocks = [
    {
      quantity: adminBloodbankStock[0].stocks.Apos,
      bloodgroup: "A+",
    },
    {
      quantity: adminBloodbankStock[0].stocks.Aneg,
      bloodgroup: "A-",
    },
    {
      quantity: adminBloodbankStock[0].stocks.Bpos,
      bloodgroup: "B+",
    },
    {
      quantity: adminBloodbankStock[0].stocks.Bneg,
      bloodgroup: "B-",
    },
    {
      quantity: adminBloodbankStock[0].stocks.ABpos,
      bloodgroup: "AB+",
    },
    {
      quantity: adminBloodbankStock[0].stocks.ABneg,
      bloodgroup: "AB-",
    },
    {
      quantity: adminBloodbankStock[0].stocks.Opos,
      bloodgroup: "O+",
    },
    {
      quantity: adminBloodbankStock[0].stocks.Oneg,
      bloodgroup: "O-",
    },
  ];

  return bloodStocks;
};

export const toastNotification = (message: string) =>
  toast.success(message, {
    position: "top-center",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
