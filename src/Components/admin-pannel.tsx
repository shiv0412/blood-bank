import React, { memo, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";

import Pagination from "./pagination";
import { IReduxStore } from "../Redux/reducers/initialState";
import PaginationDataDisplay from "./pagination-data-display";

const Wrapper = styled.div`
  background-color: #566573;
  margin-top: 1%;
`;

const Title = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin: 2% 2%;
  padding-top: 2%;
  color: white;
  font-family: "Times New Roman";
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Button = styled.button`
  background-color: orangered;
  color: white;
  padding: 5px 10px;
  font-size: 13px;
  margin: 2.5% 2%;
  border: none;
  &:hover {
    background-color: #eb984e;
  }
`;

const Iconstyle = {
  fontSize: "20px",
  paddingBottom: "2px",
};

const ButtonContainer = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const WrapperTwo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1.5px solid lightgrey;
  border-top: 1.5px solid lightgrey;
`;

const Content = styled.div`
  width: 16.6%;
  padding: 5px 0px;
  padding: 15px 0;
  font-weight: bold;
  font-size: 14px;
  color: #566573;
  &:nth-child(4) {
    width: 25%;
  }
  &:nth-child(5) {
    text-align: center;
  }
  &:nth-child(6) {
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SearchWrapper = styled.div`
  padding: 20px 5px;
  width: 50%;
`;

const FilterOptionsWrapper = styled.div`
  padding: 20px 5px;
  width: 25%;
`;
const Dropdown = styled.select`
  border-radius: none;
  padding: 5px 10px;
  width: 98%;
  border: 1.5px solid lightgrey;
  color: #808b96;
  &:focus {
    outline: none;
  }
`;

const DropdownWrapper = styled.div`
  padding: 20px 5px;
  width: 25%;
`;
const Label = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  color: #566573;
  font-weight: bold;
  padding-bottom: 10px;
`;
const CheckboxLabel = styled.label`
  color: #808b96;
  font-family: Arial, Helvetica, sans-serif;
`;

const AdminPannel = (props: any) => {
  const history = useHistory();
  const [filteredData, setFilterData] = useState(props.values);
  const [searchValue, setSearchValues] = useState<string>();
  const [checkboxInitialState, setcheckboxInitialState] = useState([
    {
      name: "Approved",
      isChecked: false,
    },
    {
      name: "Donating",
      isChecked: false,
    },
    {
      name: "Discharged",
      isChecked: false,
    },
  ]);

  const onRegister = () => {
    history.push({
      pathname: "/donarregister",
      state: { id: "" },
    });
  };

  const handleChange = (e: any) => {
    const filteration = props.values.filter((value: any) => {
      return (
        value.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        value.phone.toString().includes(e.target.value) ||
        value.Bloodgroup === e.target.value
      );
    });
    setFilterData(filteration);
  };

  const handleCheckbox = (e: any) => {
    const { name, checked } = e.target;
    const exists = checkboxInitialState.findIndex(
      (values: any) => values.name === name
    );
    if (exists !== undefined && exists > -1 && checkboxInitialState) {
      checkboxInitialState[exists] = { name: name, isChecked: checked };
      const currentlyChecked = checkboxInitialState.filter((val: any) => {
        return val.isChecked === true;
      });
      const currentlyCheckedStatus = currentlyChecked.map((a) => a.name);
      let newArray = props.values.filter((c: any) =>
        currentlyCheckedStatus.includes(c.Status)
      );
      if(newArray.length>0){
      setFilterData(newArray);
      }else{
        setFilterData(props.values)
      }
    }
  };

  console.log(filteredData);

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Manage Donars</Title>
          </div>
          <ButtonContainer className="col-md-6">
            <Button onClick={() => onRegister()}>
              <AiOutlinePlusCircle style={Iconstyle} />
              &nbsp;Add New Donar
            </Button>
          </ButtonContainer>
        </div>
      </Wrapper>
      <Container>
        <SearchWrapper>
          <Label>Search for donors</Label>
          <br />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => handleChange(e)}
            placeholder="Enter donor name or phone"
            className="admin_search_input_box"
          ></input>
        </SearchWrapper>
        <FilterOptionsWrapper>
          <Label>Browse by donor status</Label>
          <br />
          <input
            type="checkbox"
            className="filter_checkbox"
            name="Approved"
            onChange={(e) => handleCheckbox(e)}
          ></input>
          <CheckboxLabel>Approved</CheckboxLabel>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="checkbox"
            className="filter_checkbox"
            name="Donating"
            onChange={(e) => handleCheckbox(e)}
          ></input>
          <CheckboxLabel>Donating</CheckboxLabel>
          <br />
          <input
            type="checkbox"
            className="filter_checkbox"
            name="Discharged"
            onChange={(e) => handleCheckbox(e)}
          ></input>
          <CheckboxLabel>Discharged</CheckboxLabel>
        </FilterOptionsWrapper>
        <DropdownWrapper>
          <Label>Browse by bloodgroup</Label>
          <br />
          <Dropdown onChange={(e) => handleChange(e)}>
            <option value="">All Bloodgroups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Dropdown>
        </DropdownWrapper>
      </Container>
      <div className="container">
        <WrapperTwo>
          <Content>Name</Content>
          <Content>Phone</Content>
          <Content>Bloodgroup</Content>
          <Content>Address</Content>
          <Content>Donar Status</Content>
          <Content>Action</Content>
        </WrapperTwo>
        {props.values.length > 0 ? (
          <>
            <Pagination
              data={filteredData}
              RenderComponent={PaginationDataDisplay}
              pageLimit={5}
              dataLimit={6}
            />
          </>
        ) : (
          <h6>No Donor's Data to display</h6>
        )}
      </div>
    </>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.registeredDonars,
    authentication: state.adminAccount,
  };
}

export default connect(mapStateToProps)(AdminPannel);
