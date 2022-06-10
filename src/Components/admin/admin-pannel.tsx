/* Library Imports */
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

/* Styled Component Imports */
import styled from "styled-components";

/* Custom Imports */
import Pagination from "../pagination";
import { IReduxStore } from "../../Redux/reducers/initialState";
import PaginationDataDisplay from "../pagination-data-display";
import { IRegisteredDonor } from "../../models/models";

/* Interfaces */

interface ICheckboxesState {
  name: string;
  isChecked: boolean;
}

/* Styled Components */

const Wrapper = styled.div`
  background-color: #2c3e50;
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

/* Main Component */

const AdminPannel = (props: any) => {
  
  const history = useHistory();
  const adminBloodbank = props.admin[0].bloodbank_name;

  const [filteredData, setFilteredData] = useState(
    props.values.filter((donorDetails: IRegisteredDonor) => {
      return donorDetails.Bloodbank === adminBloodbank;
    })
  );

  const [allData] = useState(
    props.values.filter((donorDetails: IRegisteredDonor) => {
      return donorDetails.Bloodbank === adminBloodbank;
    })
  );
  const [searchBoxValue] = useState<string>();
  const [checkboxesInitialState] = useState<ICheckboxesState[]>([
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

  const registerNewDonor = () => {
    history.push({
      pathname: "/donarregister",
      state: { id: "" },
    });
  };

  const handleDataSearching = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const matchingData = props.values.filter(
      (donorDetails: IRegisteredDonor) => {
        return (
          donorDetails.Bloodbank === adminBloodbank &&
          (donorDetails.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
            donorDetails.phone.toString().includes(e.target.value) ||
            donorDetails.Bloodgroup === e.target.value)
        );
      }
    );
    setFilteredData(matchingData);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    /* finding index of currently triggered checkbox */
    const exists = checkboxesInitialState.findIndex(
      (checkboxDetails: ICheckboxesState) => checkboxDetails.name === name
    );
    /* updating currently triggered checkbox to true */
    if (exists !== undefined && exists > -1 && checkboxesInitialState) {
      checkboxesInitialState[exists] = { name: name, isChecked: checked };
      const currentlyChecked = checkboxesInitialState.filter(
        (checkboxesCurrentState: ICheckboxesState) => {
          return checkboxesCurrentState.isChecked === true;
        }
      );
      /* finding currently triggered checkboxes with status */
      const currentlyCheckedStatus = currentlyChecked.map(
        (checkbox) => checkbox.name
      );
      /* updating filteredData matching with currently triggered checkboxes status */
      let matchingData = props.values.filter(
        (donorsDetails: IRegisteredDonor) => {
          return (
            currentlyCheckedStatus.includes(donorsDetails.Status) &&
            donorsDetails.Bloodbank === adminBloodbank
          );
        }
      );
      if (matchingData.length > 0) {
        setFilteredData(matchingData);
      } else {
        setFilteredData(allData);
      }
    }
  };

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Manage Donors</Title>
          </div>
          <ButtonContainer className="col-md-6">
            <Button onClick={() => registerNewDonor()}>
              <AiOutlinePlusCircle style={Iconstyle} />
              &nbsp;Add New Donor
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
            value={searchBoxValue}
            onChange={(e) => handleDataSearching(e)}
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
          <Dropdown onChange={(e) => handleDataSearching(e)}>
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
              dataLimit={5}
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
