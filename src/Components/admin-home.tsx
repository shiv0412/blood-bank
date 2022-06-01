import React from "react";
import styled from "styled-components";
import {NavLink,Switch,Route} from "react-router-dom";
import {BiCategoryAlt,BiListUl,BiLineChart,BiRun,BiBody,BiMessageDots} from "react-icons/bi";
import AdminPannel from "./admin-pannel";
import Dashboard from "./Dashboard";
import DonarRegister from "./donar-register";
import Stock from "./stocks";

const AdminHome = () => {

  const Sidebar = styled.div`
  width:20%;
  padding-right:20px;
  @media(max-width: 768px){
      width:100%;
      border:none;
  }
  `;

  const List = styled.ul`
  list-style-type:none;
  padding:0;
  margin:0;
  `
const StyledLink = styled(NavLink)`
text-decoration:none;
width:100%;
display:block;
padding:10px 15px;
border-bottom:1.5px solid lightgrey;
color:#566573;
font-family:arial;
font-weight:bold;
&:hover{
    background-color:orangered;
    color:#fff;
}
`;

const Item = styled.li`
`;

const RightBar = styled.div`
width:80%;
@media(max-width:768px){
    width:100%;
}
`;

const Container = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
@media(max-width:768px){
    display:relative;
}
`;

  return (
  <>
  <Container>
  <Sidebar>
      <List>
      <style>{`.is-active { color: white;background-color:orangered }`}</style>
          <Item><StyledLink activeClassName="is-active" to="admin"><BiCategoryAlt/>&nbsp; &nbsp; Dashboard</StyledLink></Item>
          <Item><StyledLink activeClassName="is-active" to="adminpannel"><BiListUl/>&nbsp; &nbsp; Donation</StyledLink></Item>
          <Item><StyledLink activeClassName="is-active" to="/stocks"><BiLineChart/>&nbsp; &nbsp; Stocks</StyledLink></Item>
          <Item><StyledLink to=""><BiRun/>&nbsp; &nbsp; Requests</StyledLink></Item>
          <Item><StyledLink to=""><BiBody/>&nbsp; &nbsp; Blood Issued</StyledLink></Item>
          <Item><StyledLink to=""><BiMessageDots/>&nbsp; &nbsp; Queries</StyledLink></Item>
      </List>
  </Sidebar>
  <RightBar>
      <Switch>
      <Route path="/admin" component={()=> <Dashboard></Dashboard>}></Route>
      <Route path="/adminpannel" component={()=> <AdminPannel></AdminPannel>}></Route>
      <Route path="/donarregister" component={()=><DonarRegister></DonarRegister>}></Route>
      <Route path="/stocks" component={()=><Stock></Stock>}></Route>
      </Switch>
  </RightBar>
  </Container>
  </>
  );
};

export default AdminHome;
