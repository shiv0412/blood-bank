import { blooddata, bloodinfo, dashboarddata,dashboardinfo } from "../ConstData";
import DashboardCardOne from "./dashboard-card-one";

import styled from "styled-components";
import DashboardCardTwo from "./dashboard-card-two";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0px;
`;

const Heading = styled.h6`
  padding : 5px 0 0 0 ;
  font-family: Arial, Helvetica, sans-serif;
`;

const HR = styled.hr`
    margin: 0;
`;

const Dashboard = () => {
  const data = bloodinfo;
  const dashboardinfo = dashboarddata;

  return (
    <>
    <Heading>Insights</Heading>
    <HR/>
    <Wrapper>
        {dashboardinfo.map((cvalue:dashboardinfo) => {
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
      <HR/>
      <Wrapper>
        {data.map((cvalue: blooddata) => {
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

export default Dashboard;
