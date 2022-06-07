import { blooddata, dashboardinfo } from "../ConstData";
import DashboardCardOne from "./dashboard-card-one";
import { connect } from "react-redux";

import styled from "styled-components";
import DashboardCardTwo from "./dashboard-card-two";
import { IReduxStore } from "../Redux/reducers/initialState";
import { IRegisteredDonor } from "../models/models";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px;
`;

const Heading = styled.h6`
  padding: 5px 0 0 5px;
  font-family: Arial, Helvetica, sans-serif;
`;

const HR = styled.hr`
  margin: 0;
`;

const Dashboard = (props: any) => {
  const data: number[] = [];

  const totalDonars = props.donarsData.length;
  data.push(totalDonars);

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
  let date = today.getFullYear() + "-" + month + "-" + day;

  const todayDonars = props.donarsData.filter((val: IRegisteredDonor) => {
    return val.RegDate === date;
  });

  const donorsregisterToday = todayDonars.length;
  data.push(donorsregisterToday);
  data.push(20);
  data.push(10);


  const dashboardinfo =  [{
    info: data[0],
    headtext:"Total Donars",
    infoimg:"images/total.png",
  },{
    info: data[1],
    headtext:"Today Donars",
    infoimg:"images/donars.png",
  },{
    info: data[2],
    headtext:"Pending Requests",
    infoimg:"images/request.png",
  },{
    info: data[3],
    headtext:"Approved Today",
    infoimg:"images/approved.png",
  }]

  const bloodStocks = [
    {
      quantity: props.stocksData.Apos,
      bloodgroup: "A+",
    },
    {
      quantity: props.stocksData.Aneg,
      bloodgroup: "A-",
    },
    {
      quantity: props.stocksData.Bpos,
      bloodgroup: "B+",
    },
    {
      quantity: props.stocksData.Bneg,
      bloodgroup: "B-",
    },
    {
      quantity: props.stocksData.ABpos,
      bloodgroup: "AB+",
    },
    {
      quantity: props.stocksData.ABneg,
      bloodgroup: "AB-",
    },
    {
      quantity: props.stocksData.Opos,
      bloodgroup: "O+",
    },
    {
      quantity: props.stocksData.Oneg,
      bloodgroup: "O-",
    },
  ];

  return (
    <>
      <Heading>Insights</Heading>
      <HR />
      <Wrapper>
        {dashboardinfo.map((cvalue : dashboardinfo) => {
          return (
            <>
              <DashboardCardTwo
                info={cvalue.info}
                headtext={cvalue.headtext}
                infoimg={cvalue.infoimg}
              ></DashboardCardTwo>
            </>
          );
        })}
      </Wrapper>
      <Heading>Available Blood</Heading>
      <HR />
      <Wrapper>
        {bloodStocks.map((cvalue: blooddata) => {
          return (
            <>
              <DashboardCardOne
                quantity={cvalue.quantity}
                bloodgroup={cvalue.bloodgroup}
              ></DashboardCardOne>
            </>
          );
        })}
      </Wrapper>
    </>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    donarsData: state.registeredDonars,
    stocksData: state.stocks,
  };
}

export default connect(mapStateToProps)(Dashboard);
