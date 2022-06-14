/* library imports */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

/* custom imports */
import DashboardCardOne from "./dashboard-card-one";
import DashboardCardTwo from "./dashboard-card-two";
import {
  bloodbankStock,
  dashboardInformation,
  dateFinder,
} from "../functions/functions";
import { IReduxStore } from "../../Redux/reducers/initialState";
import {
  IAccountDetails,
  IRegisteredDonor,
  IBloodStockInfo,
  IDashboardInfo,
  IUserRequest,
} from "../../models/models";

/* styled components */

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
  const adminBloodbanksAssociatedData: number[] = [];
  const adminBloodbank:string = props.admin[0].bloodbank_name;
  /* finding total donors related to current admin bloodbank */
  const totalDonors = props.donarsData.filter(
    (donorsDetails: IRegisteredDonor) => {
      return donorsDetails.Bloodbank === adminBloodbank;
    }
  );
  /* finding total donors registered today current admin bloodbank */
  const donorsRegisterToday = props.donarsData.filter(
    (val: IRegisteredDonor) => {
      return (
        val.RegDate === dateFinder() &&
        val.Bloodbank === props.admin[0].bloodbank_name
      );
    }
  );
  /* finding total pending request for admin bloodbank */
  const pendingRequests = props.bloodRequestData.filter((val: IUserRequest) => {
    return (
      val.requestProcessing.requestStatus !== "Completed" &&
      val.bloodbank === props.admin[0].bloodbank_name
    );
  });
  /* finding today approved request for admin bloodbank */
  const approvedRequests = props.bloodRequestData.filter(
    (val: IUserRequest) => {
      return (
        val.requestProcessing.requestStatus === "Completed" &&
        val.requestProcessing.updatingDate === dateFinder() &&
        val.bloodbank === props.admin[0].bloodbank_name
      );
    }
  );

  adminBloodbanksAssociatedData.push(totalDonors.length);
  adminBloodbanksAssociatedData.push(donorsRegisterToday.length);
  adminBloodbanksAssociatedData.push(pendingRequests.length);
  adminBloodbanksAssociatedData.push(approvedRequests.length);

  const dashboardinfo = dashboardInformation(adminBloodbanksAssociatedData);
  const adminBloodbankStock = props.stocksData.filter(
    (adminAccount: IAccountDetails) => {
      return adminAccount.bloodbank_name === adminBloodbank;
    }
  );
  const bloodStocks = bloodbankStock(adminBloodbankStock);

  return (
    <>
      <Heading>Insights</Heading>
      <HR />
      <Wrapper>
        {dashboardinfo.map((cvalue: IDashboardInfo) => {
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
        {bloodStocks.map((cvalue: IBloodStockInfo) => {
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
    stocksData: state.adminAccount,
    bloodRequestData: state.bloodRequests,
  };
}

export default connect(mapStateToProps)(Dashboard);
