/* Library Imports */
import React, { useState } from "react";
import { connect } from "react-redux";

/* Styled Component Imports */
import styled from "styled-components";

/* Custom Imports */
import Pagination from "../pagination";
import { IReduxStore } from "../../Redux/reducers/initialState";
import RequestsDataDisplay from "../requests-data-display";
import { IUserRequest } from "../../models/models";

/* Interfaces */

interface ICheckboxesState {
  name: string;
  isChecked: boolean;
}

/* Styled Components */

const Wrapper = styled.div`
  background-color: #2c3e50;
  padding-bottom: 10px;
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  padding: 20px 5px;
  width: 50%;
`;

const FilterOptionsWrapper = styled.div`
  padding: 20px 5px;
  width: 25%;
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

const Requests = (props: any) => {
  const adminBloodbank = props.admin[0].bloodbank_name;

  const [filteredData, setFilteredData] = useState(
    props.values.filter((requests: IUserRequest) => {
      return requests.bloodbank === adminBloodbank && requests.requestProcessing.requestStatus !== "Completed";
    })
  );

  const [allData] = useState(
    props.values.filter((requestDetails:IUserRequest) => {
      return requestDetails.bloodbank === adminBloodbank && requestDetails.requestProcessing.requestStatus !== "Completed";
    })
  );
  const [searchBoxValue] = useState<string>();
  const [checkboxesInitialState] = useState<ICheckboxesState[]>([
    {
      name: "Active",
      isChecked: false,
    },
    {
      name: "Processing",
      isChecked: false,
    },
    {
      name: "Completed",
      isChecked: false,
    },
  ]);

  const HandleDataSearching = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const matchingData = props.values.filter((requestDetails: IUserRequest) => {
      return (
        requestDetails.bloodbank === adminBloodbank && requestDetails.requestProcessing.requestStatus !== "Completed" &&
        (requestDetails.patient_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
          requestDetails.phone.toString().includes(e.target.value) ||
          requestDetails.requestDate === e.target.value)
      );
    });
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
        (requestDetails: IUserRequest) => {
          return (
            currentlyCheckedStatus.includes(requestDetails.requestProcessing.requestStatus) &&
            requestDetails.bloodbank === adminBloodbank && requestDetails.requestProcessing.requestStatus !== "Completed"
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
            <Title>Manage Requests</Title>
          </div>
        </div>
      </Wrapper>
      <Container>
        <SearchWrapper>
          <Label>Search for requests</Label>
          <br />
          <input
            type="text"
            value={searchBoxValue}
            onChange={(e) => HandleDataSearching(e)}
            placeholder="Enter requester name or phone"
            className="admin_search_input_box"
          ></input>
        </SearchWrapper>
        <FilterOptionsWrapper>
          <Label>Browse by request status</Label>
          <br />
          <input
            type="checkbox"
            className="filter_checkbox"
            name="Active"
            onChange={(e) => handleCheckbox(e)}
          ></input>
          <CheckboxLabel>Active</CheckboxLabel>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="checkbox"
            className="filter_checkbox"
            name="Processing"
            onChange={(e) => handleCheckbox(e)}
          ></input>
          <CheckboxLabel>Processing</CheckboxLabel>
          <br />
          <input
            type="checkbox"
            className="filter_checkbox"
            name="Completed"
            onChange={(e) => handleCheckbox(e)}
          ></input>
          <CheckboxLabel>Completed</CheckboxLabel>
        </FilterOptionsWrapper>
        <DropdownWrapper>
          <Label>Browse by requested date</Label>
          <br />
          <input
            type="date"
            value={searchBoxValue}
            onChange={(e) => HandleDataSearching(e)}
            className="date_type_search"
          />
        </DropdownWrapper>
      </Container>
      <div className="container">
        {props.values.length > 0 ? (
          <>
            <Pagination
              data={filteredData}
              RenderComponent={RequestsDataDisplay}
              pageLimit={5}
              dataLimit={5}
            />
          </>
        ) : (
          <h6>No data to display</h6>
        )}
      </div>
    </>
  );
};
function mapStateToProps(state: IReduxStore) {
  return {
    values: state.bloodRequests,
    authentication: state.adminAccount,
  };
}

export default connect(mapStateToProps)(Requests);
