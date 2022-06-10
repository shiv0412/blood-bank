/* library imports */
import React, { useEffect, useState } from "react";
import { NavLink, Switch, Route, useHistory } from "react-router-dom";
import { BiCategoryAlt, BiListUl, BiLineChart, BiRun, BiBody, BiMessageDots} from "react-icons/bi";
import { connect } from "react-redux";
import UID from "uniquebrowserid";
import { BiUserCircle } from "react-icons/bi";

/* styled components imports */
import styled from "styled-components";

/* custom imports */
import AdminPannel from "./admin-pannel";
import Dashboard from "../dashboard/dashboard";
import DonarRegister from "./donar-register";
import Stock from "./stocks";
import { IReduxStore } from "../../Redux/reducers/initialState";
import { IAccountDetails } from "../../models/models";

/* styled components */

const Sidebar = styled.div`
  width: 20%;
  border-right: 1.5px solid lightgrey;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  display: block;
  padding: 10px 15px;
  border-bottom: 1.5px solid lightgrey;
  color: #566573;
  font-family: arial;
  font-weight: bold;
  &:hover {
    background-color: orangered;
    color: #fff;
  }
`;

const Item = styled.li``;

const RightBar = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: relative;
  }
`;

const HeaderContainer = styled.div`
  padding: 10px 0;
  background-color: #2c3e50;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #fff;
`;

const BloodbankName = styled.span`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-weight: 100;
  font-size: 12px;
`;

const Span = styled.span`
  padding-left:12px;
`;

/* main component */

const AdminHome = (props: any) => {

  const key = new UID().completeID();
  const history = useHistory();
  const [currentAdmin] = useState(
    props.values.filter((adminDetails:IAccountDetails) => {
      return adminDetails.key === key;
    })
  );

  useEffect(() => {
    const isLogin = props.values.filter((adminDetails:IAccountDetails) => {
      return adminDetails.key === key;
    });

    if (isLogin.length === 0) {
      history.push("/adminlogin");
    }
  });

  return (
    <>
      <HeaderContainer>
        Admin Pannel
        {currentAdmin.length > 0 ? (
          <BloodbankName>
            <BiUserCircle style={{ fontSize: "30px", paddingRight: "5px" }} />
            {currentAdmin[0].bloodbank_name}
          </BloodbankName>
        ) : (
          ""
        )}
      </HeaderContainer>
      <Container>
        <Sidebar>
          <List>
            <style>{`.is-active { color: white;background-color:orangered }`}</style>
            <Item>
              <StyledLink activeClassName="is-active" to="admin">
                <BiCategoryAlt />
                <Span>Dashboard</Span>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink activeClassName="is-active" to="adminpannel">
                <BiListUl />
                <Span>Donation</Span>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink activeClassName="is-active" to="/stocks">
                <BiLineChart />
                <Span>Stocks</Span>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="">
                <BiRun />
                <Span>Requests</Span>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="">
                <BiBody />
                <Span>Blood Issued</Span>
              </StyledLink>
            </Item>
            <Item>
              <StyledLink to="">
                <BiMessageDots />
                <Span>Queries</Span>
              </StyledLink>
            </Item>
          </List>
        </Sidebar>
        <RightBar>
          <Switch>
            {currentAdmin.length > 0 ? (
              <>
                <Route
                  path="/admin"
                  component={() => (
                    <Dashboard admin={currentAdmin}></Dashboard>
                  )}
                ></Route>
                <Route
                  path="/adminpannel"
                  component={() => (
                    <AdminPannel admin={currentAdmin}></AdminPannel>
                  )}
                ></Route>
                <Route
                  path="/donarregister"
                  component={() => (
                    <DonarRegister admin={currentAdmin}></DonarRegister>
                  )}
                ></Route>
                <Route
                  path="/stocks"
                  component={() => <Stock admin={currentAdmin}></Stock>}
                ></Route>
              </>
            ) : (
              ""
            )}
          </Switch>
        </RightBar>
      </Container>
    </>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.adminAccount,
  };
}
export default connect(mapStateToProps)(AdminHome);
